import Link from 'next/link';
import { getDictionary } from '../../../lib/dictionaries';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return {
    title: `${dict.devotional.pageTitle} | Spurgeon TV`,
    description: dict.devotional.pageSubtitle,
  };
}

export default async function DevotionalPage({ params }) {
  const { lang = 'en' } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      
      <header style={{ marginBottom: '3rem' }}>
        <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
          {dict.devotional.pageTitle}
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          {dict.devotional.pageSubtitle}
        </p>
      </header>

      <div style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        padding: '3rem 2rem',
        marginBottom: '3rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle decorative background element */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '150px',
          height: '150px',
          background: 'var(--brand-purple)',
          opacity: '0.05',
          borderRadius: '50%',
          filter: 'blur(30px)'
        }}></div>

        <div style={{ 
          display: 'inline-block', 
          background: 'var(--brand-purple)', 
          color: 'white', 
          padding: '0.4rem 1rem', 
          borderRadius: '20px', 
          fontSize: '0.9rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Coming Soon / Em Breve
        </div>

        <h2 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
          {dict.devotional.introTitle}
        </h2>
        
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem', textAlign: 'left' }}>
          {dict.devotional.introText}
        </p>
        
        <div style={{
          padding: '1.5rem',
          background: 'rgba(255, 215, 0, 0.05)',
          borderLeft: '4px solid var(--primary)',
          borderRadius: '0 8px 8px 0',
          textAlign: 'left'
        }}>
          <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: '1.6', margin: 0 }}>
            {dict.devotional.comingSoon}
          </p>
        </div>
      </div>

      <Link href={`/${lang}`} style={{
        display: 'inline-block',
        padding: '0.8rem 2rem',
        background: 'transparent',
        border: '1px solid var(--border)',
        color: 'var(--text-primary)',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: '500',
        transition: 'all 0.2s'
      }}>
        {dict.devotional.backHome}
      </Link>

    </div>
  );
}
