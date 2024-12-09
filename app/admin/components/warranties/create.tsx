import { Create, SimpleForm, TextInput } from 'react-admin'

export const WarrantyCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="expiryTime" />
            <TextInput source="isActive" />
            <TextInput
                disabled
                source="productId"
                value={crypto.randomUUID()}
            />
            <TextInput source="tokenId" />
            <TextInput source="warrantyPeriod" />
        </SimpleForm>
    </Create>
)
