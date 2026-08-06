import Link from 'next/link';

export const revalidate = false;
import path from 'path';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export async function generateStaticParams() {
  const langs = ['en', 'es', 'pt'];
  const categories = ['biography', 'controversies', 'preacher', 'theology'];
  const params = [];
  
  for (const lang of langs) {
    for (const category of categories) {
      params.push({ lang, category });
    }
  }
  
  return params;
}

const categoryTitles = {
  biography: { en: 'Full Biography', pt: 'Biografia Completa', es: 'Biografía Completa' },
  controversies: { en: 'Controversies', pt: 'Controvérsias', es: 'Controversias' },
  preacher: { en: 'The Preacher & His Work', pt: 'O Pregador e Sua Obra', es: 'El Predicador y Su Obra' },
  theology: { en: 'His Theology', pt: 'Sua Teologia', es: 'Su Teología' }
};

import { loadStaticJson } from '../../../../lib/data-loader';

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;
  const { lang, category } = resolvedParams;

  if (!categoryTitles[category]) {
    notFound();
  }

  const title = categoryTitles[category][lang] || categoryTitles[category]['en'];
  const backText = lang === 'pt' ? '← Voltar para Sobre Spurgeon' : (lang === 'es' ? '← Volver a Sobre Spurgeon' : '← Back to About Spurgeon');

  const allArticles = await loadStaticJson('articles-index.json') || {};
  let langArticles = allArticles[lang] || allArticles['en'] || [];
  
  // Filter by category
  let articles = langArticles.filter(a => a.category === category);
  
  // Map href to slug to maintain compatibility with the rest of the page
  articles = articles.map(a => {
    return {
      ...a,
      slug: a.href.split('/').pop()
    };
  });

  // Sort by date or just keep order. Currently we parse the date loosely or reverse.
  // The english JSONs have format "September 21, 2025"
  articles.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (!isNaN(dateA) && !isNaN(dateB)) return dateB - dateA;
    return 0; // fallback
  });

  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh' }}>
      <Link href={`/${lang}/about`} style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        {backText}
      </Link>
      <h1 className="title-gold" style={{ fontSize: '3rem', marginBottom: '3rem' }}>{title}</h1>
      
      <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px' }}>
        {articles.map((article, i) => (
          <Link key={article.slug} href={`/${lang}/about/${category}/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {article.date} • {article.readTime}
              </div>
              <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
                {article.title}
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {article.description}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
