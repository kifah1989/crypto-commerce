'use client'
import dynamic from 'next/dynamic'
const AdminApp = dynamic(() => import('@/components/admin/adminApp'), {
    ssr: false,
})

const Home = () => {
    return <AdminApp />
}

export default Home
