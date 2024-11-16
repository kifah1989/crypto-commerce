import { AppBar, Layout } from 'react-admin'

export const AdminLayout = ({ children }) => (
    <Layout appBar={AdminAppBar} sx={{ '& .RaLayout-appFrame': { margin: 0 } }}>
        {children}
    </Layout>
)

const AdminAppBar = () => <AppBar color="primary" position="sticky" />
