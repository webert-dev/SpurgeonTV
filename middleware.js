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

// NOTE: "proxy" convention is Next.js 16+, but opennextjs-cloudflare requires
// Edge Runtime which only works with the legacy "middleware" export name.
// The deprecation warning is harmless - this runs in Edge and works with Cloudflare Workers.
export function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Ignore static files, images, api, data assets
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
    
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    );
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
