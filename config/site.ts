export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: 'Crypto Commerce',
    description: 'Buy Things With NFT Warranty',
    navItems: [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'Pricing',
            href: '/pricing',
        },
        {
            label: 'Blog',
            href: '/blog',
        },
        {
            label: 'About',
            href: '/about',
        },
    ],
    navMenuItems: [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'Pricing',
            href: '/pricing',
        },
        {
            label: 'Blog',
            href: '/blog',
        },
        {
            label: 'About',
            href: '/about',
        },
    ],
    links: {
        github: 'https://github.com/nextui-org/nextui',
        twitter: 'https://twitter.com/getnextui',
        docs: 'https://nextui.org',
        discord: 'https://discord.gg/9b6yyZKmH4',
        sponsor: 'https://patreon.com/jrgarciadev',
    },
}
