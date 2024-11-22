import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/config/prisma'

interface Query {
    _start: string
    _end: string
    _sort: string
    _order: string
}

export const getAllProducts = async (req: NextRequest) => {
    const url = new URL(req.url)
    const query: Query = {
        _start: url.searchParams.get('_start') || '0',
        _end: url.searchParams.get('_end') || '10',
        _sort: url.searchParams.get('_sort') || 'id',
        _order: url.searchParams.get('_order') || 'ASC',
    }

    const posts = await prisma.product.findMany({
        skip: Number(query._start),
        take: Number(query._end) - Number(query._start),
        orderBy: {
            [query._sort]: query._order === 'ASC' ? 'asc' : 'desc',
        },
    })

    const totalCount = await prisma.product.count()

    const response = NextResponse.json(posts)

    response.headers.set('X-Total-Count', totalCount.toString())
    response.headers.set('Access-Control-Expose-Headers', 'X-Total-Count')

    return response
}

export const getSingleProduct = async (id: number) => {
    const post = await prisma.product.findUnique({ where: { id } })

    return NextResponse.json(post)
}
