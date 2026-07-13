import DictionaryClient from './DictionaryClient';

export const metadata = {
  title: 'Dictionary | Spurgeon TV',
  description: 'Theological and Biblical Dictionary for studying Charles H. Spurgeon\'s sermons.',
};

export default async function DictionaryPage({ params }) {
  const { lang } = await params;

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <DictionaryClient lang={lang} />
    </div>
  );
}
