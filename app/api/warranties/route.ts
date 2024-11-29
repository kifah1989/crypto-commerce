import { NextRequest } from 'next/server'

import {
    getAllWarranties,
    createWarranty,
} from '@/app/api/warranties/controller'
import { requireAdmin } from '@/utils/auth-utils'

export async function GET(request: NextRequest) {
    return await getAllWarranties(request)
}

export async function POST(request: NextRequest) {
    const adminResponse = await requireAdmin()

    if (adminResponse) {
        return adminResponse
    }

    return await createWarranty(request)
}
