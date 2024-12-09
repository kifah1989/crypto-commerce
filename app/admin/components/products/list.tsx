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
                <ReferenceField reference="warranties" source="warrantyId" />
                <ReferenceField reference="categories" source="categoryId" />
                <DateField source="createdAt" />
                <DateField source="updatedAt" />
            </Datagrid>
        </List>
    )
}
