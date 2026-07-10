import Link from 'next/link';
import { getVolumes, getSermonsInVolume } from '../../../lib/sermons';
import { getMetadata } from '../../../lib/sermon-metadata';
import SermonInfoPanel from './SermonInfoPanel';

export async function generateStaticParams() {
  const volumes = await getVolumes();
  return volumes.map((volume) => ({ id: volume }));
}

export default async function VolumePage({ params }) {
  const { id } = await params;
  const sermons = await getSermonsInVolume(id);
  const volNum = parseInt(id.replace('volume-', ''), 10);

  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <Link href="/" className="back-link">
        ← Back to Volumes
      </Link>

      <div style={{ marginBottom: '3rem' }}>
        <p className="hero-eyebrow" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>
          Complete Collection
        </p>
        <h1 className="title-gold" style={{ fontSize: '3rem' }}>Volume {volNum}</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          {sermons.length} Sermons
        </p>
      </div>

      <div className="sermon-list">
        {sermons.map((sermon, index) => {
          const num = parseInt(sermon.slug.match(/\d+/)?.[0] || index + 1, 10);
          const meta = getMetadata(num, volNum);
          
          // Adding title and scripture to meta for the panel
          if (meta) {
            meta.title = sermon.title;
            meta.scripture = sermon.scripture?.reference;
          }
          
          return (
            <div key={sermon.slug} className="sermon-list-entry">
              <Link href={`/volume/${id}/${sermon.slug}`}>
                <div className="sermon-item">
                  <div className="sermon-number">#{num}</div>
                  <div className="sermon-item-content">
                    <div className="sermon-title">{sermon.title}</div>
                    {sermon.scripture?.reference && (
                      <div className="sermon-scripture">{sermon.scripture.reference}</div>
                    )}
                  </div>
                </div>
              </Link>
              <SermonInfoPanel meta={meta} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
