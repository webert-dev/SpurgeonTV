import Link from 'next/link';

export const revalidate = false;
import { notFound } from 'next/navigation';
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

export const dynamicParams = true;

export async function generateStaticParams() {
  return [];
}



export async function generateMetadata({ params }) {
  const { id, sermonId, lang } = await params;
  const sermon = await getSermonContent(id, sermonId, lang);
  if (!sermon) return {};

  const volNum = parseInt(id.replace('volume-', ''), 10);
  const sermonNum = sermonId.replace('sermon-', '');

  // Extract a clean text excerpt from the HTML content
  const stripHtml = (html) => html ? html.replace(/<[^>]*>?/gm, '').trim() : '';
  const fullText = stripHtml(sermon.content);
  // Get first 160 chars, ensuring we don't cut in the middle of a word if possible
  let excerpt = fullText.substring(0, 160);
  if (fullText.length > 160) {
    excerpt = excerpt.substring(0, Math.min(excerpt.length, excerpt.lastIndexOf(' '))) + '...';
  }
  
  // Use verse if requested, but user wanted "um trecho da mensagem", so let's prioritize the excerpt.
  // We can include the verse reference in the description if it exists.
  const desc = sermon.scripture?.reference 
    ? `${sermon.scripture.reference} — ${excerpt}`
    : excerpt || `Read Sermon ${sermonNum} from Volume ${volNum} by Charles H. Spurgeon.`;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spurgeon.tv';
  const url = `${siteUrl}/${lang}/volume/${id}/${sermonId}/`;

  const languages = {};
  if (sermon.availableLangs && sermon.availableLangs.length > 0) {
    sermon.availableLangs.forEach(l => {
      languages[l] = `${siteUrl}/${l}/volume/${id}/${sermonId}/`;
    });
  }

  return {
    title: `${sermon.title} | Spurgeon TV`,
    description: desc,
    alternates: {
      canonical: url,
      languages: Object.keys(languages).length > 0 ? languages : undefined
    },
    openGraph: {
      title: sermon.title,
      description: desc,
      url,
      siteName: 'Spurgeon TV',
      images: [
        {
          url: `${siteUrl}/api/og?title=${encodeURIComponent(sermon.title)}&vol=${volNum}&num=${sermonNum}&subtitle=${encodeURIComponent(excerpt)}&ext=.png`,
          width: 1200,
          height: 630,
          alt: sermon.title,
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
        <header className="reader-header">
          <div className="meta">{dict.volume.title.replace('{num}', volNum)} · {dict.volume.table.sermon} {sermonNum}</div>
          <h1 className="title-gold">{sermon.title}</h1>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem', margin: '1rem 0', flexWrap: 'wrap' }}>
            <Link 
              href={`/${lang}/download?volume=${id}&sermon=${sermonId}&title=${encodeURIComponent(sermon.title)}`}
              title={dict.download?.downloadPdf || "Download PDF"}
              className="download-pdf-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
                color: 'var(--gold)',
                padding: '0.6rem 1.2rem',
                borderRadius: '50px',
                fontWeight: '500',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'all 0.2s',
                border: '1px solid rgba(255, 215, 0, 0.2)',
                cursor: 'pointer'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              {dict.download?.downloadPdf || "Download PDF"}
            </Link>
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
