import { useMemo } from 'react'
import styled from 'styled-components'
import { Text, Flex, Box, CloseIcon, IconButton, useMatchBreakpointsContext } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { usePhishingBannerManager } from 'state/user/hooks'
import useTheme from '../../hooks/useTheme'

const Container = styled(Flex)`
  overflow: hidden;
  height: 100%;
  padding: 12px;
  align-items: center;
`
// background: linear-gradient(0deg, rgba(39, 38, 44, 0.4), rgba(39, 38, 44, 0.4)),
// linear-gradient(180deg, #8051d6 0%, #492286 100%);
// ${({ theme }) => theme.mediaQueries.md} {
// padding: 0px;
// background: linear-gradient(180deg, #1f2335 0%, #1f2335 100%);
// }

const InnerContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const SpeechBubble = styled.div`
  background: #082a45;
  border-radius: 16px;
  padding: 8px 8px 8px 70px;
  width: 60%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & ${Text} {
    flex-shrink: 0;
    margin-right: 4px;
  }
`

const PhishingWarningBanner: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation()
  const [, hideBanner] = usePhishingBannerManager()
  const { isMobile, isMd } = useMatchBreakpointsContext()
  const warningTextAsParts = useMemo(() => {
    const warningText = t("please make sure you're visiting https://docs.defiswap.io/ - check the URL carefully.")
    return warningText.split(/(https:\/\/pancakeswap.finance)/g)
  }, [t])
  const warningTextComponent = (
    <>
      <Text as="span" color={theme.isDark?"white":"#082a45"} small bold textTransform="uppercase">
        {t('Phishing warning: ')}
      </Text>
      {warningTextAsParts.map((text, i) => (
        <Text
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          small
          as="span"
          bold={text === 'https://defiswap.io/en/swap'}
          // color={text === 'https://defiswap.io/en/swap' ? '#FFFFFF' : '#BDC2C4'}
          color={theme.isDark?"#BDC2C4":"#483d8b"}
        >
          {text}
        </Text>
      ))}
    </>
  )
  return (
    <Container className="warning-banner" style={{backgroundColor:theme.isDark?"#1f2335":"white"}}>
      {isMobile || isMd ? (
        <>
          <Box>{warningTextComponent}</Box>
          <IconButton onClick={hideBanner} variant="text">
            <CloseIcon color={theme.isDark?"#FFFFFF":"black"} />
          </IconButton>
        </>
      ) : (
        <>
          <InnerContainer >
            <SpeechBubble style={{ background: theme.isDark?"#082a45":"#f8f8ff"}}>{warningTextComponent}</SpeechBubble>
          </InnerContainer>
          <IconButton onClick={hideBanner} variant="text">
            <CloseIcon color={theme.isDark?"#FFFFFF":"black"} />
          </IconButton>
        </>
      )}
    </Container>
  )
}

export default PhishingWarningBanner
