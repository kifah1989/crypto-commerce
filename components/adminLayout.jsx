import { Menu } from 'react-admin'

export const AdminLayout = ({ children }) => (
    <div className="flex flex-col h-screen">
        <div className="flex flex-1 overflow-hidden">
            <aside className="w-64  shadow-md p-4">
                <Menu />
            </aside>

            <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        </div>
    </div>
)
