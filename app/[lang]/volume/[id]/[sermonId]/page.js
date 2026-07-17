import Link from 'next/link';
import { notFound } from 'next/navigation';
import fs from 'fs/promises';
import path from 'path';
import { getVolumes, getSermonsInVolume, getSermonContent, getSermonNeighbors } from '../../../../../lib/sermons';
import { linkifyBibleReferences } from '../../../../../lib/linkifyBible';
import ReaderTools from './ReaderTools';
import SermonTags from './SermonTags';
import { BibleTooltipRenderer } from '../../../../components/BibleTooltipRenderer';
import { getDictionary } from '../../../../../lib/dictionaries';

import ScriptureSettings from './ScriptureSettings';

export async function generateStaticParams() {
  const langs = ['en', 'es', 'pt'];
  const paramSet = new Set();
  const params = [];

  for (const lang of langs) {
    const volumes = await getVolumes(lang);
    for (const volume of volumes) {
      const sermons = await getSermonsInVolume(volume, lang);
      for (const sermon of sermons) {
        const key = `${volume}::${sermon.slug}`;
        if (!paramSet.has(key)) {
          paramSet.add(key);
          params.push({ id: volume, sermonId: sermon.slug });
        }
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { id, sermonId, lang } = await params;
  const sermon = await getSermonContent(id, sermonId, lang);
  if (!sermon) return {};

  const volNum = parseInt(id.replace('volume-', ''), 10);
  const sermonNum = sermonId.replace('sermon-', '');

  const desc = sermon.scripture?.verse 
    ? `"${sermon.scripture.verse}" — ${sermon.scripture.reference}`
    : `Read Sermon ${sermonNum} from Volume ${volNum} by Charles H. Spurgeon.`;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spurgeon.tv';
  const url = `${siteUrl}/${lang}/volume/${id}/${sermonId}`;

  return {
    title: `${sermon.title} | Spurgeon TV`,
    description: desc,
    openGraph: {
      title: sermon.title,
      description: desc,
      url,
      siteName: 'Spurgeon TV',
      images: [
        {
          url: `${siteUrl}/images/og-default.jpg`, // Você pode colocar uma imagem real aqui depois
          width: 1200,
          height: 630,
        },
      ],
      locale: lang,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: sermon.title,
      description: desc,
    },
  };
}

export default async function SermonPage({ params }) {
  const { id, sermonId, lang } = await params;
  const dict = await getDictionary(lang);

  const [sermon, neighbors] = await Promise.all([
    getSermonContent(id, sermonId, lang),
    getSermonNeighbors(id, sermonId, lang),
  ]);

  if (!sermon) notFound();

  const volNum = parseInt(id.replace('volume-', ''), 10);
  const sermonNum = sermonId.replace('sermon-', '');

  let tags = [];
  try {
    const tagsFilePath = path.join(process.cwd(), 'lib', 'sermon_tags_en_full.json');
    const tagsData = await fs.readFile(tagsFilePath, 'utf8');
    const tagsJson = JSON.parse(tagsData);
    tags = tagsJson[id]?.[sermonId] || [];
  } catch (e) {
    console.error("Error reading tags:", e);
  }

  return (
    <div className="reader-container">
      <Link href={`/${lang}`} className="back-link">
        ← {dict.navigation.backToHome}
      </Link>

      <article>
        <header className="reader-header">
          <div className="meta">{dict.volume.title.replace('{num}', volNum)} · {dict.volume.table.sermon} {sermonNum}</div>
          <h1 className="title-gold">{sermon.title}</h1>
          {sermon.scripture && (
            <div className="reader-scripture">
              {sermon.scripture.verse && (
                <p className="reader-scripture-verse">&ldquo;{sermon.scripture.verse}&rdquo;</p>
              )}
              {sermon.scripture.reference && (
                <p className="reader-scripture-ref" 
                   dangerouslySetInnerHTML={{ __html: `&mdash; ${linkifyBibleReferences(sermon.scripture.reference)}` }} 
                />
              )}
              <ScriptureSettings dict={dict} />
            </div>
          )}
        </header>

        <div
          className="reader-content"
          dangerouslySetInnerHTML={{ __html: sermon.content }}
        />
        
        <SermonTags tags={tags} dict={dict} />
      </article>

      <BibleTooltipRenderer dict={dict} />

      {/* ── SERMON NAVIGATION ── */}
      <nav className="sermon-nav" aria-label="Sermon navigation">
        <div className="sermon-nav-side">
          {neighbors.prev ? (
            <Link href={`/${lang}/volume/${id}/${neighbors.prev.slug}`} className="sermon-nav-link sermon-nav-link--prev">
              <span className="sermon-nav-arrow" aria-hidden="true">←</span>
              <span className="sermon-nav-text">
                <span className="sermon-nav-label">{dict.navigation.previousSermon}</span>
                <span className="sermon-nav-title">{neighbors.prev.title}</span>
              </span>
            </Link>
          ) : (
            <span className="sermon-nav-link sermon-nav-link--disabled" aria-disabled="true">
              <span className="sermon-nav-arrow" aria-hidden="true">←</span>
              <span className="sermon-nav-text">
                <span className="sermon-nav-label">{dict.navigation.firstSermon}</span>
              </span>
            </span>
          )}
        </div>

        <Link href={`/${lang}/volume/${id}`} className="sermon-nav-volume-btn" title={dict.reader.backToVolume.replace('{num}', volNum)}>
          Vol. {volNum}
        </Link>

        <div className="sermon-nav-side sermon-nav-side--right">
          {neighbors.next ? (
            <Link href={`/${lang}/volume/${id}/${neighbors.next.slug}`} className="sermon-nav-link sermon-nav-link--next">
              <span className="sermon-nav-text">
                <span className="sermon-nav-label">{dict.navigation.nextSermon}</span>
                <span className="sermon-nav-title">{neighbors.next.title}</span>
              </span>
              <span className="sermon-nav-arrow" aria-hidden="true">→</span>
            </Link>
          ) : (
            <span className="sermon-nav-link sermon-nav-link--disabled" aria-disabled="true">
              <span className="sermon-nav-text">
                <span className="sermon-nav-label">{dict.navigation.lastSermon}</span>
              </span>
              <span className="sermon-nav-arrow" aria-hidden="true">→</span>
            </span>
          )}
        </div>
      </nav>
      <ReaderTools dict={dict} />
    </div>
  );
}
