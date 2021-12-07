import {serializeTokens} from './tokens'
import {SerializedFarmConfig} from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
    /**
     * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
     */
    {
        pid: 0,
        lpSymbol: 'DRAC-BUSD',
        lpAddresses: {
            97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
            56: '0x3bdbee7452509396c79f2c334065590b7857749b',
        },
        token: serializedTokens.syrup,
        quoteToken: serializedTokens.wbnb,
    },
    {
        pid: 251,
        lpSymbol: 'CAKE-BNB LP',
        lpAddresses: {
            97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
            56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
        },
        token: serializedTokens.cake,
        quoteToken: serializedTokens.wbnb,
    }
]

export default farms
