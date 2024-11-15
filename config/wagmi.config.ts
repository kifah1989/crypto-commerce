import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum } from '@reown/appkit/networks'

import { vTestnet, hardhat } from './tenderly.config'

export const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID!

if (!projectId) {
    throw new Error('Project ID is not defined')
}

export const networks = [mainnet, arbitrum, vTestnet, hardhat]

export const wagmiAdapter = new WagmiAdapter({
    storage: createStorage({
        storage: cookieStorage,
    }),
    ssr: true,
    transports: {
        [vTestnet.id]: http(
            process.env.NEXT_PUBLIC_TENDERLY_VIRTUAL_TESTNET_RPC!
        ),
        [hardhat.id]: http('http://localhost:8545'),
    },
    networks,
    projectId,
})

export const config = wagmiAdapter.wagmiConfig
