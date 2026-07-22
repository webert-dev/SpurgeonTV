import DictionaryClient from './DictionaryClient';
import { Suspense } from 'react';

export const metadata = {
  title: 'Dictionary | Spurgeon TV',
  description: 'Theological and Biblical Dictionary for studying Charles H. Spurgeon\'s sermons.',
  alternates: {
    languages: {
      'en': '/en/dictionary',
      'pt': '/pt/dictionary',
      'es': '/es/dictionary',
    }
  }
};

export default async function DictionaryPage({ params }) {
  const { lang } = await params;

  return (
    <div style={{ padding: '0.5rem 1rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            "@id": `https://spurgeontv.vercel.app/${lang}/dictionary`,
            "name": "Spurgeon TV Theological Dictionary",
            "description": "A comprehensive dictionary of theological, biblical, and historical terms used in Charles Spurgeon's sermons.",
            "inLanguage": lang
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
                "name": "Dictionary",
                "item": `https://spurgeontv.vercel.app/${lang}/dictionary`
              }
            ]
          })
        }}
      />
      <Suspense fallback={<div>Loading Dictionary...</div>}>
        <DictionaryClient lang={lang} />
      </Suspense>
    </div>
  );
}
