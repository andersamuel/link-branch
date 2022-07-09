import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;

      border: string;

      description: string;

      button: string;
      button_hover: string;

      background: string;
    };
  }
}
