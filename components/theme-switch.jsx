'use client'

import { useEffect } from 'react'
import { VisuallyHidden } from '@react-aria/visually-hidden'
import { useSwitch } from '@nextui-org/switch'
import { useTheme } from 'next-themes'
import { useIsSSR } from '@react-aria/ssr'
import clsx from 'clsx'
import { useAppKitTheme } from '@reown/appkit/react'

import { SunFilledIcon, MoonFilledIcon } from '@/components/icons'

export const ThemeSwitch = ({ className, classNames }) => {
    const { theme, setTheme } = useTheme()
    const isSSR = useIsSSR()

    const onChange = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    const { setThemeMode, setThemeVariables } = useAppKitTheme()

    useEffect(() => {
        setThemeVariables({
            '--w3m-color-mix': '#081D39',
            '--w3m-color-mix-strength': 40,
            '--w3m-border-radius-master': '1.1px',
        })

        setThemeMode(theme === 'light' ? 'light' : 'dark')
    }, [theme])
    const {
        Component,
        slots,
        isSelected,
        getBaseProps,
        getInputProps,
        getWrapperProps,
    } = useSwitch({
        isSelected: theme === 'light' || isSSR,
        'aria-label': `Switch to ${theme === 'light' || isSSR ? 'dark' : 'light'} mode`,
        onChange,
    })

    return (
        <Component
            {...getBaseProps({
                className: clsx(
                    'px-px transition-opacity hover:opacity-80 cursor-pointer',
                    className,
                    classNames?.base
                ),
            })}
        >
            <VisuallyHidden>
                <input {...getInputProps()} />
            </VisuallyHidden>
            <div
                {...getWrapperProps()}
                className={slots.wrapper({
                    class: clsx(
                        [
                            'w-auto h-auto',
                            'bg-transparent',
                            'rounded-lg',
                            'flex items-center justify-center',
                            'group-data-[selected=true]:bg-transparent',
                            '!text-default-500',
                            'pt-px',
                            'px-0',
                            'mx-0',
                        ],
                        classNames?.wrapper
                    ),
                })}
            >
                {!isSelected || isSSR ? (
                    <SunFilledIcon size={22} />
                ) : (
                    <MoonFilledIcon size={22} />
                )}
            </div>
        </Component>
    )
}
