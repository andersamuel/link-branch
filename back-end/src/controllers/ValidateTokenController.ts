import "dotenv/config";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export class ValidateTokenController {
  async handle(request: Request, response: Response) {
    const { id, token } = request.body;

    if (!process.env.JWT_SECRET_KEY)
      return response.status(500).json({ message: "No JWT_SECRET provided" });

    if (!id || !token)
      return response.status(400).json({ message: "Fill in all fields" });

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET_KEY
      ) as TokenPayload;

      if (id === decoded?.id) return response.status(200).json({ auth: true });

      return response.status(401).send({ auth: false });
    } catch (error) {
      return response.status(401).send({ auth: false });
    }
  }
}
