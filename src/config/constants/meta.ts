import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'DragonChain',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('DragonChain')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('DragonChain')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('DragonChain')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('DragonChain')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('DragonChain')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('DragonChain')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('DragonChain')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('DragonChain')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('DragonChain')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('DragonChain')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('DragonChain')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('DragonChain')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('DragonChain')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('DragonChain')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('DragonChain')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('DragonChain')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('DragonChain')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('DragonChain')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('DragonChain')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('DragonChain')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('DragonChain')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Pools')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    default:
      return null
  }
}
