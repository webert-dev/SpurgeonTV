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

  const locales = ['en', 'pt', 'es'];
  
  // Check if the pathname already has a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // If no locale is found, determine the locale from headers or default to 'en'
  const acceptLanguage = request.headers.get('accept-language') || '';
  let locale = 'en';
  if (acceptLanguage.includes('pt')) {
    locale = 'pt';
  } else if (acceptLanguage.includes('es')) {
    locale = 'es';
  }

  // Redirect to the same path but with the locale prefixed
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl, 307);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
