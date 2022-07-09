import styled, { css } from "styled-components";

import { FiSun, FiMoon } from "react-icons/fi";

const icon = css`
  width: 25px;
  height: 25px;
  padding: 10px;
  box-sizing: content-box;
  color: ${(props) => props.theme.colors.secondary};
`;

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  bottom: 20px;
  right: 20px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.button};
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.button_hover};
  }
`;

export const LightIcon = styled(FiSun)`
  ${icon}
`;

export const DarkIcon = styled(FiMoon)`
  ${icon}
`;
