import { NextResponse } from 'next/server';

const locales = ['en', 'es', 'pt'];
const defaultLocale = 'en';

function getLocale(request) {
  const acceptLang = request.headers.get('accept-language');
  if (!acceptLang) return defaultLocale;
  
  const langs = acceptLang.split(',').map(l => l.split(';')[0].trim().toLowerCase());
  for (const lang of langs) {
    const code = lang.split('-')[0];
    if (locales.includes(code)) {
      return code;
    }
  }
  return defaultLocale;
}

export function proxy(request) {
  const { pathname } = request.nextUrl;
  
  // Ignore static files, images, api, search-index
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return;
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    
    // Redirect if there is no locale
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
