import Link from 'next/link';
import { getVolumes, getSermonsInVolume } from '../../../../lib/sermons';
import { getMetadata } from '../../../../lib/sermon-metadata';
import VolumeSermonsClient from './VolumeSermonsClient';
import VolumeNav from './VolumeNav';
import { getDictionary } from '../../../../lib/dictionaries';

export const revalidate = false;
export const dynamicParams = true;

export async function generateStaticParams() {
  const langs = ['en', 'pt', 'es'];
  const params = [];
  for (const lang of langs) {
    const volumes = await getVolumes(lang);
    for (const volume of volumes) {
      params.push({ lang, id: volume });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { id, lang } = await params;
  const dict = await getDictionary(lang);
  const volNum = parseInt(id.replace(/^volume-?/, ''), 10);
  const canonicalVolume = `volume-${String(volNum).padStart(2, '0')}`;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spurgeon.tv';
  
  return {
    title: `${dict.volume.title.replace('{num}', volNum)} | Spurgeon`,
    alternates: {
      canonical: `${siteUrl}/${lang}/volume/${canonicalVolume}/`,
    }
  };
}


export default async function VolumePage({ params }) {
  const { id, lang } = await params;
  const volNum = parseInt(id.replace(/^volume-?/, ''), 10);
  const canonicalVolume = `volume-${String(volNum).padStart(2, '0')}`;
  const dict = await getDictionary(lang);
  const sermons = await getSermonsInVolume(canonicalVolume, lang);

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

  const prevVolFormatted = volNum > 1 ? String(volNum - 1).padStart(2, '0') : null;
  const nextVolFormatted = volNum < 63 ? String(volNum + 1).padStart(2, '0') : null;

  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <Link href={`/${lang}/volumes`} className="back-link">
        ← {dict.navigation.volumes}
      </Link>

      <div style={{ marginBottom: '2.5rem' }}>
        <p className="hero-eyebrow" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>
          {dict.home.featured.eyebrow}
        </p>
        <h1 className="title-gold" style={{ fontSize: '3rem' }}>{dict.volume.title.replace('{num}', volNum)}</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          {dict.volume.sermonCount.replace('{count}', sermons.length)}
        </p>
      </div>

      <VolumeNav
        currentVolume={volNum}
        lang={lang}
        dict={dict}
      />

      <VolumeSermonsClient
        sermonsWithMeta={sermonsWithMeta}
        id={id}
        lang={lang}
        dict={dict}
      />

      <nav className="volume-bottom-nav" aria-label={dict.volume.browseVolumes || 'Volume navigation'}>
        <div className="volume-bottom-nav-side">
          {prevVolFormatted ? (
            <Link
              href={`/${lang}/volume/volume-${prevVolFormatted}/`}
              className="volume-bottom-nav-btn"
            >
              <span>←</span>
              <span>{dict.volume.prevVolume.replace('{num}', prevVolFormatted)}</span>
            </Link>
          ) : (
            <span className="volume-bottom-nav-btn disabled" aria-disabled="true">
              <span>←</span>
              <span>{dict.volume.prevVolume.replace('{num}', '01')}</span>
            </span>
          )}
        </div>

        <div className="volume-bottom-nav-center">
          <Link href={`/${lang}/volumes/`} className="volume-bottom-all-btn">
            {dict.navigation.volumes}
          </Link>
        </div>

        <div className="volume-bottom-nav-side volume-bottom-nav-side--right">
          {nextVolFormatted ? (
            <Link
              href={`/${lang}/volume/volume-${nextVolFormatted}/`}
              className="volume-bottom-nav-btn"
            >
              <span>{dict.volume.nextVolume.replace('{num}', nextVolFormatted)}</span>
              <span>→</span>
            </Link>
          ) : (
            <span className="volume-bottom-nav-btn disabled" aria-disabled="true">
              <span>{dict.volume.nextVolume.replace('{num}', '63')}</span>
              <span>→</span>
            </span>
          )}
        </div>
      </nav>
    </div>
  );
}
