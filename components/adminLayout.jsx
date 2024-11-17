import { Menu } from 'react-admin'

export const AdminLayout = ({ children }) => (
    <div className="flex flex-row overflow-auto">
        <div className="w-64 shadow-md p-4 sticky">
            <Menu />
        </div>

        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
)
