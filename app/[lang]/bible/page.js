import BibleReader from './BibleReader';
import { getSearchIndex } from '../../../lib/sermons';
import { getDictionary } from '../../../lib/dictionaries';
import { Suspense } from 'react';

export const metadata = {
  title: 'Bible | SpurgeonTV',
  description: 'Read the Bible on SpurgeonTV.',
};

export default async function BiblePage({ params }) {
  const { lang } = await params;
  const sermonsIndex = await getSearchIndex();
  const dict = await getDictionary(lang);

  return (
    <div className="container" style={{ padding: '0.5rem 2rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": dict.bible.pageTitle,
            "description": dict.bible.pageSubtitle
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `https://spurgeontv.vercel.app/${lang}`
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": dict.bible.pageTitle,
                "item": `https://spurgeontv.vercel.app/${lang}/bible`
              }
            ]
          })
        }}
      />
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <p className="hero-eyebrow" style={{ marginBottom: '0.5rem' }}>
          {dict.bible.pageEyebrow}
        </p>
        <h1 className="title-gold" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
          {dict.bible.pageTitle}
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          {dict.bible.pageSubtitle}
        </p>
      </div>
      
      <Suspense fallback={<div>Loading Bible...</div>}>
        <BibleReader lang={lang} sermons={sermonsIndex} dict={dict} />
      </Suspense>
    </div>
  );
}
