import GoogleSignIn from '@/components/googleSignIn'
import { signIn } from '@/config/auth'

export default function EmailSignIn() {
    return (
        <>
            <form
                action={async (formData) => {
                    'use server'
                    await signIn('resend', formData)
                }}
            >
                <input name="email" placeholder="Email" type="text" />
                <button type="submit">Signin with Resend</button>
            </form>
            <GoogleSignIn />
        </>
    )
}
