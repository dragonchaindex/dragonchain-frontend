import {serializeTokens} from './tokens'
import {SerializedFarmConfig} from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
    {
        pid: 0,
        lpSymbol: 'DRAC-LP',
        lpAddresses: {
            97: '0x36c26ffbe6a38de623c5155075e51a1a44e35d49',
            56: '0x36c26ffbe6a38de623c5155075e51a1a44e35d49',
        },
        token: serializedTokens.drac,
        quoteToken: serializedTokens.busd,
    },
     {
    pid: 251,
    lpSymbol: 'DRAC-LP',
    lpAddresses: {
      97: '0x071cD7b1f6973b2Bec7C58EE6072443cC366492b',
      56: '0x071cD7b1f6973b2Bec7C58EE6072443cC366492b',
    },
    token: serializedTokens.drac,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 252,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0xc2ae09cb6430295bf94c4ef9403bbf0953103e72',
      56: '0xc2ae09cb6430295bf94c4ef9403bbf0953103e72',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
    {
        pid: 1,
        lpSymbol: 'DRAC-WYVERN LP',
        lpAddresses: {
            97: '0xA378d552A44C9CaA11f2f5F9a7797aC7F59dB828',
            56: '0xA378d552A44C9CaA11f2f5F9a7797aC7F59dB828',
        },
        token: serializedTokens.wyvern,
        quoteToken: serializedTokens.busd,
        isCommunity:true
    },
]

export default farms
