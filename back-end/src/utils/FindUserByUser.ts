import prisma from "../database/prisma";

const findUserByUser = (user: string) => {
  return prisma.clients.findFirst({ where: { user } });
};

export default findUserByUser;
