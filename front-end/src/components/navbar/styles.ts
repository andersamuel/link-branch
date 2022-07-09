import styled, { css } from "styled-components";

import { CgProfile, CgMathPlus } from "react-icons/cg";

const icon = css`
  width: 25px;
  height: 25px;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const Container = styled.div`
  top: 0;
  width: 100%;
  height: 40px;
  padding: 0 20px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.button};

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.secondary};
  }

  div {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const MoreIcon = styled(CgMathPlus)`
  ${icon}
`;

export const ProfileIcon = styled(CgProfile)`
  ${icon}
`;
