import React from 'react'
import styled from 'styled-components'
import { ChartIcon, Flex, Heading, HistoryIcon, IconButton, Text, useModal, ChartDisableIcon } from '@pancakeswap/uikit'
import TransactionsModal from 'components/App/Transactions/TransactionsModal'
import GlobalSettings from 'components/Menu/GlobalSettings'

interface Props {
  title: string
  subtitle: string
  noConfig?: boolean
  setIsChartDisplayed?: React.Dispatch<React.SetStateAction<boolean>>
  isChartDisplayed?: boolean
}

const CurrencyInputContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  padding: 24px;
  width: 100%;
  border-bottom: 0px solid ${({ theme }) => theme.colors.cardBorder};
  background-color:#37aa3d;
  color:#fff;
`

const ColoredIconButton = styled(IconButton)`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const CurrencyInputHeader: React.FC<Props> = ({ title, subtitle, setIsChartDisplayed, isChartDisplayed }) => {
  const toggleChartDisplayed = () => {
    setIsChartDisplayed((currentIsChartDisplayed) => !currentIsChartDisplayed)
  }
  const [onPresentTransactionsModal] = useModal(<TransactionsModal />)

  return (
    <CurrencyInputContainer>
      <Flex width="100%" alignItems="center" justifyContent="center" >
        <Flex flex="1">
          {setIsChartDisplayed && (
            <ColoredIconButton onClick={toggleChartDisplayed} variant="text" scale="sm">
              {isChartDisplayed ? (
                <ChartDisableIcon color="white" />
              ) : (
                <ChartIcon width="24px" color="#fff" />
              )}
            </ColoredIconButton>
          )}
        </Flex>
        <Flex flex="1" justifyContent="center" style={{color:"white"}}>
          <Heading as="h2">{title}</Heading>
        </Flex>
        <Flex flex="1" justifyContent="flex-end">
          <GlobalSettings color="white" mr="0" />
          {/* <IconButton onClick={onPresentTransactionsModal} variant="text" scale="sm">
            <HistoryIcon color="textSubtle" width="24px" />
          </IconButton> */}
        </Flex>
      </Flex>
      <Flex alignItems="center">
        <Text color="textSubtle" fontSize="14px" style={{color:"#fff"}}>
          {subtitle}
        </Text>
      </Flex>
    </CurrencyInputContainer>
  )
}

export default CurrencyInputHeader
