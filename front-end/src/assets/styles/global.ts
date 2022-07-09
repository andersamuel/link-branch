import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
  }
  
  body {
    width: 100%;
    min-height: 100vh;
    position: relative;
    background-color: ${(props) => props.theme.colors.background};
  }

  body.sc-h69tZM {
    transition: background-color 300ms ease-in-out;
  }

  div#root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
