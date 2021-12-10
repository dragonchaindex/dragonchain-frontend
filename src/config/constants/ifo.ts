import { Token, ChainId } from '@dragonchaindex/sdk'
import tokens from './tokens'
import farms from './farms'
import { Ifo } from './types'

const cakeBnbLpToken = new Token(ChainId.MAINNET, farms[0].lpAddresses[ChainId.MAINNET], 18, farms[0].lpSymbol)

const ifos: Ifo[] = []

export default ifos
