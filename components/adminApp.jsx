'use client'
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'

import { AdminLayout } from './adminLayout'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const AdminApp = () => (
    <Admin dataProvider={dataProvider} layout={AdminLayout}>
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

export default AdminApp
