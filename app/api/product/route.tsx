import { NextRequest, NextResponse } from 'next/server'

import { getAllProducts } from '@/app/api/product/controller'
import { prisma } from '@/config/prisma'

export async function GET(request: NextRequest) {
    const response = await getAllProducts(request)

    return response
}

export async function POST(request: NextRequest) {
    const data = await request.json()
    const post = await prisma.product.create({ data })

    return NextResponse.json(post)
}

export async function PUT(request: NextRequest) {
    const data = await request.json()
    const post = await prisma.product.update({
        where: { id: data.id },
        data,
    })

    return NextResponse.json(post)
}

export async function DELETE(request: NextRequest) {
    const data = await request.json()
    const post = await prisma.product.delete({
        where: { id: data.id },
    })

    return NextResponse.json(post)
}
