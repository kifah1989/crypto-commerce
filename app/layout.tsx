import '@/styles/globals.css'
import { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import { Link } from '@nextui-org/link'
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
                        <div className="relative flex flex-col h-screen">
                            <Navbar />
                            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                                {children}
                            </main>
                            <footer className="w-full flex items-center justify-center py-3">
                                <Link
                                    isExternal
                                    className="flex items-center gap-1 text-current"
                                    href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                                    title="nextui.org homepage"
                                >
                                    <span className="text-default-600">
                                        Kifah Andary All Rights Reserved
                                    </span>
                                </Link>
                            </footer>
                        </div>
                    </Providers>
                </ContextProvider>
            </body>
        </html>
    )
}
