import { Request, Response } from "express";
import prisma from "../database/prisma";

export class UpdatePageController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name } = request.body;

    if (!id) return response.status(400).send({ error: "No id provided" });

    if (!name)
      return response.status(400).send({ error: "No 'name' provided" });

    try {
      const page = await prisma.pages.update({
        where: { id },
        data: {
          name,
          slug: name,
        },
      });

      return response.status(200).send(page);
    } catch (error) {
      return response.status(500).send(error);
    }
  }
}
