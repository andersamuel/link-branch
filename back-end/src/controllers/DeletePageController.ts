import { Request, Response } from "express";
import prisma from "../database/prisma";

export class DeletePageController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const page = await prisma.pages.delete({
        where: {
          id,
        },
      });

      return response.status(200).send(page);
    } catch (error) {
      return response.status(500).send(error);
    }
  }
}
