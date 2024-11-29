import { NextRequest } from 'next/server'

import {
    deleteWarranty,
    editWarranty,
    getSingleWarranty,
} from '@/app/api/warranties/controller'
import { requireAdmin } from '@/utils/auth-utils'

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const id = (await params).id

    return await getSingleWarranty(Number(id))
}

export async function PUT(request: NextRequest) {
    const adminResponse = await requireAdmin()

    if (adminResponse) {
        return adminResponse
    }

    return await editWarranty(request)
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const adminResponse = await requireAdmin()

    if (adminResponse) {
        return adminResponse
    }
    const id = (await params).id

    return await deleteWarranty(Number(id))
}
