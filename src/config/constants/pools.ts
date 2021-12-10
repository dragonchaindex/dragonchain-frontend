import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
 {
    sousId: 0,
    stakingToken: serializedTokens.drac,
    earningToken: serializedTokens.drac,
    contractAddress: {
      97: '0x8A7D3F9e849a256BD773759ebB0793Dcd9a3268a',
      56: '0x8A7D3F9e849a256BD773759ebB0793Dcd9a3268a',
    },
    poolCategory: PoolCategory.CORE,
    harvest: false,
    tokenPerBlock: '10',
    sortOrder: 999,
    isFinished: true,
  },
  {
    sousId: 1,
    stakingToken: serializedTokens.drac,
    earningToken: serializedTokens.wyvern,
    contractAddress: {
      97: '0x4d9096d299fd3e1c90b501a07aa974eee69d322a',
      56: '0x4d9096d299fd3e1c90b501a07aa974eee69d322a',
    },
    poolCategory: PoolCategory.CORE,
    harvest: false,
    tokenPerBlock: '4000',
    sortOrder: 1,
  }
]

export default pools
