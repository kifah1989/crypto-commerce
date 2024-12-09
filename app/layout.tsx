import '@/styles/globals.css'
import { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import clsx from 'clsx'
import { SessionProvider } from 'next-auth/react'

import { Providers } from './providers'

import { siteConfig } from '@/config/site'
import { fontOrbitron } from '@/config/fonts'
import { Navbar } from '@/app/components/navbar'
import ContextProvider from '@/context'

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: '/favicon.ico',
    },
}

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const cookies = (await headers()).get('cookie')

    return (
        <html suppressHydrationWarning lang="en">
            <head />
            <body
                className={clsx(
                    'bg-light-gradient dark:bg-dark-gradient font-orbitron',
                    fontOrbitron.variable
                )}
            >
                <div className="flex items-center justify-between flex-col flex-no-wrap flex-grow">
                    <ContextProvider cookies={cookies}>
                        <Providers
                            themeProps={{
                                attribute: 'class',
                                defaultTheme: 'dark',
                            }}
                        >
                            <SessionProvider>
                                <Navbar />
                                <div className="w-screen flex p-3 flex-col flex-no-wrap">
                                    {children}
                                </div>
                                <footer className="flex items-center justify-center p-3">
                                    <span className="text-default-600">
                                        Kifah Andary All Rights Reserved
                                    </span>
                                </footer>
                            </SessionProvider>
                        </Providers>
                    </ContextProvider>
                </div>
            </body>
        </html>
    )
}
