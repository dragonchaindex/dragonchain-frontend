import tokens from './tokens'
import { SerializedFarmConfig } from './types'

const priceHelperLps: SerializedFarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
   * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absence of a PID means the masterchef contract calls are skipped for this farm.
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
{
        pid: 0,
        lpSymbol: 'DRAC-LP',
        lpAddresses: {
            97: '0x36c26ffbe6a38de623c5155075e51a1a44e35d49',
            56: '0x36c26ffbe6a38de623c5155075e51a1a44e35d49',
        },
        token: tokens.drac,
        quoteToken: tokens.busd,
    },
     {
    pid: 251,
    lpSymbol: 'DRAC-LP',
    lpAddresses: {
      97: '0x071cD7b1f6973b2Bec7C58EE6072443cC366492b',
      56: '0x071cD7b1f6973b2Bec7C58EE6072443cC366492b',
    },
    token: tokens.drac,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 252,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0xc2ae09cb6430295bf94c4ef9403bbf0953103e72',
      56: '0xc2ae09cb6430295bf94c4ef9403bbf0953103e72',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
    {
        pid: 1,
        lpSymbol: 'DRAC-LP',
        lpAddresses: {
            97: '0xA378d552A44C9CaA11f2f5F9a7797aC7F59dB828',
            56: '0xA378d552A44C9CaA11f2f5F9a7797aC7F59dB828',
        },
        token: tokens.wyvern,
        quoteToken: tokens.busd
    },
]

export default priceHelperLps
