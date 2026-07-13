import Link from 'next/link';

export default function BiographyPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh' }}>
      <Link href="/en/about" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to About Spurgeon
      </Link>
      <h1 className="title-gold" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Full Biography</h1>
      <div style={{ maxWidth: '800px', lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
        <p>This page is currently under construction.</p>
        <p>Soon, we will add a complete narrative of Charles Spurgeon's life, filled with firsthand accounts, letters, and quotes from his autobiography and other major biographical works.</p>
      </div>
    </div>
  );
}
