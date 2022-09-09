import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.defiswap.io/contact-us",
      },
      {
        label: "Blog",
        href: "https://pancakeswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.defiswap.io/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.defiswap.io/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://pancakeswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.defiswap.io/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.defiswap.io/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.defiswap.io/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Documentation",
        href: "https://docs.defiswap.io",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.defiswap.io/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.defiswap.io/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/deficoins5?s=21&t=em1GatJNtPSwzS9EbYBPPA",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    href:"https://t.me/DeFiSwapGroup",
    items: [
      {
        label: "English",
      //   href: "https://t.me/pancakeswap",
      href:"#",
      },
      {
        label: "Bahasa Indonesia",
      //   href: "https://t.me/PancakeSwapIndonesia",
      href:"#",
      },
      {
        label: "中文",
      //   href: "https://t.me/PancakeSwap_CN",
      href:"#",
      },
      {
        label: "Tiếng Việt",
      //   href: "https://t.me/PancakeSwapVN",
      href:"#",
      },
      {
        label: "Italiano",
      //   href: "https://t.me/pancakeswap_ita",
      href:"#",
      },
      {
        label: "русский",
      //   href: "https://t.me/pancakeswap_ru",
      href:"#",
      },
      {
        label: "Türkiye",
      //   href: "https://t.me/pancakeswapturkiye",
      href:"#",
      },
      {
        label: "Português",
      //   href: "https://t.me/PancakeSwapPortuguese",
      href:"#",
      },
      {
        label: "Español",
      //   href: "https://t.me/PancakeswapEs",
      href:"#",
      },
      {
        label: "日本語",
      //   href: "https://t.me/pancakeswapjp",
      href:"#",
      },
      {
        label: "Français",
      //   href: "https://t.me/pancakeswapfr",
      href:"#",
      },
      {
        label: "Deutsch",
      //   href: "https://t.me/PancakeSwap_DE",
      href:"#",
      },
      {
        label: "Filipino",
      //   href: "https://t.me/Pancakeswap_Ph",
      href:"#",
      },
      {
        label: "ქართული ენა",
      //   href: "https://t.me/PancakeSwapGeorgia",
      href:"#",
      },
      {
        label: "Announcements",
      //   href: "https://t.me/PancakeSwapAnn",
      href:"#",
      },
    ],
  },
  {
    label: "Reddit",
    icon: RedditIcon,
    href: "https://www.reddit.com/r/DeFiCoins_/"
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/deficoins01?igshid=YmMyMTA2M2Y=",
  },
  // {
  //   label: "Github",
  //   icon: GithubIcon,
  //   // href: "https://github.com/pancakeswap/",
  //   href:"#",
  // },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/UjTUyN6qhx"
  },
  // {
  //   label: "Medium",
  //   icon: MediumIcon,
  //   // href: "https://pancakeswap.medium.com/",
  //   href:"#",
  // },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
