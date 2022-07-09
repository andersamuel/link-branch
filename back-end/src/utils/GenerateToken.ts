import "dotenv/config";
import jwt from "jsonwebtoken";

const generateToken = (id: string) => {
  console.log(process.env.JWT_SECRET_KEY);
  console.log(process.env.JWT_EXPIRATIN);
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY!, {
    expiresIn: process.env.JWT_EXPIRATIN,
  });
};

export default generateToken;
