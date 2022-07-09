import { Request, Response } from "express";

import validateMail from "../utils/ValidateMail";
import findUserByEmail from "../utils/FindUserByEmail";
import findUserByUser from "../utils/FindUserByUser";
import comparePassword from "../utils/ComparePassword";
import generateToken from "../utils/GenerateToken";

export class LoginAuthenticationController {
  async handle(request: Request, response: Response) {
    const { user, password } = request.body;

    if (!user || !password)
      return response.status(400).send({ error: "Fill in all fields" });

    const authentication = validateMail(user)
      ? await findUserByEmail(user)
      : await findUserByUser(user);

    if (!authentication)
      return response.status(401).send({ error: "Invalid credentials" });

    if (!(await comparePassword(password, authentication?.password!)))
      return response.status(401).send({ error: "Invalid credentials" });

    const token = generateToken(authentication.id);

    return response.status(200).send({ token: token });
  }
}
