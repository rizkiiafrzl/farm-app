import { NextResponse } from 'next/server';

// Daftar rute yang membutuhkan autentikasi
const protectedRoutes = [
  '/dashboard',
  '/crop-production',
  '/monitoring',
  '/insights',
  '/notifications',
  '/resources',
  '/profile',
  '/settings'
];

// Daftar rute yang tidak membutuhkan autentikasi
const publicRoutes = [
  '/auth/login',
  '/auth/register',
  '/auth/forgot-password'
];

export function middleware(request) {
  const token = request.cookies.get('auth-token');
  const { pathname } = request.nextUrl;

  // Jika user belum login dan mencoba mengakses halaman yang dilindungi
  if (!token && !pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // Jika user sudah login dan mencoba mengakses halaman auth
  if (token && pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

// Konfigurasi path mana saja yang akan diproses oleh middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
}; 