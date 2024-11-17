import dynamic from 'next/dynamic'
const AdminApp = dynamic(() => import('@/components/adminApp'), { ssr: false })

const Home = () => {
    return (
        <section className="flex flex-col">
            <AdminApp />
        </section>
    )
}

export default Home
