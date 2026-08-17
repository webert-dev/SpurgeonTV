import Link from 'next/link';

export const revalidate = false;
import { getVolumes, getSermonsInVolume } from '../../../../lib/sermons';
import { getMetadata } from '../../../../lib/sermon-metadata';
import SermonInfoPanel from './SermonInfoPanel';
import { getDictionary } from '../../../../lib/dictionaries';

export const dynamicParams = true;

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }) {
  const { id, lang } = await params;
  const dict = await getDictionary(lang);
  const volNum = parseInt(id.replace('volume-', ''), 10);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spurgeon.tv';
  
  return {
    title: `${dict.volume.title.replace('{num}', volNum)} | Spurgeon`,
    alternates: {
      canonical: `${siteUrl}/${lang}/volume/${id}/`,
    }
  };
}


export default async function VolumePage({ params }) {
  const { id, lang } = await params;
  const dict = await getDictionary(lang);
  const sermons = await getSermonsInVolume(id, lang);
  const volNum = parseInt(id.replace('volume-', ''), 10);

  const sermonsWithMeta = await Promise.all(sermons.map(async (sermon, index) => {
    const num = parseInt(sermon.slug.match(/\d+/)?.[0] || index + 1, 10);
    const meta = await getMetadata(num, volNum, lang);
    if (meta) {
      meta.title = sermon.title;
      meta.scripture = sermon.scripture?.reference;
      meta.isTranslated = sermon.isTranslated;
      meta.availableLangs = sermon.availableLangs;
      meta.volumeId = id;
      meta.sermonSlug = sermon.slug;
    }
    return { ...sermon, num, meta };
  }));

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
        {sermonsWithMeta.map((sermon) => {
          const targetLang = (lang !== 'en' && !sermon.isTranslated) ? 'en' : lang;
          
          return (
            <div key={sermon.slug} className="sermon-list-entry">
              <Link href={`/${targetLang}/volume/${id}/${sermon.slug}`}>
                <div className="sermon-item">
                  <div className="sermon-number">#{sermon.num}</div>
                  <div className="sermon-item-content">
                    <div className="sermon-title">{sermon.title}</div>
                    {sermon.scripture?.reference && (
                      <div className="sermon-scripture">{sermon.scripture.reference}</div>
                    )}
                  </div>
                </div>
              </Link>
              <SermonInfoPanel meta={sermon.meta} lang={lang} dict={dict} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
