import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xAB760299bB91dCce8512e0d7134DB224dF570b13',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 999,
    isFinished: true,
  },
  {
    sousId: 2,
    stakingToken: serializedTokens.drac,
    earningToken: serializedTokens.wyvern,
    contractAddress: {
      97: '0xABC17E88cDA917E3E40424E1345e73581fbA9044',
      56: '0xABC17E88cDA917E3E40424E1345e73581fbA9044',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '4000',
    sortOrder: 1,
  }
]

export default pools
