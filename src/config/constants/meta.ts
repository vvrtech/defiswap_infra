import memoize from 'lodash/memoize'
import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Defi Swap',
  description:
    'Defi Swap',
  image: 'https://www.gitbook.com/cdn-cgi/image/height=40,fit=contain,dpr=1,format=auto/https%3A%2F%2F1847819337-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FA61dWszP0puVblkx6p8D%252Flogo%252FWe3Lvyi9TUG9MEHonTC6%252FDeFi-Swap-Blue-GitBook.png%3Falt%3Dmedia%26token%3D802a527c-e59c-4093-82fa-a2df207a33cb',
}

interface PathList {
  paths: { [path: string]: { title: string; basePath?: boolean; description?: string } }
  defaultTitleSuffix: string
}

const getPathList = (t: ContextApi['t']): PathList => {
  return {
    paths: {
      '/': { title: t('Home') },
      '/swap': { basePath: true, title: t('Exchange') },
      '/add': { basePath: true, title: t('Add Liquidity') },
      '/remove': { basePath: true, title: t('Remove Liquidity') },
      '/liquidity': { title: t('Liquidity') },
      '/find': { title: t('Import Pool') },
      '/competition': { title: t('Trading Battle') },
      '/prediction': { title: t('Prediction') },
      '/prediction/leaderboard': { title: t('Leaderboard') },
      '/farms': { title: t('Farms') },
      '/farms/auction': { title: t('Farm Auctions') },
      '/pools': { title: t('Pools') },
      '/lottery': { title: t('Lottery') },
      '/ifo': { title: t('Initial Farm Offering') },
      '/teams': { basePath: true, title: t('Leaderboard') },
      '/voting': { basePath: true, title: t('Voting') },
      '/voting/proposal': { title: t('Proposals') },
      '/voting/proposal/create': { title: t('Make a Proposal') },
      '/info': { title: t('Overview'), description: 'View statistics for Pancakeswap exchanges.' },
      '/info/pools': { title: t('Pools'), description: 'View statistics for Pancakeswap exchanges.' },
      '/info/tokens': { title: t('Tokens'), description: 'View statistics for Pancakeswap exchanges.' },
      '/nfts/collections': { basePath: true, title: t('Collections') },
      '/nfts/activity': { title: t('Activity') },
      '/nfts/profile': { basePath: true, title: t('Profile') },
      '/pancake-squad': { basePath: true, title: t('Pancake Squad') },
    },
    defaultTitleSuffix: t('Defi Swap'),
  }
}

export const getCustomMeta = memoize(
  (path: string, t: ContextApi['t'], _: string): PageMeta => {
    const pathList = getPathList(t)
    const pathMetadata =
      pathList.paths[path] ??
      pathList.paths[Object.entries(pathList.paths).find(([url, data]) => data.basePath && path.startsWith(url))?.[0]]

    if (pathMetadata) {
      return {
        title: `${pathMetadata.title} | ${t(pathList.defaultTitleSuffix)}`,
        ...(pathMetadata.description && { description: pathMetadata.description }),
      }
    }
    return null
  },
  (path, t, locale) => `${path}#${locale}`,
)
