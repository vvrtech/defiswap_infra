import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardFooterProps = SpaceProps;

const CardFooter = styled.div<CardFooterProps>`
background-color:#37aa3d;

${space}
`;

CardFooter.defaultProps = {
  p: "24px",
};

export default CardFooter;
