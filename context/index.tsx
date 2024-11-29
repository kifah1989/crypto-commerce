'use client'

import { createAppKit } from '@reown/appkit/react'
import { mainnet, arbitrum } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { type ReactNode } from 'react'
import { WagmiProvider, type Config } from 'wagmi'

import { vTestnet, hardhat } from '@/config/tenderly.config'
import { wagmiAdapter, projectId } from '@/config/wagmi.config'

// Set up queryClient
const queryClient = new QueryClient()

if (!projectId) {
    throw new Error('Project ID is not defined')
}

// Set up metadata
const metadata = {
    //this is optional
    name: 'appkit-example',
    description: 'AppKit Example - EVM',
    url: 'https://exampleapp.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
}

// Create the modal
const modal = createAppKit({
    adapters: [wagmiAdapter],
    projectId,
    networks: [mainnet, arbitrum, vTestnet, hardhat],
    metadata,
    features: {
        analytics: true,
        email: false,
        socials: false,
        swaps: false,
        onramp: false,
    },
    allWallets: 'HIDE',
})

function ContextProvider({
    children,
    cookies,
}: {
    children: ReactNode
    cookies: string | null
}) {
    // const initialState = cookieToInitialState(
    //     wagmiAdapter.wagmiConfig as Config,
    //     cookies
    // )

    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig as Config}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </WagmiProvider>
    )
}

export default ContextProvider
