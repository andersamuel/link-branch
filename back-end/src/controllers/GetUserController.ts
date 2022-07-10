import { Request, Response } from "express";
import prisma from "../database/prisma";

export class GetUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const user = await prisma.clients.findUnique({
        where: { id },
      });

      return response.status(200).send(user);
    } catch (error) {
      return response.status(500).send(error);
    }
  }
}
