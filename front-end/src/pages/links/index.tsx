import React from "react";
import { LinksButton } from "../../components/links";

import {
  Container,
  ProfileImage,
  ProfileName,
  ProfileSocial,
  List,
  YoutubeLogo,
  InstagramLogo,
  TwitterLogo,
  GithubLogo,
  Footer,
  PersonalLink,
} from "./styles";

export const Links: React.FC = () => {
  return (
    <Container>
      <ProfileImage
        src="https://avatars.githubusercontent.com/u/105863409?v=4"
        alt=""
      />
      <ProfileName>Anderson Oliveira</ProfileName>
      <ProfileSocial
        href="https://www.instagram.com/oanderoliveira/"
        target="_blank"
      >
        @oanderoliveira
      </ProfileSocial>

      <List>
        <LinksButton icon={<YoutubeLogo />} name="YouTube" url="/" />
        <LinksButton icon={<InstagramLogo />} name="Instagram" url="/" />
        <LinksButton icon={<TwitterLogo />} name="Twitter" url="/" />
        <LinksButton icon={<GithubLogo />} name="GitHub" url="/" />
      </List>

      <Footer>
        Feito com um ⚡ pelo{" "}
        <PersonalLink href="https://github.com/andersamuel" target="_blank">
          Anderson Oliveira
        </PersonalLink>
      </Footer>
    </Container>
  );
};
