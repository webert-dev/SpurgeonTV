import Link from 'next/link';
import { getDictionary } from '../../../lib/dictionaries';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.devotional?.pageTitle || "Spurgeon Morning and Evening Devotional",
    description: dict.devotional?.pageSubtitle || "Read the classic daily devotional by Charles Spurgeon.",
  };
}

export default async function DevotionalPage({ params }) {
  const { lang = 'en' } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <Link href={`/${lang}`} style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        ← {dict.devotional?.backHome || 'Back to Home'}
      </Link>
      
      <header style={{ marginBottom: '4rem' }}>
        <h1 className="title-gold" style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
          {dict.devotional?.pageTitle}
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          {dict.devotional?.pageSubtitle}
        </p>
      </header>

      <div style={{ background: 'var(--surface-hover)', border: '1px solid var(--border)', borderRadius: '12px', padding: '3rem 2rem', marginBottom: '4rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📖</div>
        <h2 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
          {dict.devotional?.introTitle}
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
          {dict.devotional?.introText}
        </p>
        
        <div style={{ padding: '1.5rem', background: 'rgba(255, 215, 0, 0.05)', border: '1px solid rgba(255, 215, 0, 0.2)', borderRadius: '8px', color: 'var(--text-primary)' }}>
          <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>⏳ Coming Soon</h3>
          <p style={{ lineHeight: '1.6' }}>
            {dict.devotional?.comingSoon}
          </p>
        </div>
      </div>
    </div>
  );
}
