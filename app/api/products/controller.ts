import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/config/prisma'
import { Query } from '@/types'

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

export const createProduct = async (req: NextRequest) => {
    const data = await req.json()
    const post = await prisma.product.create({ data })

    return NextResponse.json(post)
}

export const editProduct = async (req: NextRequest) => {
    const data = await req.json()
    const post = await prisma.product.update({
        where: { id: data.id },
        data,
    })

    return NextResponse.json(post)
}

export const deleteProduct = async (id: number) => {
    const post = await prisma.product.delete({
        where: { id },
    })

    return NextResponse.json(post)
}
