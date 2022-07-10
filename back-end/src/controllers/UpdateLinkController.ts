import { Request, Response } from "express";
import prisma from "../database/prisma";

export class UpdateLinkController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { type, name, link } = request.body;

    if (!id) return response.status(400).send({ error: "No id provided." });

    try {
      const links = await prisma.links.update({
        where: {
          id,
        },
        data: {
          type,
          name,
          link,
        },
      });

      return response.status(200).send(links);
    } catch (error) {
      return response.status(500).send(error);
    }
  }
}
