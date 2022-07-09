import "dotenv/config";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const AuthMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authorization = request.headers.authorization;

  if (!authorization)
    return response.status(401).send({ error: "No token provided" });

  const parts = authorization.split(" ");

  if (parts.length != 2)
    return response.status(401).send({ error: "Token error" });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return response.status(401).send({ error: "Token malformated" });

  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY!, (err) => {
      if (err) return response.status(401).send({ error: "Token invalid" });

      return next();
    });
  } catch (error) {
    return response.status(500).send(error);
  }
};
