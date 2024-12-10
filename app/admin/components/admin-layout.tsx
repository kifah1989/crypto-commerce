'use client'
import { AppBar, Layout, Menu, Sidebar, TitlePortal } from 'react-admin'

import { Logo } from '@/shared-components/icons'

export const AdminLayout = ({ children }: { children: React.ReactNode }) => (
    <Layout
        appBar={MyAppBar}
        menu={MyMenu}
        sidebar={MySidebar}
        sx={{
            minHeight: '100%',
            '& .RaLayout-appFrame': {
                marginTop: 0,
                height: 'fit-content',
            },
            '& .RaLayout-content': {
                padding: '14px',
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
const MySidebar = (props: any) => (
    <Sidebar
        sx={{
            height: 'fit-content',
            '& .RaSidebar-fixed': {
                position: 'relative',
                height: 'fit-content',
            },
        }}
        {...props}
    />
)

export const MyMenu = () => {
    return (
        <Menu sx={{ position: 'relative' }}>
            <Menu.ResourceItems />
        </Menu>
    )
}
