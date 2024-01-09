import { NextResponse } from 'next/server'

export function middleware(request) {
    const authToken = "manish"
    if (!authToken) {
        return NextResponse.redirect(new URL("/public/login", request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        "/common/home"
    ],
}
