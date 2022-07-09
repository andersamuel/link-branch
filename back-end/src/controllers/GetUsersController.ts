import { Request, Response } from "express";
import prisma from "../database/prisma";

export class GetUsersController {
  async handle(request: Request, response: Response) {
    const users = await prisma.clients.findMany({
      select: {
        slug: true,
        pages: {
          select: {
            slug: true,
          },
        },
      },
    });

    return response.status(200).send(users);
  }
}
