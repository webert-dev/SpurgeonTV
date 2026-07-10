import '../globals.css';
import Link from 'next/link';
import LanguageSelector from './LanguageSelector';

export const metadata = {
  title: 'SPURGEON TV | The Complete Sermon Collection',
  description: 'The complete collection of Charles Spurgeon sermons, beautifully formatted for reading.',
};

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  
  return (
    <html lang={lang}>
      <body>
        <header className="site-header">
          <div className="container header-container">
            <Link href={`/${lang}`} className="logo">
              SPURGEON<span>TV</span>
            </Link>
            <nav className="site-nav">
              <Link href={`/${lang}`} className="nav-link">Volumes</Link>
              <Link href={`/${lang}/sobre`} className="nav-link">About Spurgeon</Link>
              <LanguageSelector currentLang={lang} />
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
              The sermons of Charles Haddon Spurgeon (1834–1892) are in the public domain.
            </p>
            <p className="footer-quote">
              &ldquo;Visit many good books, but live in the Bible.&rdquo; — C.H. Spurgeon
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
