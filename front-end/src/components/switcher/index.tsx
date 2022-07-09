import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Container, LightIcon, DarkIcon } from "./styles";

interface Props {
  toggleTheme(): void;
}

export const Switcher = (props: Props) => {
  const { title } = useContext(ThemeContext);

  return (
    <Container onClick={props.toggleTheme}>
      {title == "dark" ? <LightIcon /> : <DarkIcon />}
    </Container>
  );
};
