import {
    DateInput,
    Edit,
    ReferenceInput,
    SimpleForm,
    TextInput,
} from 'react-admin'

export const WarrantyEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="description" />
            <TextInput source="image" />
            <TextInput source="name" />
            <TextInput source="price" />
            <TextInput source="quantity" />
            <ReferenceInput reference="warranties" source="warrantyId" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Edit>
)
