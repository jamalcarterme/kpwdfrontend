/**
 * Next.js Middleware
 * Runs on every request (edge runtime)
 * Used for:
 * - Protecting admin/client routes
 * - Redirecting unauthenticated users
 * - Adding security headers
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get auth token from cookies (refreshToken is httpOnly, so we check for presence)
  // For this implementation, we check localStorage via redirect if needed
  // In production, you might use a middleware database or verify JWT signature

  const token = request.cookies.get('kpwd_token')?.value;

  // ===== Protected Admin Routes =====
  if (pathname.startsWith('/admin')) {
    // Allow admin login page without auth
    if (pathname === '/admin/login') {
      return NextResponse.next();
    }

    // Redirect to login if not authenticated
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // Could verify token here, but typically done in component
    return NextResponse.next();
  }

  // ===== Protected Client Routes =====
  if (pathname.startsWith('/client')) {
    // Allow client login & register without auth
    if (pathname === '/client/login' || pathname === '/client/register') {
      return NextResponse.next();
    }

    // Redirect to login if not authenticated
    if (!token) {
      return NextResponse.redirect(new URL('/client/login', request.url));
    }

    return NextResponse.next();
  }

  // ===== Public Routes =====
  // All other routes are public; just pass through
  return NextResponse.next();
}

/**
 * Matcher: Apply middleware only to specific paths
 * This runs middleware only on:
 * - /admin/* (except /admin/login)
 * - /client/* (except /client/login, /client/register)
 *
 * All other routes skip middleware (faster)
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    '/((?!_next/static|_next/image|favicon.ico|assets).*)',
  ],
};
