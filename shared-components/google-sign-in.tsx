'use client'
import { signIn } from 'next-auth/react'

export default function SignIn() {
    const handleSignIn = async () => {
        signIn('google', { callbackUrl: '/' })
    }

    return <button onClick={handleSignIn}>Sign in with Google</button>
}
