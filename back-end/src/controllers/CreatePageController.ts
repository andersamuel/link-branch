import { Request, Response } from "express";
import prisma from "../database/prisma";

export class CreatePageController {
  async handle(request: Request, response: Response) {
    const { name, client_id } = request.body;

    const page = await prisma.pages.create({
      data: {
        name,
        slug: name,
        client_id,
        updated_at: new Date(),
      },
    });

    return response.status(200).send(page);
  }
}
