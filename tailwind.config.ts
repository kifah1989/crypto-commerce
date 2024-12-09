import { Config } from 'tailwindcss/types/config'
import { nextui } from '@nextui-org/theme'

const tailwindConfig: Config = {
    content: [
        './shared-components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        backgroundImage: {
            'light-gradient':
                'linear-gradient(242.65deg, #e6ccff 0%, #d6ccf5 16.77%, #c2d1e6 41.59%, #d6e1f0 79.71%, #e6edf5 100.78%)',
            'dark-gradient':
                'linear-gradient(242.65deg, #500082 0%, #1e0952 16.77%, #081e3a 41.59%, #051225 79.71%, #040d1f 100.78%)',
            none: 'none',
            'gradient-to-t':
                'linear-gradient(to top, var(--tw-gradient-stops))',
            'gradient-to-tr':
                'linear-gradient(to top right, var(--tw-gradient-stops))',
            'gradient-to-r':
                'linear-gradient(to right, var(--tw-gradient-stops))',
            'gradient-to-br':
                'linear-gradient(to bottom right, var(--tw-gradient-stops))',
            'gradient-to-b':
                'linear-gradient(to bottom, var(--tw-gradient-stops))',
            'gradient-to-bl':
                'linear-gradient(to bottom left, var(--tw-gradient-stops))',
            'gradient-to-l':
                'linear-gradient(to left, var(--tw-gradient-stops))',
            'gradient-to-tl':
                'linear-gradient(to top left, var(--tw-gradient-stops))',
        },
        fontFamily: {
            orbitron: ['var(--font-orbitron)'],
            sans: [
                'ui-sans-serif',
                'system-ui',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"',
            ],
            serif: [
                'ui-serif',
                'Georgia',
                'Cambria',
                '"Times New Roman"',
                'Times',
                'serif',
            ],
            mono: [
                'ui-monospace',
                'SFMono-Regular',
                'Menlo',
                'Monaco',
                'Consolas',
                '"Liberation Mono"',
                '"Courier New"',
                'monospace',
                '"Orbitron"',
            ],
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
}

export default tailwindConfig
