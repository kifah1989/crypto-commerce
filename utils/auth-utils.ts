import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { auth } from '@/config/auth'

const adminRoles = ['admin']

export async function requireAdmin(
    request: NextRequest
): Promise<NextResponse | null> {
    const session = await auth()
    if (!session || !adminRoles.includes((session?.user as any)?.role)) {
        return NextResponse.json(
            { error: 'Only admins can access this resource' },
            { status: 401 }
        )
    }
    return null
}
