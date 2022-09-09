import { Flex, Text, Button, Link } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter as RouterLink } from 'components/NextLink'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import ColoredWordHeading from '../ColoredWordHeading';
import robot from "../../../../../public/images/home/welcome/robot_cat.png"

interface SalesSectionButton {
    to: string
    text: string
    external: boolean
}

export interface SalesSectionProps {
    headingText: string
    bodyText: string
    reverse: boolean
    primaryButton: SalesSectionButton
    secondaryButton: SalesSectionButton
    images: CompositeImageProps
}

const WelcomeSection: React.FC<SalesSectionProps> = (props) => {
    const { headingText, bodyText, reverse, primaryButton, secondaryButton, images } = props

    return (
        <Flex flexDirection="column">
            <Flex
                flexDirection={['column-reverse', null, null, reverse ? 'row-reverse' : 'row']}
                alignItems={['flex-end', null, null, 'center']}
                justifyContent="center"
            >
                <Flex
                    height={['192px', null, null, '100%']}
                    width={['192px', null, null, '100%']}
                    flex={[null, null, null, '1']}
                    mb={['24px', null, null, '0']}
                >
                    <CompositeImage {...images} />
                </Flex>
                <Flex
                    flexDirection="column"
                    flex="1"
                    ml={[null, null, null, reverse && '64px']}
                    mr={[null, null, null, !reverse && '64px']}
                    alignSelf={['flex-start', null, null, 'center']}
                >
                    <ColoredWordHeading text={headingText} />
                    <Text color="black" mb="24px">
                        {bodyText}
                    </Text>
                </Flex>

            </Flex>
        </Flex>
    )
}

export default WelcomeSection
