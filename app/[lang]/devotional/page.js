import { getDictionary } from '../../../lib/dictionaries';
import DevotionalClient from './DevotionalClient';
import fs from 'fs';
import path from 'path';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  const availableLangs = ['en'];
  try {
    const dataDir = path.join(process.cwd(), 'public', 'data');
    if (fs.existsSync(path.join(dataDir, 'morning-and-evening-pt.json'))) availableLangs.push('pt');
    if (fs.existsSync(path.join(dataDir, 'morning-and-evening-es.json'))) availableLangs.push('es');
  } catch (e) {}

  const languages = {};
  availableLangs.forEach(l => {
    languages[l] = `/${l}/devotional`;
  });

  return {
    title: dict.devotional?.pageTitle || 'Spurgeon Morning and Evening Devotional',
    description: dict.devotional?.pageSubtitle || 'Read the classic daily devotional by Charles Spurgeon, with morning and evening readings.',
    keywords: ['Charles Spurgeon', 'Morning and Evening', 'devocional', 'devotional', 'dia e noite', 'Spurgeon devotional'],
    alternates: {
      languages: Object.keys(languages).length > 0 ? languages : undefined
    },
    openGraph: {
      title: dict.devotional?.pageTitle || 'Spurgeon Morning and Evening Devotional',
      description: dict.devotional?.pageSubtitle,
    },
  };
}

export default async function DevotionalPage({ params }) {
  const { lang = 'en' } = await params;
  const dict = await getDictionary(lang);

  let devotionalData = [];
  try {
    const fileName = lang === 'en' ? 'morning-and-evening.json' : `morning-and-evening-${lang}.json`;
    const filePath = path.join(process.cwd(), 'public', 'data', fileName);
    
    if (fs.existsSync(filePath)) {
      devotionalData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    } else {
      // Fallback to English if file is not found (e.g. while translation is running)
      const fallbackPath = path.join(process.cwd(), 'public', 'data', 'morning-and-evening.json');
      devotionalData = JSON.parse(fs.readFileSync(fallbackPath, 'utf-8'));
    }
  } catch (error) {
    console.error("Error loading devotional data:", error);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": dict.devotional?.pageTitle || "Spurgeon Morning and Evening Devotional",
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
            "description": dict.devotional?.pageSubtitle || "Read the classic daily devotional by Charles Spurgeon."
          })
        }}
      />
      <DevotionalClient
        lang={lang}
        dict={dict}
        devotionalData={devotionalData}
      />
    </>
  );
}
