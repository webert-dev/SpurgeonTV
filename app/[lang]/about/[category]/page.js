import Link from 'next/link';

export const revalidate = false;
import path from 'path';
import { promises as fs } from 'fs';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [
    { category: 'biography' },
    { category: 'controversies' },
    { category: 'preacher' },
    { category: 'theology' },
  ];
}

const categoryTitles = {
  biography: { en: 'Full Biography', pt: 'Biografia Completa', es: 'Biografía Completa' },
  controversies: { en: 'Controversies', pt: 'Controvérsias', es: 'Controversias' },
  preacher: { en: 'The Preacher & His Work', pt: 'O Pregador e Sua Obra', es: 'El Predicador y Su Obra' },
  theology: { en: 'His Theology', pt: 'Sua Teologia', es: 'Su Teología' }
};

export default async function CategoryPage({ params: { lang, category } }) {
  if (!categoryTitles[category]) {
    notFound();
  }

  const title = categoryTitles[category][lang] || categoryTitles[category]['en'];
  const backText = lang === 'pt' ? '← Voltar para Sobre Spurgeon' : (lang === 'es' ? '← Volver a Sobre Spurgeon' : '← Back to About Spurgeon');

  const contentDir = path.join(process.cwd(), 'content', 'articles', category);
  let slugs = [];
  try {
    const dirents = await fs.readdir(contentDir, { withFileTypes: true });
    slugs = dirents.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
  } catch (err) {
    console.error(`Could not read directory: ${contentDir}`, err);
    slugs = [];
  }

  const articles = [];
  for (const slug of slugs) {
    const jsonPathPt = path.join(contentDir, slug, 'pt.json');
    const jsonPathEs = path.join(contentDir, slug, 'es.json');
    const jsonPathEn = path.join(contentDir, slug, 'en.json');
    
    let targetPath = jsonPathEn;
    if (lang === 'pt') targetPath = jsonPathPt;
    else if (lang === 'es') targetPath = jsonPathEs;

    try {
      let content = '';
      try {
        content = await fs.readFile(targetPath, 'utf8');
      } catch (err) {
        // Fallback to EN if translation doesn't exist
        content = await fs.readFile(jsonPathEn, 'utf8');
      }
      const data = JSON.parse(content);
      articles.push({ slug, ...data });
    } catch (err) {
      console.error(`Error loading article JSON for ${slug}:`, err);
    }
  }

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
