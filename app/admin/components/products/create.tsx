import { Create, SimpleForm, TextInput } from 'react-admin'

export const ProductCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="description" />
            <TextInput
                disabled
                source="warrantyId"
                value={crypto.randomUUID()}
            />
            <TextInput source="categoryId" />
        </SimpleForm>
    </Create>
)
