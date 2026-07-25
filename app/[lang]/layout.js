import '../globals.css';
import Link from 'next/link';
import Script from 'next/script';
import { BibleSettingsProvider } from '../components/BibleSettingsProvider';
import { getDictionary } from '../../lib/dictionaries';
import LanguageSwitcher from '../components/LanguageSwitcher';
import CookieBanner from '../components/CookieBanner';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://spurgeon.tv'),
  title: 'SPURGEON TV | The Complete Sermon Collection',
  description: 'Read the complete collection of Charles Spurgeon\'s sermons across all 63 volumes.',
  verification: {
    other: {
      'msvalidate.01': '77071CAEB066E83C746FC1ADDC0B1502',
    },
  },
};

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Inter:wght@300;400;500;600;700&family=Lexend:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W7VF0M0Y8K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W7VF0M0Y8K');
          `}
        </Script>
        <BibleSettingsProvider>
          <header className="site-header">
            <div className="container header-container">
              <Link href={`/${lang}`} className="logo">
                SPURGEON<span>TV</span>
              </Link>
              <nav className="site-nav">
                <Link href={`/${lang}/sermons`} className="nav-link">{dict.navigation.sermons}</Link>
                <Link href={`/${lang}/bible`} className="nav-link">{dict.navigation.bible}</Link>
                <Link href={`/${lang}/dictionary`} className="nav-link">{dict.navigation.dictionary}</Link>
                <Link href={`/${lang}/devotional`} className="nav-link">{dict.navigation.devotional}</Link>
                <Link href={`/${lang}/about`} className="nav-link">{dict.navigation.about}</Link>
                <Link href={`/${lang}/videos`} className="nav-link">{dict.navigation.videos}</Link>
                <Link href={`/${lang}/support`} className="nav-link support-nav-link" style={{ fontWeight: 600, color: 'var(--brand-purple)' }}>{dict.navigation.support}</Link>
                <LanguageSwitcher currentLang={lang} />
              </nav>
            </div>
          </header>
          <main className="main-content">
            {children}
          </main>
          <footer className="site-footer">
            <div className="container footer-inner">
              <div className="footer-links">
                <ul>
                  <li><Link href={`/${lang}/about-us`}>{dict.footer.links.aboutUs}</Link></li>
                  <li><Link href={`/${lang}/transparency`}>{dict.footer.links.transparency}</Link></li>
                  <li><Link href={`/${lang}/contact`}>{dict.footer.links.contact}</Link></li>
                  <li><Link href={`/${lang}/support`} style={{ color: 'var(--brand-purple)' }}>{dict.footer.links.support}</Link></li>
                </ul>
              </div>
              <div className="footer-brand">
                <p className="footer-logo">SPURGEON<span>TV</span></p>
                <p className="footer-quote">
                  {dict.footer.quote}
                </p>
                <p className="footer-text">
                  {dict.footer.copyrightText}
                </p>
              </div>
              <div className="footer-links">
                <ul>
                  <li><Link href={`/${lang}/privacy-policy`}>{dict.footer.links.privacyPolicy}</Link></li>
                  <li><Link href={`/${lang}/terms-of-service`}>{dict.footer.links.termsOfService}</Link></li>
                  <li><Link href={`/${lang}/cookie-policy`}>{dict.footer.links.cookiePolicy}</Link></li>
                  <li><Link href={`/${lang}`}>{dict.footer.links.home}</Link></li>
                </ul>
              </div>
            </div>
          </footer>
          <CookieBanner lang={lang} dict={dict} />
        </BibleSettingsProvider>
      </body>
    </html>
  );
}
