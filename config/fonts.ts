import {
    Fira_Code as FontMono,
    Inter as FontSans,
    Orbitron as FontOrbitron,
} from 'next/font/google'

export const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
})

export const fontMono = FontMono({
    subsets: ['latin'],
    variable: '--font-mono',
})

export const fontOrbitron = FontOrbitron({
    subsets: ['latin'],
    variable: '--font-orbitron',
})
