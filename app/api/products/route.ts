import { NextRequest, NextResponse } from 'next/server'

import { createProduct, getAllProducts } from '@/app/api/products/controller'
import { requireAdmin } from '@/utils/auth-utils'

export async function GET(request: NextRequest) {
    return await getAllProducts(request)
}

export async function POST(request: NextRequest) {
    const adminResponse = await requireAdmin(request)
    if (adminResponse) {
        return adminResponse
    }
    return await createProduct(request)
}
