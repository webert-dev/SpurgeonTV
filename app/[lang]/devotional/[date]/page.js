import { getDictionary } from '../../../../lib/dictionaries';
import DevotionalDayClient from './DevotionalDayClient';
import fs from 'fs';
import path from 'path';

function daysInMonth(m) {
  const d30 = [4, 6, 9, 11];
  if (m === 2) return 29;
  if (d30.includes(m)) return 30;
  return 31;
}

function getPrevDateStr(month, day) {
  let m = month, d = day - 1;
  if (d < 1) { m = m - 1 < 1 ? 12 : m - 1; d = daysInMonth(m); }
  return `${m.toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;
}

function getNextDateStr(month, day) {
  let m = month, d = day + 1;
  if (d > daysInMonth(m)) { m = m + 1 > 12 ? 1 : m + 1; d = 1; }
  return `${m.toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;
}

export async function generateStaticParams() {
  const params = [];
  const langs = ['en', 'pt', 'es'];
  
  for (const lang of langs) {
    for (let month = 1; month <= 12; month++) {
      const days = daysInMonth(month);
      for (let day = 1; day <= days; day++) {
        const dateStr = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        params.push({ lang, date: dateStr });
      }
    }
  }
  
  return params;
}

export async function generateMetadata({ params }) {
  const { lang, date } = await params;
  const dict = await getDictionary(lang);
  
  const [mStr, dStr] = date.split('-');
  const month = parseInt(mStr, 10);
  const day = parseInt(dStr, 10);
  
  const monthNamesPt = ['', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const monthNamesEs = ['', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const monthNamesEn = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  let mName = monthNamesEn[month];
  if (lang === 'pt') mName = monthNamesPt[month];
  if (lang === 'es') mName = monthNamesEs[month];

  const titlePrefix = lang === 'pt' ? 'Devocional de' : lang === 'es' ? 'Devocional de' : 'Devotional for';
  const fullTitle = `${titlePrefix} ${day} ${lang === 'en' ? 'of' : 'de'} ${mName} | Spurgeon`;

  const availableLangs = ['en'];
  try {
    const dataDir = path.join(process.cwd(), 'public', 'data');
    if (fs.existsSync(path.join(dataDir, 'morning-and-evening-pt.json'))) availableLangs.push('pt');
    if (fs.existsSync(path.join(dataDir, 'morning-and-evening-es.json'))) availableLangs.push('es');
  } catch (e) {}

  const languages = {};
  availableLangs.forEach(l => {
    languages[l] = `/${l}/devotional/${date}`;
  });

  return {
    title: fullTitle,
    description: dict.devotional?.pageSubtitle || 'Read the classic daily devotional by Charles Spurgeon.',
    keywords: ['Charles Spurgeon', 'Morning and Evening', 'devocional', 'devotional', mName, day.toString()],
    alternates: {
      canonical: `/${lang}/devotional/${date}`,
      languages: Object.keys(languages).length > 0 ? languages : undefined
    },
    openGraph: {
      title: fullTitle,
      description: dict.devotional?.pageSubtitle,
      images: [
        {
          url: 'https://spurgeon-tv.vercel.app/opengraph-image.png',
          width: 256,
          height: 256,
          alt: 'Spurgeon TV',
        }
      ],
    },
  };
}

export default async function DevotionalDayPage({ params }) {
  const { lang, date } = await params;
  const dict = await getDictionary(lang);

  const [mStr, dStr] = date.split('-');
  const month = parseInt(mStr, 10);
  const day = parseInt(dStr, 10);

  let devotionalData = [];
  try {
    const fileName = lang === 'en' ? 'morning-and-evening.json' : `morning-and-evening-${lang}.json`;
    const filePath = path.join(process.cwd(), 'public', 'data', fileName);
    
    if (fs.existsSync(filePath)) {
      devotionalData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    } else {
      const fallbackPath = path.join(process.cwd(), 'public', 'data', 'morning-and-evening.json');
      devotionalData = JSON.parse(fs.readFileSync(fallbackPath, 'utf-8'));
    }
  } catch (error) {
    console.error("Error loading devotional data:", error);
  }

  // Next.js 13+ hoists <link> tags returned in the component to the <head>!
  const prevDate = getPrevDateStr(month, day);
  const nextDate = getNextDateStr(month, day);

  const am = devotionalData.find((e) => e && e.date === `${month}-${day}` && e.time === 'am');
  const pm = devotionalData.find((e) => e && e.date === `${month}-${day}` && e.time === 'pm');

  return (
    <>
      <link rel="prev" href={`/${lang}/devotional/${prevDate}`} />
      <link rel="next" href={`/${lang}/devotional/${nextDate}`} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": `Spurgeon Morning and Evening - ${month}/${day}`,
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
            }
          })
        }}
      />
      <DevotionalDayClient
        lang={lang}
        dict={dict}
        dateStr={date}
        morningEntry={am || null}
        eveningEntry={pm || null}
      />
    </>
  );
}
