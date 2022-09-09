import React from "react";
import styled from "styled-components";
import DefiIcon from "../Svg/Icons/DefiIcon";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  cakePriceUsd?: number;
  showSkeleton?: boolean;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd, color = "textSubtle", showSkeleton = true }) => {
  return(
    <PriceLink
    href="https://defiswap-demo-atulinfranix-gmailcom.vercel.app/swap"
    target="_blank"
  >
    <DefiIcon width="10px" mr="12px" />&nbsp;&nbsp;
    <Text color={color} bold>{`$0.084`}</Text>
  </PriceLink>
  )
  // return cakePriceUsd ? (
  //   <PriceLink
  //     href="https://defiswap-demo-atulinfranix-gmailcom.vercel.app/swap"
  //     target="_blank"
  //   >
  //     <DefiIcon width="10px" mr="12px" />&nbsp;&nbsp;
  //     <Text color={color} bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
  //   </PriceLink>
  // ) : showSkeleton ? (
  //   <Skeleton width={80} height={24} />
  // ) : null;
};

export default React.memo(CakePrice);
