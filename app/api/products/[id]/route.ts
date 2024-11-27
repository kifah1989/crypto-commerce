import {
    deleteProduct,
    editProduct,
    getSingleProduct,
} from '@/app/api/products/controller'
import { requireAdmin } from '@/utils/auth-utils'
import { NextRequest } from 'next/server'

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const id = (await params).id

    return await getSingleProduct(Number(id))
}

export async function PUT(request: NextRequest) {
    const adminResponse = await requireAdmin(request)
    if (adminResponse) {
        return adminResponse
    }
    return await editProduct(request)
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const adminResponse = await requireAdmin(request)
    if (adminResponse) {
        return adminResponse
    }
    const id = (await params).id
    return await deleteProduct(Number(id))
}
