import prisma from "../database/prisma";

const findUserByEmail = (user: string) => {
  return prisma.clients.findFirst({ where: { email: user } });
};

export default findUserByEmail;
