import bcrypt from "bcrypt";

const comparePassword = (password: string, passwordCrypted: string) => {
  return bcrypt.compare(password, passwordCrypted);
};

export default comparePassword;
