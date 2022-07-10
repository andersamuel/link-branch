import styled, { css } from "styled-components";

import { TiUser } from "react-icons/ti";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const icon = css`
  top: 50%;
  right: 10px;
  width: auto;
  height: auto;
  max-width: 20px;
  max-height: 20px;
  position: absolute;
  transform: translateY(-50%);
  color: ${(props) => props.theme.colors.primary};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
  }

  p {
  }

  form {
  }

  a {
    width: 100%;
    height: 40px;
    max-width: 300px;
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.colors.button};
    transition: background-color 300ms ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.colors.button_hover};
    }
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};

  span {
    color: ${(props) => props.theme.colors.button};
  }
`;

export const Description = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.tertiary};
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  section {
  }

  button {
    width: 100%;
    height: 40px;
    max-width: 300px;
    margin: 30px auto;
    border: none;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.secondary};
    background-color: ${(props) => props.theme.colors.button};
    transition: background-color 300ms ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.colors.button_hover};
    }
  }
`;

export const Inputs = styled.section`
  width: 100%;
  max-width: 300px;
  margin: 30px auto 5px;
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.primary};
  }

  div {
    position: relative;

    input {
      width: 100%;
      height: 35px;
      background: transparent;
      border: none;
      color: ${(props) => props.theme.colors.primary};
      border-bottom: 2px solid ${(props) => props.theme.colors.primary};
      transition: border-bottom 300ms ease-in-out;

      &:focus-visible {
        outline: none;
        border-bottom: 2px solid ${(props) => props.theme.colors.button};
      }
    }
  }
`;

export const UserIcon = styled(TiUser)`
  ${icon}
`;

export const EyeIcon = styled(BsFillEyeFill)`
  ${icon}
  cursor: pointer;
`;

export const EyeSlashIcon = styled(BsFillEyeSlashFill)`
  ${icon}
  cursor: pointer;
`;
