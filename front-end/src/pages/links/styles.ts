import styled, { css } from "styled-components";

import { FiYoutube, FiInstagram, FiTwitter, FiGithub } from "react-icons/fi";

const icon = css`
  width: 100%;
  height: 100%;
  max-width: 30px;
  max-height: 20px;
  margin-right: 5px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: all 300ms ease-out;
`;

export const ProfileImage = styled.img`
  width: auto;
  height: auto;
  max-width: 93px;
  max-height: 93px;
  border-radius: 50%;
  position: relative;
  padding: 4px;
  border: 4px solid ${(props) => props.theme.colors.border};
  position: relative;
  box-sizing: content-box;
`;

export const ProfileName = styled.h1`
  margin-top: 24px;
  color: ${(props) => props.theme.colors.primary};
  font-size: 32px;
  font-weight: 500;
`;

export const ProfileSocial = styled.a`
  margin-top: 8px;
  color: ${(props) => props.theme.colors.description};
  text-decoration: none;
  font-family: "Roboto Mono", monospace;
`;

export const List = styled.ul`
  width: 100%;
  margin-top: 40px;
`;

export const YoutubeLogo = styled(FiYoutube)`
  ${icon}
`;

export const InstagramLogo = styled(FiInstagram)`
  ${icon}
`;

export const TwitterLogo = styled(FiTwitter)`
  ${icon}
`;

export const GithubLogo = styled(FiGithub)`
  ${icon}
`;

export const Footer = styled.footer`
  margin-top: 30px;
  color: ${(props) => props.theme.colors.description};
`;

export const PersonalLink = styled.a`
  color: ${(props) => props.theme.colors.description};
`;
