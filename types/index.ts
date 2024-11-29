import { SVGProps } from 'react'

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number
}

export interface Query {
    _start: string
    _end: string
    _sort: string
    _order: string
}
