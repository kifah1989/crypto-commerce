import { use, useEffect } from 'react'
import {
    Datagrid,
    DateField,
    List,
    ReferenceField,
    TextField,
} from 'react-admin'

export const ProductList = () => {
    return (
        <List>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="description" />
                <TextField source="image" />
                <TextField source="price" />
                <TextField source="quantity" />
                <ReferenceField source="warrantyId" reference="warranties" />
                <ReferenceField source="categoryId" reference="categories" />
                <DateField source="createdAt" />
                <DateField source="updatedAt" />
            </Datagrid>
        </List>
    )
}
