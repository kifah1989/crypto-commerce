import { defineChain } from '@reown/appkit/networks'

export const vTestnet = defineChain({
    id: 1337, // Add this to match the chain Id you set for your Virtual TestNet
    caipNetworkId: 'eip155:1337',
    chainNamespace: 'eip155',
    name: 'Virtual Main',
    nativeCurrency: { name: 'vMain', symbol: 'vETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: [process.env.NEXT_PUBLIC_TENDERLY_VIRTUAL_TESTNET_RPC!],
        },
    },
    blockExplorers: {
        default: {
            name: 'Tenderly Explorer',
            url: process.env.NEXT_PUBLIC_TENDERLY_BLOCK_EXPLORER_RPC!, // replace this with your Virtual TestNet's explorer URL
        },
    },
    contracts: {
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        },
        ensUniversalResolver: {
            address: '0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
            blockCreated: 16773775,
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14353601,
        },
    },
})

export const hardhat = defineChain({
    id: 31337,
    caipNetworkId: 'eip155:31337',
    chainNamespace: 'eip155',
    name: 'Hardhat',
    nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['http://localhost:8545'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Hardhat Explorer',
            url: 'http://localhost:8545',
        },
    },
})
