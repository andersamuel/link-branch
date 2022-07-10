import React, { useState } from "react";

import {
  Container,
  Title,
  Description,
  Form,
  Inputs,
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
} from "./styles";

export const Login: React.FC = () => {
  const [seePassword, setSeePassword] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handlePassword = () => setSeePassword(!seePassword);

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();

    console.log({ user: user, senha: password });
  };

  return (
    <Container>
      <Title>
        Bem vindo ao <span>Linkbranch</span>
      </Title>
      <Description>Preencha os dados do login para acessar</Description>
      <Form onSubmit={handleLogin}>
        <Inputs>
          <label htmlFor="user">Usuário ou email</label>
          <div>
            <input
              type="text"
              name="user"
              id="user"
              placeholder="johndoe@email.com"
              autoComplete="newPassword"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <UserIcon />
          </div>
        </Inputs>
        <Inputs>
          <label htmlFor="password">Senha</label>
          <div>
            <input
              type={seePassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="suasenha"
              autoComplete="newPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {seePassword ? (
              <EyeSlashIcon onClick={handlePassword} />
            ) : (
              <EyeIcon onClick={handlePassword} />
            )}
          </div>
        </Inputs>
        <button type="submit">Entrar</button>
      </Form>
      <Description>Ainda não possui uma conta?</Description>
      <a href="/">Registre-se</a>
    </Container>
  );
};
