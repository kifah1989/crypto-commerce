import { AppBar, Layout, TitlePortal } from 'react-admin'

import { Logo } from '@/shared-components/icons'

export const AdminLayout = ({ children }: { children: React.ReactNode }) => (
    <Layout
        appBar={MyAppBar}
        sx={{
            minWidth: '100%',
            '& .RaLayout-appFrame': {
                marginTop: 0,
                height: 'fit-content',
            },
        }}
    >
        {children}
    </Layout>
)

export const MyAppBar = () => (
    <AppBar color="primary" sx={{ position: 'relative' }}>
        <TitlePortal />
        <div className="flex-1" />
        <Logo />
        <div className="flex-1" />
    </AppBar>
)
