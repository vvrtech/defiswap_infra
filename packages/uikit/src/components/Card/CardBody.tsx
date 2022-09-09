import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardBodyProps = SpaceProps;

const CardBody = styled.div<CardBodyProps>`
background-color:#1f2335;
  ${space}
`;

CardBody.defaultProps = {
  p: "24px",
};

export default CardBody;
