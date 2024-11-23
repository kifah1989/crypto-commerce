'use client'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useSession } from 'next-auth/react'
const AdminApp = dynamic(() => import('@/components/admin/adminApp'), {
    ssr: false,
})

const Home: NextPage = () => {
    const { data: session, status } = useSession()
    if (status === 'loading') {
        return <div>Loading...</div>
    }
    if ((session?.user as any)?.role !== 'admin') {
        return <div>Not signed in</div>
    }
    return <AdminApp />
}

export default Home
