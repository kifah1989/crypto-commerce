'use client'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import AdminApp from '@/app/admin/components/admin-app'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
        },
    },
})

const Home: NextPage = () => {
    const { data: session, status } = useSession()

    if (status === 'loading') {
        return <div>Loading...</div>
    }
    if ((session?.user as any)?.role !== 'admin') {
        return <div>Not an admin</div>
    }

    return (
        <QueryClientProvider client={queryClient}>
            <AdminApp />
        </QueryClientProvider>
    )
}

export default Home
