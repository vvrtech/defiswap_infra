import { Flex, Text, Button, Link } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter as RouterLink } from 'components/NextLink'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import ColoredWordHeading from '../ColoredWordHeading';
import Lottie from "lottie-react";
import robot from "../Assets/Robot_Cat.json"
import useMediaQuery from '@mui/material/useMediaQuery';

const Welcome = (props) => {
    const { headingText, bodyText, reverse, primaryButton, secondaryButton, images } = props
    const matches = useMediaQuery('(min-width:850px)');
  const matches2 = useMediaQuery('(min-width:500px)');

    return (
        <Flex flexDirection="column">
            <Flex
                flexDirection={['column-reverse', null, null, reverse ? 'row-reverse' : 'row']}
                alignItems={['center', null, null, 'center']}
                justifyContent="center"

            >
                <Flex
                    height={[matches2?'552px':"200px", null, null, '100%']}
                    width={[matches2?'552px':"200px", null, null, '100%']}
                    flex={[null, null, null, '1']}
                    mb={['24px', null, null, '0']}
                >
                <Lottie loop={true} animationData={robot}/>
                </Flex>
                <Flex
                    flexDirection="column"
                    flex="1"
                    ml={[null, null, null, reverse && '64px']}
                    mr={[null, null, null, !reverse && '64px']}
                    alignSelf={['flex-start', null, null, 'center']}
                >
                    <ColoredWordHeading text={headingText} />
                    <Text color="black" fontSize="20px" mb="24px">
                        {bodyText}
                    </Text>
                </Flex>

            </Flex>
        </Flex>
    )
}

export default Welcome

