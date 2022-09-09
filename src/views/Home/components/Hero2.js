import { Button, Flex, Heading } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components'
import bunnyImage from '../../../../public/images/home/lunar-bunny/bunny@2x.png'
import CompositeImage, { CompositeImageProps } from './CompositeImage'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg';
import Lottie from "lottie-react";
import useMediaQuery from '@mui/material/useMediaQuery';
import circuit from "./Assets/New_HUb.json";


const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }
`

const fading = () => keyframes`
  from {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 0.9;
  }
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const BunnyWrapper = styled.div`
  width: 100%;
  will-change: transform;
  > span {
    overflow: visible !important; // make sure the next-image pre-build blur image not be cropped
  }
`

const StarsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & :nth-child(2) {
    animation: ${fading} 2s ease-in-out infinite;
    animation-delay: 1s;
  }

  & :nth-child(3) {
    animation: ${fading} 5s ease-in-out infinite;
    animation-delay: 0.66s;
  }

  & :nth-child(4) {
    animation: ${fading} 2.5s ease-in-out infinite;
    animation-delay: 0.33s;
  }
`



const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()
  const matches = useMediaQuery('(min-width:850px)');
  const matches2 = useMediaQuery('(min-width:500px)');

  return (
    <div>

      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={['center', null, null, 'center']}
        justifyContent="end"
        mt={[account ? '280px' : '50px', null, 0]}
        id="homepage-hero"
      >
        <Flex flex="1" flexDirection="column">
          <Heading scale="xxl" color="#37aa3d" mb="24px" style={{paddingLeft:matches?"80px":"0pc"}}>
            {t('Defi Swap')}
          </Heading>
          <Heading scale="xl" mb="24px" style={{paddingLeft:matches?"80px":"0px"}}>
            {t('Trade Earn Exchange')}
          </Heading>
          <Flex style={{paddingLeft:matches?"80px":"0px"}}>
            {!account && <ConnectWalletButton mr="8px" />}
            <NextLinkFromReactRouter to="/swap">
              <Button style={{ backgroundColor: "transparent", border: "1px solid #37aa3d",color:theme.isDark?"white":"#1f2335" }}>{t('Trade Now')}</Button>
            </NextLinkFromReactRouter>
          </Flex>
        </Flex>
        <Flex
          height={[matches2?'492px':"200px", null, null, '100%']}
          width={[matches2?'492px':"200px", null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
          position="relative"
        >
          <BunnyWrapper>
          <Lottie loop={true} animationData={circuit} style={{maxWidth:"100%"}}/>
          </BunnyWrapper>
        </Flex>
      </Flex>
    </div>
  )
}

export default Hero

