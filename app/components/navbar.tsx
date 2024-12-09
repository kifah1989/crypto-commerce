'use client'
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
} from '@nextui-org/navbar'
import { link as linkStyles } from '@nextui-org/theme'
import NextLink from 'next/link'
import clsx from 'clsx'
import { useReducer } from 'react'
import { Link } from '@nextui-org/link'

import UserDropDown from './user-drop-down'

import { siteConfig } from '@/config/site'
import { ThemeSwitch } from '@/shared-components/theme-switch'
import { Logo } from '@/shared-components/icons'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useReducer((current) => !current, false)

    return (
        <section className="w-screen h-auto flex items-center justify-between flex-row flex-no-wrap">
            <NextUINavbar
                height={80}
                isMenuOpen={isMenuOpen}
                position="sticky"
                onMenuOpenChange={setIsMenuOpen}
            >
                {/* Logo */}
                <NavbarContent
                    className="basis-1/5 sm:basis-full "
                    justify="start"
                >
                    <NavbarBrand as="li" className="gap-3 max-w-fit">
                        <NextLink
                            className="flex justify-start items-center gap-1"
                            href="/"
                        >
                            <Logo />
                        </NextLink>
                    </NavbarBrand>
                </NavbarContent>
                {/* Menu */}
                <NavbarContent
                    className="hidden sm:flex basis-1/5 sm:basis-full"
                    justify="center"
                >
                    <NavbarItem className="hidden sm:flex">
                        <ul className="hidden lg:flex gap-5 justify-start ml-2">
                            {siteConfig.navItems.map((item) => (
                                <NavbarItem key={item.href}>
                                    <NextLink
                                        className={clsx(
                                            linkStyles({
                                                color: 'foreground',
                                                size: 'lg',
                                            }),
                                            'font-bold'
                                        )}
                                        color="foreground"
                                        href={item.href}
                                    >
                                        {item.label}
                                    </NextLink>
                                </NavbarItem>
                            ))}
                        </ul>
                    </NavbarItem>
                </NavbarContent>
                {/* Actions */}
                <NavbarContent className=" basis-1 pl-4" justify="end">
                    <NavbarItem className="flex gap-5 items-center">
                        <appkit-button />
                        <UserDropDown />
                    </NavbarItem>
                    {/* @ts-ignore */}
                    <ThemeSwitch />
                    <NavbarMenuToggle className="lg:hidden" />
                </NavbarContent>

                <NavbarMenu className="lg:hidden">
                    <div className="mx-4 mt-2 flex flex-col gap-2">
                        {siteConfig.navMenuItems.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`}>
                                <Link
                                    as={NextLink}
                                    className={clsx(
                                        linkStyles({
                                            color: 'foreground',
                                            size: 'lg',
                                        }),
                                        'font-bold'
                                    )}
                                    color="foreground"
                                    href={item.href}
                                    onPress={() => setIsMenuOpen()}
                                >
                                    {item.label}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                    </div>
                </NavbarMenu>
            </NextUINavbar>
        </section>
    )
}
