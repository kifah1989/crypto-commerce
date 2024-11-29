import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    User,
} from '@nextui-org/react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function UserDropDown() {
    const { data: session } = useSession()

    return (
        <div className="next-ui-drop-down hidden sm:block">
            {session && (
                <Dropdown placement="bottom-start">
                    <DropdownTrigger>
                        <User
                            as="button"
                            avatarProps={{
                                isBordered: true,
                                src: session?.user?.image!,
                            }}
                            className="transition-transform"
                            description={session?.user?.email!}
                            name={session?.user?.name!}
                        />
                    </DropdownTrigger>
                    <DropdownMenu>
                        <DropdownItem key="settings">Profile</DropdownItem>
                        <DropdownItem
                            key="logout"
                            color="danger"
                            onClick={() => signOut()}
                        >
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            )}
            {!session && <Link href="/signin">Sign In</Link>}
        </div>
    )
}
