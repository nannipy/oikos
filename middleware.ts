// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

const USER = process.env.BASIC_AUTH_USER || 'admin'
const PASS = process.env.BASIC_AUTH_PASS || 'password123'

// Funzione per generare il valore dell'header Authorization corretto
function getExpectedAuthHeader(user: string, pass: string): string {
  const credentials = Buffer.from(`${user}:${pass}`).toString('base64')
  return `Basic ${credentials}`
}

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get('authorization') || ''
  const expectedHeader = getExpectedAuthHeader(USER, PASS)

  if (authHeader === expectedHeader) {
    return NextResponse.next()
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Protected Area"',
    },
  })
}

export const config = {
  matcher: ['/', '/((?!_next|favicon.ico).*)'],
}