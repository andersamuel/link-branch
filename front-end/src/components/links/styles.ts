import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Link = styled.a`
  height: 55px;
  color: ${(props) => props.theme.colors.secondary};
  font-size: 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin: 0 20px 18px 20px;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.colors.button};
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.button_hover};
  }
`;
