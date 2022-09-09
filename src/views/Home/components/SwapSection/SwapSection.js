import { Flex, Text, Button, Link } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter as RouterLink } from 'components/NextLink'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import ColoredWordHeading from '../ColoredWordHeading';
import Lottie from "lottie-react";
import coins from "../Assets/Coins.json"
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from 'hooks/useTheme';

const SwapSection = (props) => {
  const { headingText, bodyText, reverse, primaryButton, secondaryButton, images } = props
  const matches = useMediaQuery('(min-width:850px)');
  const matches2 = useMediaQuery('(min-width:500px)');
  const { theme } = useTheme();

  return (
    <Flex flexDirection="column">
      <Flex
        flexDirection={['column-reverse', null, null, reverse ? 'row-reverse' : 'row']}
        alignItems={['center', null, null, 'center']}
        justifyContent="center"
      >
        <Flex
          flexDirection="column"
          flex="1"
          ml={[null, null, null, reverse && '64px']}
          mr={[null, null, null, !reverse && '64px']}
          alignSelf={['flex-start', null, null, 'center']}
        >
          <ColoredWordHeading text={headingText} />
          <Text color={theme.isDark ? "white" : "#1f2335"} fontSize="20px" mb="24px">
            {bodyText}
          </Text>
          <Flex>
            <Button mr="16px" style={{ backgroundColor: "#37aa3d" }}>
              {primaryButton.external ? (
                <Link external href={primaryButton.to}>
                  <Text color="white" bold fontSize="16px">
                    {primaryButton.text}
                  </Text>
                </Link>
              ) : (
                <RouterLink to={primaryButton.to}>
                  <Text color="white" bold fontSize="16px">
                    {primaryButton.text}
                  </Text>
                </RouterLink>
              )}
            </Button>
            {secondaryButton.external ? (
              <Link external href={secondaryButton.to} style={{ color: "white" }} >
                {secondaryButton.text}
              </Link>
            ) : (
              <RouterLink to={secondaryButton.to} style={{ color: "white" }}>{secondaryButton.text}</RouterLink>
            )}
          </Flex>
        </Flex>
        <Flex
          height={[matches2 ? '492px' : "200px", null, null, '100%']}
          width={[matches2 ? '492px' : "200px", null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
        >
          <Lottie loop={true} animationData={coins} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SwapSection

