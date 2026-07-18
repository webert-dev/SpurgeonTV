import DictionaryClient from './DictionaryClient';
import { Suspense } from 'react';

export const metadata = {
  title: 'Dictionary | Spurgeon TV',
  description: 'Theological and Biblical Dictionary for studying Charles H. Spurgeon\'s sermons.',
};

export default async function DictionaryPage({ params }) {
  const { lang } = await params;

  return (
    <div style={{ padding: '0.5rem 1rem' }}>
      <Suspense fallback={<div>Loading Dictionary...</div>}>
        <DictionaryClient lang={lang} />
      </Suspense>
    </div>
  );
}
