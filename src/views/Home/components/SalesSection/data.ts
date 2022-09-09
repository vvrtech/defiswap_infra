import { TranslateFunction } from 'contexts/Localization/types'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade on the exchange platform'),
  bodyText: t('Trade,earn and win crypto on most popular decentralized platform in the galaxy.'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.defiswap.io/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/PAGE_ITEMS/',
    attributes: [
      { src: 'Coins', alt: t('Pie chart') }
    ],
  },
})

export const welcomeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Welcome to The DefiSwap Exchange'),
  bodyText: t('Trade,earn and win crypto on most popular decentralized platform in the galaxy.'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.defiswap.io/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/welcome/',
    attributes: [
      { src: 'robot', alt: t('Folder') }
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn passive income with crypto.'),
  bodyText: t('Trade,earn and win crypto on most popular decentralized platform in the galaxy.'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Explore'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.defiswap.io/products/yield-farming',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/PAGE_ITEMS/',
    attributes: [
      { src: 'Coin_Card', alt: t('Small 3d pancake') }
    ],
  },
})

export const cakeSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Defi Coin (DEFC) - Join the future of algorithmic crypto trading strategies'),
  bodyText: t(
    'The Defi Coin protocol is a community driven fair launched Defi token. Three simple functions occur during each trade: Reflection, LP Acquisition and Burn.',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    text: t('Buy CAKE'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.defiswap.io/tokenomics/cake',
    text: t('Learn'),
    external: true,
  },

  images: {
    path: '/images/home/PAGE_ITEMS/',
    attributes: [
      { src: 'DeFi-Swap-Coin-Design', alt: t('Small 3d deficoin') }
    ],
  },
})
