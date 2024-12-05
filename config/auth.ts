import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Resend from 'next-auth/providers/resend'
import { PrismaAdapter } from '@auth/prisma-adapter'

import { prisma } from './prisma'

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),

    providers: [
        Google,
        Resend({
            apiKey: process.env.AUTH_RESEND_KEY,
            from: 'Crypto Commerce <onboarding@resend.dev>',
        }),
    ],
    callbacks: {
        signIn: async ({ user, account }: { user: any; account: any }) => {
            try {
                const existingUser = await prisma.user.findUnique({
                    where: { email: user.email },
                    include: { accounts: true },
                })

                if (existingUser) {
                    const existingAccount = existingUser.accounts.find(
                        (acc) => acc.provider === account.provider
                    )

                    if (!existingAccount) {
                        await prisma.account.create({
                            data: {
                                userId: existingUser.id,
                                type: account.type,
                                provider: account.provider,
                                providerAccountId: account.providerAccountId,
                                access_token: account.access_token,
                                token_type: account.token_type,
                                scope: account.scope,
                                id_token: account.id_token,
                                expires_at: account.expires_at,
                                refresh_token: account.refresh_token,
                                session_state: account.session_state,
                            },
                        })
                    }
                }

                return true
            } catch (error) {
                console.log(error)

                return false
            }
        },
        session({ session }: { session: any }) {
            return session
        },
    },
    pages: {
        signIn: '/signin',
        error: '/error',
    },
})
