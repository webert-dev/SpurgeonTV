import Link from 'next/link';
import { getDictionary } from '../../../lib/dictionaries';
import fs from 'fs';
import path from 'path';
import DevotionalClient from './DevotionalClient';


export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.devotional?.pageTitle || 'Spurgeon Morning and Evening Devotional',
    description: dict.devotional?.pageSubtitle || 'Read the classic daily devotional by Charles Spurgeon, with morning and evening readings.',
    keywords: ['Charles Spurgeon', 'Morning and Evening', 'devocional', 'devotional', 'dia e noite', 'Spurgeon devotional'],
    openGraph: {
      title: dict.devotional?.pageTitle || 'Spurgeon Morning and Evening Devotional',
      description: dict.devotional?.pageSubtitle,
    },
  };
}

export default async function DevotionalPage({ params }) {
  const { lang = 'en' } = await params;
  const dict = await getDictionary(lang);

  const dataPath = path.join(process.cwd(), 'public', 'data', 'morning-and-evening.json');
  const devotionalData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

  return (
    <DevotionalClient
      lang={lang}
      dict={dict}
      devotionalData={devotionalData}
    />
  );
}
