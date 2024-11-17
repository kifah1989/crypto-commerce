'use client'
import {
    Admin,
    Resource,
    ListGuesser,
    EditGuesser,
    defaultTheme,
} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import { useTheme } from 'next-themes'

import { AdminLayout } from './adminLayout'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const AdminApp = () => {
    const { theme } = useTheme()
    const myTheme = {
        ...defaultTheme,
        palette: {
            mode: theme === 'light' ? 'light' : 'dark',
        },
        typography: {
            // Use the system font instead of the default Roboto font.
            fontFamily: ['var(--font-orbitron)'].join(','),
        },
        components: {
            ...defaultTheme.components,
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
                edit={EditGuesser}
                list={ListGuesser}
                name="users"
                recordRepresentation="name"
            />
            <Resource
                edit={EditGuesser}
                list={ListGuesser}
                name="posts"
                recordRepresentation="title"
            />
            <Resource edit={EditGuesser} list={ListGuesser} name="comments" />
        </Admin>
    )
}

export default AdminApp
