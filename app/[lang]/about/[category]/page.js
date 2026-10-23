import Link from 'next/link';
import { notFound } from 'next/navigation';
import { loadStaticJson } from '../../../../lib/data-loader';
import { getAllArticles } from '../../../../lib/articles';

export const revalidate = false;
export const dynamic = 'auto';
export const dynamicParams = true;

const categoryTitles = {
  biography: { en: 'Full Biography', pt: 'Biografia Completa', es: 'Biografía Completa' },
  controversies: { en: 'Controversies', pt: 'Controvérsias', es: 'Controversias' },
  preacher: { en: 'The Preacher & His Work', pt: 'O Pregador e Sua Obra', es: 'El Predicador y Su Obra' },
  theology: { en: 'His Theology', pt: 'Sua Teologia', es: 'Su Teología' },
  extra: { en: 'Extra', pt: 'Extra', es: 'Extra' }
};

const categoryDescriptions = {
  biography: {
    en: 'Chronological exploration of the life, ministry, and historic milestones of Charles Haddon Spurgeon.',
    pt: 'Exploração cronológica da vida, ministério e marcos históricos de Charles Haddon Spurgeon.',
    es: 'Exploración cronológica de la vida, ministerio e hitos históricos de Charles Haddon Spurgeon.'
  },
  controversies: {
    en: 'In-depth historical analysis of the doctrinal battles, theological conflicts, and the Downgrade Controversy.',
    pt: 'Análise histórica aprofundada das batalhas doutrinárias, conflitos teológicos e da Controvérsia do Declínio.',
    es: 'Análisis histórico en profundidad de las batallas doctrinales, conflictos teológicos y la Controversia del Declive.'
  },
  preacher: {
    en: "Explore Charles Spurgeon's homiletics, the establishment of the Pastors' College, and his profound influence on generations of ministers.",
    pt: "Explore a homilética de Charles Spurgeon, a criação do Pastors' College e sua profunda influência sobre gerações de ministros.",
    es: "Explore la homilética de Charles Spurgeon, el establecimiento del Pastors' College y su profunda influencia en generaciones de ministros."
  },
  theology: {
    en: "Spurgeon's Reformed Baptist convictions, defence of the Doctrines of Grace, and Christ-centred theology.",
    pt: "As convicções batistas reformadas de Spurgeon, a defesa das Doutrinas da Graça e sua teologia cristocêntrica.",
    es: "Las convicciones bautistas reformadas de Spurgeon, la defensa de las Doctrinas de la Gracia y su teología cristocéntrica."
  },
  extra: {
    en: "Special articles, historical tributes, missionary biographies, and complementary perspectives on Spurgeon's legacy.",
    pt: "Artigos especiais, homenagens históricas, biografias missionárias e perspectivas complementares sobre o legado de Spurgeon.",
    es: "Artículos especiales, homenajes históricos, biografías misioneras y perspectivas complementarias sobre el legado de Spurgeon."
  }
};

export async function generateStaticParams() {
  const langs = ['en', 'es', 'pt'];
  const categories = ['biography', 'controversies', 'preacher', 'theology', 'extra'];
  const params = [];
  
  for (const lang of langs) {
    for (const category of categories) {
      params.push({ lang, category });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { lang, category } = resolvedParams;
  if (!categoryTitles[category]) return { title: 'Category Not Found' };

  const title = categoryTitles[category][lang] || categoryTitles[category]['en'];
  const desc = (categoryDescriptions[category] && (categoryDescriptions[category][lang] || categoryDescriptions[category]['en'])) || '';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spurgeon.tv';

  return {
    title: `${title} | Spurgeon TV`,
    description: desc,
    alternates: {
      canonical: `${siteUrl}/${lang}/about/${category}/`,
    },
    openGraph: {
      title: `${title} | Spurgeon TV`,
      description: desc,
      images: [{ url: `${siteUrl}/icon.png` }],
    },
  };
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;
  const { lang, category } = resolvedParams;

  if (!categoryTitles[category]) {
    notFound();
  }

  const title = categoryTitles[category][lang] || categoryTitles[category]['en'];
  const description = categoryDescriptions[category] ? (categoryDescriptions[category][lang] || categoryDescriptions[category]['en']) : '';
  const backText = lang === 'pt' ? '← Voltar para Sobre Spurgeon' : (lang === 'es' ? '← Volver a Sobre Spurgeon' : '← Back to About Spurgeon');

  const langArticles = await getAllArticles(lang);
  
  // Filter by category
  let articles = langArticles.filter(a => a.category === category);
  
  // Map href to slug
  articles = articles.map(a => ({
    ...a,
    slug: a.href.split('/').pop()
  }));

  // Sort by date (using sortDate timestamp if available)
  articles.sort((a, b) => {
    if (a.sortDate && b.sortDate) return b.sortDate - a.sortDate;
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (!isNaN(dateA) && !isNaN(dateB)) return dateB - dateA;
    return 0;
  });

  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh' }}>
      <Link href={`/${lang}/about`} style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        {backText}
      </Link>
      <h1 className="title-gold" style={{ fontSize: '3rem', marginBottom: description ? '0.75rem' : '3rem' }}>
        {title}
      </h1>
      {description && (
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '800px', marginBottom: '3rem', lineHeight: '1.6' }}>
          {description}
        </p>
      )}
      
      <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px' }}>
        {articles.map((article) => (
          <Link key={article.slug} href={`/${lang}/about/${category}/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <article style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', transition: 'all 0.2s', cursor: 'pointer' }} className="article-card">
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {article.date} {article.readTime && `• ${article.readTime}`}
              </div>
              <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
                {article.title}
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {article.desc || article.description}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
