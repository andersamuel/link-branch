import prisma from "../database/prisma";

const updateUser = (
  id: string,
  user: string,
  email: string,
  name: string,
  last_name: string,
  premium: number
) => {
  return prisma.clients.update({
    where: { id: id },
    data: {
      user,
      slug: user,
      email,
      name,
      last_name,
      premium,
      updated_at: new Date(),
    },
  });
};

export default updateUser;
