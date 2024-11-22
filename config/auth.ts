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
            // If your environment variable is named differently than default
            apiKey: process.env.AUTH_RESEND_KEY,
            from: 'Acme <onboarding@resend.dev>',
        }),
    ],
})
