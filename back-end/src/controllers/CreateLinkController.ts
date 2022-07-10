import { Request, Response } from "express";
import prisma from "../database/prisma";

export class CreateLinkController {
  async handle(request: Request, response: Response) {
    const { page_id, type, name, link } = request.body;

    if (!page_id || !type || !name || !link)
      return response.status(400).send({ error: "Fill in all fields" });

    try {
      const links = await prisma.links.create({
        data: {
          page_id,
          type,
          name,
          link,
          updated_at: new Date(),
        },
      });

      return response.status(200).send(links);
    } catch (error) {
      return response.status(500).send(error);
    }
  }
}
