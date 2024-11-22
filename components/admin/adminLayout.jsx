import { Menu, Sidebar } from 'react-admin'

export const AdminLayout = ({ children }) => (
    <div className="flex flex-row h-min-full">
        <div className="sticky">
            <Sidebar>
                <Menu />
            </Sidebar>
        </div>

        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
)
