import '../globals.css';
import Link from 'next/link';
import { BibleSettingsProvider } from '../components/BibleSettingsProvider';
import { getDictionary } from '../../lib/dictionaries';
import LanguageSwitcher from '../components/LanguageSwitcher';

export const metadata = {
  title: 'SPURGEON TV | The Complete Sermon Collection',
  description: 'Read the complete collection of Charles Spurgeon\'s sermons across all 63 volumes.',
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
        <BibleSettingsProvider>
          <header className="site-header">
            <div className="container header-container">
              <Link href={`/${lang}`} className="logo">
                SPURGEON<span>TV</span>
              </Link>
              <nav className="site-nav">
                <Link href={`/${lang}/sermons`} className="nav-link">{dict.navigation.sermons}</Link>
                <Link href={`/${lang}/volumes`} className="nav-link">{dict.navigation.volumes}</Link>
                <Link href={`/${lang}/bible`} className="nav-link">{dict.navigation.bible}</Link>
                <Link href={`/${lang}/dictionary`} className="nav-link">{dict.navigation.dictionary}</Link>
                <Link href={`/${lang}/about`} className="nav-link">{dict.navigation.about}</Link>
                <Link href={`/${lang}/videos`} className="nav-link">{dict.navigation.videos}</Link>
                <LanguageSwitcher currentLang={lang} />
              </nav>
            </div>
          </header>
          <main className="main-content">
            {children}
          </main>
          <footer className="site-footer">
            <div className="container footer-inner">
              <p className="footer-logo">SPURGEON<span>TV</span></p>
              <p className="footer-text">
                {dict.footer.copyrightText}
              </p>
              <p className="footer-quote">
                {dict.footer.quote}
              </p>
            </div>
          </footer>
        </BibleSettingsProvider>
      </body>
    </html>
  );
}
