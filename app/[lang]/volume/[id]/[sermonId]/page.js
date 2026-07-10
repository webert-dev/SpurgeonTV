import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getVolumes, getSermonsInVolume, getSermonContent, getSermonNeighbors } from '../../../../../lib/sermons';

export async function generateStaticParams() {
  const volumes = await getVolumes();
  const params = [];
  for (const volume of volumes) {
    const sermons = await getSermonsInVolume(volume);
    for (const sermon of sermons) {
      params.push({ id: volume, sermonId: sermon.slug });
    }
  }
  return params;
}

export default async function SermonPage({ params }) {
  const { id, sermonId, lang } = await params;

  const [sermon, neighbors] = await Promise.all([
    getSermonContent(id, sermonId, lang),
    getSermonNeighbors(id, sermonId, lang),
  ]);

  if (!sermon) notFound();

  const volNum = parseInt(id.replace('volume-', ''), 10);
  const sermonNum = sermonId.replace('sermon-', '');

  return (
    <div className="reader-container" style={{ padding: '4rem 0' }}>
      <Link href={`/${lang}/volume/${id}`} className="back-link">
        ← Back to Volume {volNum}
      </Link>

      <article>
        <header className="reader-header">
          <div className="meta">Volume {volNum} · Sermon {sermonNum}</div>
          <h1 className="title-gold">{sermon.title}</h1>
          {sermon.scripture && (
            <div className="reader-scripture">
              {sermon.scripture.verse && (
                <p className="reader-scripture-verse">&ldquo;{sermon.scripture.verse}&rdquo;</p>
              )}
              {sermon.scripture.reference && (
                <p className="reader-scripture-ref">— {sermon.scripture.reference}</p>
              )}
            </div>
          )}
        </header>

        <div
          className="reader-content"
          dangerouslySetInnerHTML={{ __html: sermon.content }}
        />
      </article>

      {/* ── SERMON NAVIGATION ── */}
      <nav className="sermon-nav" aria-label="Sermon navigation">
        <div className="sermon-nav-side">
          {neighbors.prev ? (
            <Link href={`/${lang}/volume/${id}/${neighbors.prev.slug}`} className="sermon-nav-link sermon-nav-link--prev">
              <span className="sermon-nav-arrow" aria-hidden="true">←</span>
              <span className="sermon-nav-text">
                <span className="sermon-nav-label">Previous Sermon</span>
                <span className="sermon-nav-title">{neighbors.prev.title}</span>
              </span>
            </Link>
          ) : (
            <span className="sermon-nav-link sermon-nav-link--disabled" aria-disabled="true">
              <span className="sermon-nav-arrow" aria-hidden="true">←</span>
              <span className="sermon-nav-text">
                <span className="sermon-nav-label">First Sermon</span>
              </span>
            </span>
          )}
        </div>

        <Link href={`/${lang}/volume/${id}`} className="sermon-nav-volume-btn" title={`Back to Volume ${volNum}`}>
          Vol. {volNum}
        </Link>

        <div className="sermon-nav-side sermon-nav-side--right">
          {neighbors.next ? (
            <Link href={`/${lang}/volume/${id}/${neighbors.next.slug}`} className="sermon-nav-link sermon-nav-link--next">
              <span className="sermon-nav-text">
                <span className="sermon-nav-label">Next Sermon</span>
                <span className="sermon-nav-title">{neighbors.next.title}</span>
              </span>
              <span className="sermon-nav-arrow" aria-hidden="true">→</span>
            </Link>
          ) : (
            <span className="sermon-nav-link sermon-nav-link--disabled" aria-disabled="true">
              <span className="sermon-nav-text">
                <span className="sermon-nav-label">Last Sermon</span>
              </span>
              <span className="sermon-nav-arrow" aria-hidden="true">→</span>
            </span>
          )}
        </div>
      </nav>
    </div>
  );
}
