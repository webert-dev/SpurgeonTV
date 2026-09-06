import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Ignore API routes, public files, and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Root redirect based on Accept-Language
  if (pathname === '/') {
    const acceptLanguage = request.headers.get('accept-language') || '';
    
    let locale = 'en';
    if (acceptLanguage.includes('pt')) {
      locale = 'pt';
    } else if (acceptLanguage.includes('es')) {
      locale = 'es';
    }

    return NextResponse.redirect(new URL(`/${locale}`, request.url), 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
