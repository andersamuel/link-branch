import { Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../database/prisma";

import comparePassword from "../utils/ComparePassword";
import updateUser from "../utils/UpdateUser";

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { user, email, password, newPassword, name, last_name, premium } =
      request.body;

    try {
      if (!newPassword) {
        const update = await updateUser(
          id,
          user,
          email,
          name,
          last_name,
          premium
        );

        return response.status(200).send(update);
      } else {
        const oldPassword = await prisma.clients.findFirst({
          where: { id },
          select: { password: true },
        });

        const checkPassword = await comparePassword(
          password,
          oldPassword?.password!
        );

        if (!checkPassword)
          return response
            .status(401)
            .send({ error: "Invalid current password" });

        bcrypt.hash(newPassword, 10, async (err, hash) => {
          await prisma.clients.update({
            where: {
              id,
            },
            data: {
              password: hash,
              updated_at: new Date(),
            },
          });
        });

        return response
          .status(200)
          .send({ message: "Password changed successfully" });
      }
    } catch (error) {
      return response.status(500).send(error);
    }
  }
}
