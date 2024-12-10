'use client'
import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import { useTheme } from 'next-themes'

import { AdminLayout } from './admin-layout'
import { ProductCreate } from './products/create'
import { ProductList } from './products/list'
import { ProductEdit } from './products/edit'
import { WarrantyCreate } from './warranties/create'
import { WarrantyList } from './warranties/list'
import { WarrantyEdit } from './warranties/edit'

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
    }

    return (
        <Admin dataProvider={dataProvider} layout={AdminLayout} theme={myTheme}>
            <Resource
                create={ProductCreate}
                edit={ProductEdit}
                list={ProductList}
                name="products"
                recordRepresentation="products"
            />
            <Resource
                create={WarrantyCreate}
                edit={WarrantyEdit}
                list={WarrantyList}
                name="warranties"
                recordRepresentation="warranties"
            />
        </Admin>
    )
}

export default AdminApp
