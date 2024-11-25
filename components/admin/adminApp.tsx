'use client'
import { Admin, Resource, EditGuesser } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import { useTheme } from 'next-themes'

import { AdminLayout } from './adminLayout'
import { ProductCreate } from './products/create'
import { ProductList } from './products/list'

const AdminApp = () => {
    const dataProvider = jsonServerProvider(
        `${process.env.NEXT_PUBLIC_API_URL}/api`
    )
    const { theme } = useTheme()
    const myTheme = {
        palette: {
            mode: theme === 'light' ? 'light' : 'dark',
        },
        typography: {
            // Use the system font instead of the default Roboto font.
            fontFamily: ['var(--font-orbitron)'].join(','),
        },
        components: {
            RaList: {
                styleOverrides: {
                    root: {
                        maxWidth: '100%',
                        overflowX: 'auto',
                    },
                },
            },
        },
    }
    return (
        <Admin dataProvider={dataProvider} layout={AdminLayout} theme={myTheme}>
            <Resource
                create={ProductCreate}
                edit={EditGuesser}
                list={ProductList}
                name="product"
                recordRepresentation="product"
            />
        </Admin>
    )
}

export default AdminApp
