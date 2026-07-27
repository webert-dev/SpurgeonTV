import Link from 'next/link';

export const revalidate = false;
import { getVolumes, getSermonsInVolume } from '../../../../lib/sermons';
import { getMetadata } from '../../../../lib/sermon-metadata';
import SermonInfoPanel from './SermonInfoPanel';
import { getDictionary } from '../../../../lib/dictionaries';

export const dynamicParams = false;

export async function generateStaticParams() {
  const langs = ['en', 'es', 'pt'];
  const paramSet = new Set();
  const params = [];
  for (const lang of langs) {
    const volumes = await getVolumes(lang);
    for (const volume of volumes) {
      const key = `${lang}::${volume}`;
      if (!paramSet.has(key)) {
        paramSet.add(key);
        params.push({ lang, id: volume });
      }
    }
  }
  return params;
}

export default async function VolumePage({ params }) {
  const { id, lang } = await params;
  const dict = await getDictionary(lang);
  const sermons = await getSermonsInVolume(id, lang);
  const volNum = parseInt(id.replace('volume-', ''), 10);

  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <Link href={`/${lang}/volumes`} className="back-link">
        ← {dict.navigation.volumes}
      </Link>

      <div style={{ marginBottom: '3rem' }}>
        <p className="hero-eyebrow" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>
          {dict.home.featured.eyebrow}
        </p>
        <h1 className="title-gold" style={{ fontSize: '3rem' }}>{dict.volume.title.replace('{num}', volNum)}</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          {dict.volume.sermonCount.replace('{count}', sermons.length)}
        </p>
      </div>

      <div className="sermon-list">
        {sermons.map((sermon, index) => {
          const num = parseInt(sermon.slug.match(/\d+/)?.[0] || index + 1, 10);
          const meta = getMetadata(num, volNum, lang);
          
          // Adding title and scripture to meta for the panel
          if (meta) {
            meta.title = sermon.title;
            meta.scripture = sermon.scripture?.reference;
            meta.isTranslated = sermon.isTranslated;
            meta.availableLangs = sermon.availableLangs;
            meta.volumeId = id;
            meta.sermonSlug = sermon.slug;
          }
          
          return (
            <div key={sermon.slug} className="sermon-list-entry">
              <Link href={`/${lang}/volume/${id}/${sermon.slug}`}>
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
              <SermonInfoPanel meta={meta} lang={lang} dict={dict} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
