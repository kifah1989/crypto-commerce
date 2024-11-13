import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum } from '@reown/appkit/networks'

import { vTestnet } from './tenderly.config'

export const projectId = process.env.REOWN_PROJECT_ID

if (!projectId) {
    throw new Error('Project ID is not defined')
}

export const networks = [mainnet, arbitrum, vTestnet]

export const wagmiAdapter = new WagmiAdapter({
    storage: createStorage({
        storage: cookieStorage,
    }),
    ssr: true,
    transports: {
        [vTestnet.id]: http(process.env.TENDERLY_VIRTUAL_TESTNET_RPC!),
    },
    networks,
    projectId,
})

export const config = wagmiAdapter.wagmiConfig
