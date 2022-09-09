import { Flex, Heading, Skeleton, Text } from '@pancakeswap/uikit'
import Balance from 'components/Balance'
import cakeAbi from 'config/abi/cake.json'
import tokens from 'config/constants/tokens'
import { useTranslation } from 'contexts/Localization'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { useEffect, useState } from 'react'
import { usePriceCakeBusd } from 'state/farms/hooks'
import styled from 'styled-components'
import { formatBigNumber, formatLocalisedCompactNumber } from 'utils/formatBalance'
import { multicallv2 } from 'utils/multicall'
import useSWR from 'swr'
import { SLOW_INTERVAL } from 'config/constants'
import { BigNumber } from '@ethersproject/bignumber'
import { getCakeVaultV2Contract } from 'utils/contractHelpers';
import useTheme from 'hooks/useTheme';

const StyledColumn = styled(Flex) <{ noMobileBorder?: boolean; noDesktopBorder?: boolean }>`
  flex-direction: column;
  ${({ noMobileBorder, theme }) =>
    noMobileBorder
      ? `${theme.mediaQueries.md} {
           padding: 0 16px;
           border-left: 1px ${theme.colors.inputSecondary} solid;
         }
       `
      : `border-left: 1px ${theme.colors.inputSecondary} solid;
         padding: 0 8px;
         ${theme.mediaQueries.sm} {
           padding: 0 16px;
         }
       `}

  ${({ noDesktopBorder, theme }) =>
    noDesktopBorder &&
    `${theme.mediaQueries.md} {
           padding: 0;
           border-left: none;
         }
       `}
`

const Grid = styled.div`
  display: grid;
  grid-gap: 16px 8px;
  margin-top: 24px;
  grid-template-columns: repeat(2, auto);
  grid-template-areas:
    'a d'
    'b e'
    'c f';

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-areas:
      'a b c'
      'd e f';
    grid-gap: 32px;
    grid-template-columns: repeat(3, auto);
  }
`

const emissionsPerBlock = 13.75

/**
 * User (Planet Finance) built a contract on top of our original manualDEFC pool,
 * but the contract was written in such a way that when we performed the migration from Masterchef v1 to v2, the tokens were stuck.
 * These stuck tokens are forever gone (see their medium post) and can be considered out of circulation."
 * https://planetfinanceio.medium.com/pancakeswap-works-with-planet-to-help-cake-holders-f0d253b435af
 * https://twitter.com/PancakeSwap/status/1523913527626702849
 * https://bscscan.com/tx/0xd5ffea4d9925d2f79249a4ce05efd4459ed179152ea5072a2df73cd4b9e88ba7
 */
const planetFinanceBurnedTokensWei = BigNumber.from('637407922445268000000000')
const cakeVault = getCakeVaultV2Contract()

const CakeDataRow = () => {
  const { t } = useTranslation()
  const { observerRef, isIntersecting } = useIntersectionObserver()
  const [loadData, setLoadData] = useState(false)
  const {
    data: { cakeSupply, burnedBalance, circulatingSupply } = {
      cakeSupply: 0,
      burnedBalance: 0,
      circulatingSupply: 0,
    },
  } = useSWR(
    loadData ? ['cakeDataRow'] : null,
    async () => {
      const totalSupplyCall = { address: tokens.defc.address, name: 'totalSupply' }
      const burnedTokenCall = {
        address: tokens.defc.address,
        name: 'balanceOf',
        params: ['0x000000000000000000000000000000000000dEaD'],
      }
      const [tokenDataResultRaw, totalLockedAmount] = await Promise.all([
        multicallv2(cakeAbi, [totalSupplyCall, burnedTokenCall], {
          requireSuccess: false,
        }),
        cakeVault.totalLockedAmount(),
      ])
      const [totalSupply, burned] = tokenDataResultRaw.flat()

      const totalBurned = planetFinanceBurnedTokensWei.add(burned)
      const circulating = totalSupply.sub(totalBurned.add(totalLockedAmount))

      return {
        cakeSupply: totalSupply && burned ? +formatBigNumber(totalSupply.sub(totalBurned)) : 0,
        burnedBalance: burned ? +formatBigNumber(totalBurned) : 0,
        circulatingSupply: circulating ? +formatBigNumber(circulating) : 0,
      }
    },
    {
      refreshInterval: SLOW_INTERVAL,
    },
  )
  const cakePriceBusd = usePriceCakeBusd()
  const mcap = cakePriceBusd.times(circulatingSupply)
  const mcapString = formatLocalisedCompactNumber(mcap.toNumber());
  const { theme } = useTheme();

  useEffect(() => {
    if (isIntersecting) {
      setLoadData(true)
    }
  }, [isIntersecting])

  return (
    <Grid>
      <Flex flexDirection="column" style={{ gridArea: 'a' }}>
        {circulatingSupply ? (
          <Balance decimals={0} lineHeight="1.1" fontSize="24px" color={theme.isDark?"#fff":"#1f2335"} bold value={circulatingSupply} />
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
        {/* <Text style={{fontSize:"24px"}} color={theme.isDark?"#fff":"#1f2335"}><b>{t('145,506,795')}</b></Text> */}
        <Text color={theme.isDark?"#fff":"#1f2335"}>{t('Expected holders by Q3')}</Text>
      </Flex>
      <StyledColumn noMobileBorder style={{ gridArea: 'b' }}>
        {cakeSupply ? (
          <Balance decimals={0} lineHeight="1.1" color={theme.isDark?"#fff":"#1f2335"} fontSize="24px" bold value={cakeSupply} />
        ) : (
          <>
            <div ref={observerRef} />
            <Skeleton height={24} width={126} my="4px" />
          </>
        )}
         {/* <Text style={{fontSize:"24px"}} color={theme.isDark?"#fff":"#1f2335"}><b>{t('312,743,776')}</b></Text> */}
        <Text color={theme.isDark?"#fff":"#1f2335"}>{t('Expected liquidity by Q3')}</Text>
      </StyledColumn>
      <StyledColumn noMobileBorder style={{ gridArea: 'c' }}>
        {/* <Balance decimals={0} lineHeight="1.1" fontSize="24px" bold value={750000000} /> */}
        <Text color={theme.isDark?"#fff":"#1f2335"} fontSize="20px">{t('Millions of tokens')}</Text>
        <Text color={theme.isDark?"#fff":"#1f2335"} fontSize="20px">{t('to be burned')}</Text>
      </StyledColumn>
      <StyledColumn noDesktopBorder style={{ gridArea: 'd' }}>
        {mcap?.gt(0) && mcapString ? (
          <Heading scale="lg" color={theme.isDark?"#fff":"#1f2335"} >{t('$%marketCap%', { marketCap: mcapString })}</Heading>
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
        {/* <Heading scale="lg">{t('$460 million')}</Heading> */}
        <Text color={theme.isDark?"#fff":"#1f2335"}>{t('Market cap')}</Text>
      </StyledColumn>
    </Grid>
  )
}

export default CakeDataRow

