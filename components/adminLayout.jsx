import { Menu, Sidebar } from 'react-admin'

export const AdminLayout = ({ children }) => (
    <div className="flex flex-row items-start">
        <Sidebar sx={{ height: 'fit-content' }}>
            <Menu />
        </Sidebar>
        {children}
    </div>
)
