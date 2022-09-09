import styled from 'styled-components'
import {
  ChartIcon,
  Flex,
  Heading,
  HistoryIcon,
  IconButton,
  NotificationDot,
  Text,
  useModal,
  ChartDisableIcon,
} from '@pancakeswap/uikit'
import TransactionsModal from 'components/App/Transactions/TransactionsModal'
import GlobalSettings from 'components/Menu/GlobalSettings/GlobalSettings2'
import { useExpertModeManager } from 'state/user/hooks'
import RefreshIcon from 'components/Svg/RefreshIcon'

interface Props {
  title: string
  subtitle: string
  noConfig?: boolean
  setIsChartDisplayed?: React.Dispatch<React.SetStateAction<boolean>>
  isChartDisplayed?: boolean
  hasAmount: boolean
  onRefreshPrice: () => void
}

const CurrencyInputContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  padding: 24px;
  width: 100%;
  border-bottom: 0px solid ${({ theme }) => theme.colors.cardBorder};
  background-color: #37aa3d
`

const ColoredIconButton = styled(IconButton)`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const CurrencyInputHeader: React.FC<Props> = ({
  title,
  subtitle,
  setIsChartDisplayed,
  isChartDisplayed,
  hasAmount,
  onRefreshPrice,
}) => {
  const [expertMode] = useExpertModeManager()
  const toggleChartDisplayed = () => {
    setIsChartDisplayed((currentIsChartDisplayed) => !currentIsChartDisplayed)
  }
  const [onPresentTransactionsModal] = useModal(<TransactionsModal />)

  return (
    <CurrencyInputContainer>
      <Flex width="100%" alignItems="center" justifyContent="space-between">
        {setIsChartDisplayed && (
          <ColoredIconButton onClick={toggleChartDisplayed} variant="text" scale="sm">
            {isChartDisplayed ? <ChartDisableIcon color="white" /> : <ChartIcon width="24px" color="textSubtle" />}
          </ColoredIconButton>
        )}
        <Flex flexDirection="column" alignItems="center" width="100%">
          <Heading as="h2" color='white'>{title}</Heading>
        </Flex>
        <Flex>
          <NotificationDot show={expertMode}>
            <GlobalSettings color="white" mr="0" />
          </NotificationDot>
          {/* <IconButton onClick={onPresentTransactionsModal} variant="text" scale="sm">
            <HistoryIcon color="textSubtle" width="24px" />
          </IconButton>
          <IconButton variant="text" scale="sm" onClick={() => onRefreshPrice()}>
            <RefreshIcon disabled={!hasAmount} color="textSubtle" width="27px" />
          </IconButton> */}
        </Flex>
      </Flex>
      <Flex alignItems="center">
        <Text color="white" fontSize="14px">
          {subtitle}
        </Text>
      </Flex>
    </CurrencyInputContainer>
  )
}

export default CurrencyInputHeader
