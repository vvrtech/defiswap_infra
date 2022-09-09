import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.defiswap.io/contact-us',
        // isHighlighted: true,
      },
      {
        label: t('Brand'),
        href: 'https://docs.defiswap.io/brand-and-logos',
      },
      {
        label: t('Blog'),
        href: 'https://deficoins.io/news/',
      },
      {
        label: t('Community'),
        href: 'https://docs.defiswap.io/contact-us/social-accounts-and-communities',
      },
      // {
      //   label: t('Litepaper'),
      //   href: '',
      // },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.defiswap.io/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.defiswap.io/click-here-for-help',
      },
      {
        label: t('Guides'),
        href: 'https://docs.defiswap.io/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: '',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.defiswap.io/product/exchange',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://docs.defiswap.io/developer/bug-bounty',
      },
      {
        label: t('Audits'),
        href: '',
      },
      // {
      //   label: t('Careers'),
      //   href: '',
      // },
    ],
  },
]
