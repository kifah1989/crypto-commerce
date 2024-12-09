import { Menu } from 'react-admin'

export const AdminLayout = ({ children }) => (
    <section className="flex items-start flex-row overflow-auto">
        <div className="flex flex-col items-center h-fit w-24">
            <Menu />
        </div>
        <main className="flex-2 p-6 h-fit">{children}</main>
    </section>
)
