import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.drac,
    earningToken: serializedTokens.wyvern,
    contractAddress: {
      97: '',
      56: '0x4d9096d299fd3e1c90b501a07aa974eee69d322a',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '4000',
    sortOrder: 1,
  }
]

export default pools
