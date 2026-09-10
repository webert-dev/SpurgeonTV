import Link from 'next/link';

import { notFound } from 'next/navigation';
import ClientTranslator from '../../../../components/ClientTranslator';
import { getVolumes, getSermonsInVolume, getSermonContent, getSermonNeighbors } from '../../../../../lib/sermons';
import { loadStaticJson } from '../../../../../lib/data-loader';
import { linkifyBibleReferences } from '../../../../../lib/linkifyBible';
import ReaderTools from './ReaderTools';
import SermonTags from './SermonTags';
import SermonDetails from './SermonDetails';
import { getMetadata } from '../../../../../lib/sermon-metadata';
import { BibleTooltipRenderer } from '../../../../components/BibleTooltipRenderer';
import { getDictionary } from '../../../../../lib/dictionaries';
import ScriptureSettings from './ScriptureSettings';
import TTSPlayer from '../../../../components/TTSPlayer';
import CitationBox from '../../../../components/CitationBox';
import ShareButton from '../../../../components/ShareButton';

// force-dynamic: with 3,500+ sermons it is not feasible to pre-generate all
// pages at build time. Each request is resolved at runtime by the server.
export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const { id, sermonId, lang } = await params;
  const sermon = await getSermonContent(id, sermonId, lang);
  if (!sermon) return {};

  const volNum = parseInt(id.replace('volume-', ''), 10);
  // Normalize "sermon-1" or "sermon_1" → "1"
  const sermonNum = sermonId.replace(/^sermon[_-]/, '');

  // ── Clean title: strip "Sermon N | " prefix if present ──────────────────────
  // Raw title from MD is often "Sermon 1 | The Immutability of God"
  // We want just the thematic title for SEO, e.g. "The Immutability of God"
  const thematicTitle = sermon.title.includes('|')
    ? sermon.title.split('|').slice(1).join('|').trim()
    : sermon.title.trim();

  // ── <title> tag: keyword-rich, under ~65 chars ──────────────────────────────
  // Pattern: "{ThematicTitle}" — Charles Spurgeon Sermon No. {N} | SpurgeonTV
  // This targets: "[sermon name] spurgeon", "spurgeon sermon [N]", "charles spurgeon sermons"
  const pageTitle = `"${thematicTitle}" — Charles Spurgeon Sermon No. ${sermonNum} | SpurgeonTV`;

  // ── <meta description>: informative, keyword-dense, 140-160 chars ───────────
  // Build from: scripture reference + first meaningful sentence of the sermon body
  const stripHtml = (html) => html ? html.replace(/<[^>]*>?/gm, '').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim() : '';

  // Get a clean excerpt from the sermon body (skip the first 50 chars which are often a repeated title/intro phrase)
  const bodyText = stripHtml(sermon.content.substring(0, 1200));

  // Find the first complete sentence (ending in period + space + capital letter, or end of string)
  const sentenceMatch = bodyText.match(/^.{40,200}[.!?](?=\s+[A-Z]|$)/);
  const firstSentence = sentenceMatch ? sentenceMatch[0].trim() : bodyText.substring(0, 160).trim();

  // Compose the description:
  // If has scripture → "Malachi 3:6 | Spurgeon's classic sermon on the immutability of God. {first sentence…}"
  // If no scripture  → "Charles Spurgeon's sermon No. N, Vol. {V}. {first sentence…}"
  let metaDesc;
  if (sermon.scripture?.reference) {
    const scripturePrefix = `${sermon.scripture.reference} — `;
    const themeLine = `Charles H. Spurgeon's famous sermon "${thematicTitle}". `;
    const available = 155 - scripturePrefix.length - themeLine.length;
    const bodySnippet = firstSentence.substring(0, available > 20 ? available : 60);
    metaDesc = `${scripturePrefix}${themeLine}${bodySnippet}`;
  } else {
    const intro = `Sermon No. ${sermonNum}, Vol. ${volNum} — Charles H. Spurgeon preaches on "${thematicTitle}". `;
    const available = 155 - intro.length;
    const bodySnippet = firstSentence.substring(0, available > 20 ? available : 80);
    metaDesc = `${intro}${bodySnippet}`;
  }

  // Trim to 160 chars max and end cleanly
  if (metaDesc.length > 160) {
    metaDesc = metaDesc.substring(0, 157).replace(/\s+\S*$/, '') + '...';
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spurgeon.tv';
  const url = `${siteUrl}/${lang}/volume/${id}/${sermonId}/`;

  const languages = {};
  if (sermon.availableLangs && sermon.availableLangs.length > 0) {
    sermon.availableLangs.forEach(l => {
      languages[l] = `${siteUrl}/${l}/volume/${id}/${sermonId}/`;
    });
  }

  return {
    title: pageTitle,
    description: metaDesc,
    keywords: [
      'Charles Spurgeon', 'Charles H. Spurgeon', 'Spurgeon sermon', 'Spurgeon sermons',
      thematicTitle, `Sermon ${sermonNum}`, `Volume ${volNum}`,
      sermon.scripture?.reference || '', 'classic sermons', 'Reformed preaching',
      'Victorian preaching', 'Prince of Preachers', 'Metropolitan Tabernacle', 'SpurgeonTV'
    ].filter(Boolean),
    alternates: {
      canonical: url,
      languages: Object.keys(languages).length > 0 ? languages : undefined
    },
    openGraph: {
      title: pageTitle,
      description: metaDesc,
      url,
      siteName: 'SpurgeonTV',
      images: [
        {
          url: `${siteUrl}/api/og?title=${encodeURIComponent(thematicTitle)}&vol=${volNum}&num=${sermonNum}&subtitle=${encodeURIComponent(sermon.scripture?.reference || '')}&ext=.png`,
          width: 1200,
          height: 630,
          alt: `${thematicTitle} — Charles Spurgeon Sermon No. ${sermonNum}`,
        },
      ],
      locale: lang,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: metaDesc,
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
    const tagsJson = await loadStaticJson('sermon_tags_en_full.json') || {};
    tags = tagsJson[id]?.[sermonId] || [];
  } catch (e) {
    console.error("Error reading tags:", e);
  }

  const stripHtml = (html) => html ? html.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').trim() : '';
  let textToRead = `${sermon.title}. `;
  if (sermon.scripture) {
    if (sermon.scripture.verse) textToRead += `${sermon.scripture.verse} `;
    if (sermon.scripture.reference) textToRead += `${sermon.scripture.reference}. `;
  }
  textToRead += stripHtml(sermon.content);

  const meta = await getMetadata(parseInt(sermonNum, 10), volNum, lang);
  if (meta) {
    meta.title = sermon.title;
    meta.scripture = sermon.scripture?.reference;
    meta.isTranslated = sermon.isTranslated;
    meta.isAutoTranslated = sermon.isAutoTranslated;
    meta.availableLangs = sermon.availableLangs;
    meta.volumeId = id;
    meta.sermonSlug = sermon.slug;
  }

  return (
    <div className="reader-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": sermon.title,
            "alternativeHeadline": `Sermon No. ${sermonNum}`,
            "image": "https://spurgeon-tv.vercel.app/icon.png",
            "author": {
              "@type": "Person",
              "name": "Charles Haddon Spurgeon",
              "sameAs": "https://wikipedia.org/wiki/Charles_Haddon_Spurgeon"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Spurgeon TV",
              "logo": {
                "@type": "ImageObject",
                "url": "https://spurgeon-tv.vercel.app/icon.png"
              }
            },
            "datePublished": meta ? `${meta.year}-01-01` : "1855-01-01",
            "description": `Read the famous sermon "${sermon.title}" preached by C.H. Spurgeon.`
          })
        }}
      />
      <Link href={`/${lang}`} className="back-link">
        ← {dict.navigation.backToHome}
      </Link>

      <article>
        {sermon.requiresClientTranslation && <ClientTranslator targetLang={lang} dict={dict} />}
        <header className="reader-header">
          <div className="meta">{dict.volume.title.replace('{num}', volNum)} · {dict.volume.table.sermon} {sermonNum}</div>
          <h1 className="title-gold">{sermon.title}</h1>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem', margin: '1rem 0', flexWrap: 'wrap' }}>

            <TTSPlayer lang={lang} dict={dict} text={textToRead} />
            <ShareButton 
              title={sermon.title}
              text={lang === 'pt' ? 'Leia este sermão poderoso no Spurgeon.tv' : lang === 'es' ? 'Lee este sermón en Spurgeon.tv' : 'Read this sermon on Spurgeon.tv'}
            />
          </div>
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
          dangerouslySetInnerHTML={{ __html: linkifyBibleReferences(sermon.content) }}
        />
        
        <SermonDetails meta={meta} lang={lang} dict={dict} />
        <SermonTags tags={tags} dict={dict} />
        <CitationBox
          type="sermon"
          lang={lang}
          url={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.spurgeon.tv'}/${lang}/volume/${id}/${sermonId}`}
          title={sermon.title}
          sermonNum={sermonNum}
          isTranslated={sermon.isTranslated}
          isAutoTranslated={sermon.isAutoTranslated}
        />

        <div style={{ marginTop: '2.5rem', marginBottom: '2.5rem', display: 'flex', justifyContent: 'center' }}>
          <ShareButton 
            className="dev-share-large"
            title={sermon.title}
            text={lang === 'pt' ? 'Leia este sermão no Spurgeon.tv' : lang === 'es' ? 'Lee este sermón en Spurgeon.tv' : 'Read this sermon on Spurgeon.tv'}
          />
        </div>
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
