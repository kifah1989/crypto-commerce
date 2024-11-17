import '@/styles/globals.css'
import { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import clsx from 'clsx'

import { Providers } from './providers'

import { siteConfig } from '@/config/site'
import { fontOrbitron } from '@/config/fonts'
import { Navbar } from '@/components/navbar'
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

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const cookies = headers().get('cookie')

    return (
        <html suppressHydrationWarning lang="en">
            <head />
            <body
                className={clsx(
                    'min-h-screen bg-light-gradient dark:bg-dark-gradient font-orbitron antialiased',
                    fontOrbitron.variable
                )}
            >
                <ContextProvider cookies={cookies}>
                    <Providers
                        themeProps={{
                            attribute: 'class',
                            defaultTheme: 'dark',
                        }}
                    >
                        <Navbar />
                        <main className="p-5 h-full">
                            {children}
                            <footer className="flex items-center justify-center p-3">
                                <span className="text-default-600">
                                    Kifah Andary All Rights Reserved
                                </span>
                            </footer>
                        </main>
                    </Providers>
                </ContextProvider>
            </body>
        </html>
    )
}
