import '../globals.css';
import Link from 'next/link';
import { BibleSettingsProvider } from '../components/BibleSettingsProvider';

export const metadata = {
  title: 'SPURGEON TV | The Complete Sermon Collection',
  description: 'Read the complete collection of Charles Spurgeon\'s sermons across all 63 volumes.',
};

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  
  return (
    <html lang={lang}>
      <body>
        <BibleSettingsProvider>
          <header className="site-header">
            <div className="container header-container">
              <Link href={`/${lang}`} className="logo">
                SPURGEON<span>TV</span>
              </Link>
              <nav className="site-nav">
                <Link href={`/${lang}`} className="nav-link">Volumes</Link>
                <Link href={`/${lang}/bible`} className="nav-link">Bible</Link>
                <Link href={`/${lang}/sobre`} className="nav-link">About Spurgeon</Link>
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
        </BibleSettingsProvider>
      </body>
    </html>
  );
}
