import { Request, Response } from "express";
import prisma from "../database/prisma";
import bcrypt from "bcrypt";

export class CreateNewUserController {
  async handle(request: Request, response: Response) {
    const { user, email, password, name, last_name, premium } = request.body;

    const userVerification = await prisma.clients.findFirst({
      where: { user },
    });

    if (userVerification)
      return response.status(409).send({ message: "User already exists" });

    const emailVerification = await prisma.clients.findFirst({
      where: { email },
    });

    if (emailVerification)
      return response.status(409).send({ message: "Email already exists" });

    if (password.length < 8)
      return response.status(409).send({ message: "Password is too short" });

    try {
      bcrypt.hash(password, 10, async (err, hash) => {
        await prisma.clients.create({
          data: {
            user,
            slug: user,
            email,
            password: hash,
            name,
            last_name,
            premium,
            updated_at: new Date(),
          },
        });
      });

      return response.status(200).send({ message: `Welcome, ${name}!` });
    } catch (error) {
      return response.status(500).send(error);
    }
  }
}
