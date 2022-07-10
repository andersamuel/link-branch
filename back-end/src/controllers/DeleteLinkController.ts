import { Request, Response } from "express";
import prisma from "../database/prisma";

export class DeleteLinkController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const link = await prisma.links.delete({
        where: {
          id,
        },
      });

      return response.status(200).send(link);
    } catch (error) {
      return response.status(500).send(error);
    }
  }
}
