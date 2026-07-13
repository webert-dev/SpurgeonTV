import Link from 'next/link';

export default function ControversiesPage() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh' }}>
      <Link href="/en/about" style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Back to About Spurgeon
      </Link>
      <h1 className="title-gold" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Controversies</h1>
      <div style={{ maxWidth: '800px', lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
        <p>This page is currently under construction.</p>
        <p>Soon, we will detail his battles for truth, including the Downgrade Controversy and the Baptismal Regeneration debate.</p>
      </div>
    </div>
  );
}
