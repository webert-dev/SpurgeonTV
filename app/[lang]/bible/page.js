import BibleReader from './BibleReader';
import { getSearchIndex } from '../../../lib/sermons';

export const metadata = {
  title: 'Bible | SpurgeonTV',
  description: 'Read the Bible on SpurgeonTV.',
};

export default async function BiblePage({ params }) {
  const { lang } = await params;
  const sermonsIndex = await getSearchIndex();

  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <p className="hero-eyebrow" style={{ marginBottom: '0.5rem' }}>
          Scripture
        </p>
        <h1 className="title-gold" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
          The Holy Bible
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Read the Word of God directly from SpurgeonTV.
        </p>
      </div>
      
      <BibleReader lang={lang} sermons={sermonsIndex} />
    </div>
  );
}
