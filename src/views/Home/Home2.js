import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import Hero from './components/Hero2'
import { swapSectionData,welcomeSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import Welcome from './components/Welcome/Welcome2'
import SwapSection from './components/SwapSection/SwapSection'
import EarnSection from './components/EarnSection/EarnSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer2'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import MultipleBanner from './components/Banners/MultipleBanner';
import Lottie from "lottie-react";
import useMediaQuery from '@mui/material/useMediaQuery';
import rocket from "./components/Assets/Rocket.json";

const StyledHeroSection = styled(PageSection)`
  padding-top: 0px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 10px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }
  const matches2 = useMediaQuery('(min-width:1140px)');
  const matches6 = useMediaQuery('(min-width:576px)');

  const { t } = useTranslation()

  return (
    <div>
      <PageMeta />
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
            ? 'radial-gradient(103.12% 50% at 50% 50%, #1f2335 0%, #1f2335 100%)'
            : 'linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)'
        }
        index={2}
        hasCurvedDivider={false}
        className="header"
      >
        {/* {account && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )}
        <MultipleBanner /> */}
        <Hero />
      </StyledHeroSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        // background={theme.colors.contrast}
        index={2}
        hasCurvedDivider={false}
        style={{backgroundColor:"white"}}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper width="150%" top fill={theme.isDark?theme.colors.background2:'#f0f8ff'}>
            <WedgeTopRight />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <Welcome {...welcomeSectionData(t)} />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.isDark?theme.colors.background2:"#f0f8ff"}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper top fill={'white'}>
            <WedgeTopLeft />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <SwapSection {...swapSectionData(t)} />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.isDark?theme.colors.background3:"#fff"}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          <InnerWedgeWrapper width="150%" top fill={theme.isDark?theme.colors.background2:"#f0f8ff"}>
            <WedgeTopRight />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper>
        <EarnSection {...earnSectionData(t)} />
        {/* <FarmsPoolsRow /> */}
      </PageSection>
      {/* <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
          theme.isDark
            ? 'linear-gradient(180deg, #0B4576 0%, #091115 100%)'
            : 'linear-gradient(180deg, #6FB6F1 0%, #EAF2F6 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <WinSection />
      </PageSection> */}
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.isDark?theme.colors.background2:"#f0f8ff"}
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...cakeSectionData(t)} />
        <CakeDataRow />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="linear-gradient(180deg, #37aa3d 0%, #37aa3d 100%)"
        index={2}
        hasCurvedDivider={false}
        position="relative"
      >
      <Lottie loop={true} animationData={rocket} style = {{display: matches2?"flex":"none",position:"absolute",zIndex:"100",top:"0%",left:"-4%",height:"100%",width:"45%"}} />
        <Footer />
      </PageSection>
    </div>
  )
}

export default Home

