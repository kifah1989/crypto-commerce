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
        session({ session, token }: { session: any; token: any }) {
            return session
        },
    },
    pages: {
        signIn: '/signin',
    },
})
