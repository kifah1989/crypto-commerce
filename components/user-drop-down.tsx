import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    User,
    Button,
} from '@nextui-org/react'
import { signOut, useSession } from 'next-auth/react'
import NextLink from 'next/link'

export default function UserDropDown() {
    const { data: session, status } = useSession()

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
                        <DropdownItem key="settings">
                            <NextLink href="/profile">My Profile</NextLink>
                        </DropdownItem>
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
            {!session && (
                <Button disabled={status === 'loading'}>
                    <NextLink href="/signin">Sign In</NextLink>
                </Button>
            )}
        </div>
    )
}
