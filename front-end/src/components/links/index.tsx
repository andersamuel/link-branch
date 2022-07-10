import { Container, Link } from "./styles";

interface Props {
  icon: any;
  name: string;
  url: string;
}

export const LinksButton = (props: Props) => {
  return (
    <Container>
      <Link href={props.url}>
        {props.icon}
        {props.name}
      </Link>
    </Container>
  );
};
