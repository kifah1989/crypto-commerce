import { NextRequest } from 'next/server'

import { createProduct, getAllProducts } from '@/app/api/products/controller'

export async function GET(request: NextRequest) {
    return await getAllProducts(request)
}

export async function POST(request: NextRequest) {
    return await createProduct(request)
}
