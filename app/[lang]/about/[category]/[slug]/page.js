import Link from 'next/link';
import path from 'path';
import CitationBox from '../../../../components/CitationBox';
import ShareButton from '../../../../components/ShareButton';
import { loadStaticJson } from '../../../../../lib/data-loader';

export const revalidate = false;
export const dynamic = 'auto';
export const dynamicParams = true;

export function generateStaticParams() {
  const langs = ['en', 'es', 'pt'];
  const params = [];
  
  // Use require inside the function so it doesn't break Edge runtime / Turbopack
  const fsSync = typeof require !== 'undefined' ? require('fs') : null;
  if (!fsSync) return [];

  const filePath = path.join(process.cwd(), 'lib', 'articles-index.json');
  if (!fsSync.existsSync(filePath)) return [];
  const fileContents = fsSync.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);

  for (const lang of langs) {
    if (data[lang]) {
      for (const article of data[lang]) {
        // href is like "/about/category/slug"
        const parts = article.href.split('/');
        if (parts.length >= 4) {
          const category = parts[2];
          const slug = parts[3];
          params.push({ lang, category, slug });
        }
      }
    }
  }
  
  return params;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { lang, category, slug } = resolvedParams;
  
  try {
    const folder = `data/articles/${category}/${slug}`;
    const data = await loadStaticJson(`${lang}.json`, folder) || await loadStaticJson(`en.json`, folder);
    
    if (data) {
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spurgeon.tv';
      return {
        title: data.seoTitle || data.title,
        description: data.description,
        keywords: data.keywords,
        alternates: {
          canonical: `${siteUrl}/${lang}/about/${category}/${slug}/`,
        },
      };
    }
  } catch (error) {}
  
  return { title: 'Article Not Found' };
}

export default async function ArticlePage({ params }) {
  const resolvedParams = await params;
  const { lang, category, slug } = resolvedParams;
  
  let data = null;
  const filename = `${lang}.json`;
  const folder = `data/articles/${category}/${slug}`;
  data = await loadStaticJson(filename, folder);

  if (!data) {
    // Fallback to English if translation doesn't exist
    const fallbackFilename = `en.json`;
    data = await loadStaticJson(fallbackFilename, folder);
    
    if (!data) {
      return (
        <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2>Article not found</h2>
          <Link href={`/${lang}/about`} style={{ color: 'var(--accent)', textDecoration: 'none' }}>
            &larr; Back to About
          </Link>
        </div>
      );
    }
  }

  // Traduções para UI da página
  const ui = {
    pt: {
      back: 'Voltar',
      biblio: 'Bibliografia e Fontes',
      tags: 'Tags do Artigo',
      prev: 'Artigo Anterior',
      next: 'Próximo Artigo'
    },
    en: {
      back: 'Back',
      biblio: 'Bibliography & Sources',
      tags: 'Article Tags',
      prev: 'Previous Article',
      next: 'Next Article'
    },
    es: {
      back: 'Volver',
      biblio: 'Bibliografía y Fuentes',
      tags: 'Etiquetas del Artículo',
      prev: 'Artículo Anterior',
      next: 'Siguiente Artículo'
    }
  };
  
  const currentUi = ui[lang] || ui.en;

  return (
    <div className="container" style={{ padding: '4rem 2rem', minHeight: '80vh', maxWidth: '800px', margin: '0 auto' }}>
      <Link href={`/${lang}/about/${category}`} style={{ color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; {currentUi.back}
      </Link>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": data.title,
            "image": "https://spurgeon-tv.vercel.app/icon.png",
            "author": {
              "@type": "Organization",
              "name": "Spurgeon TV"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Spurgeon TV",
              "logo": {
                "@type": "ImageObject",
                "url": "https://spurgeon-tv.vercel.app/icon.png"
              }
            },
            "description": data.description
          })
        }}
      />

      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {data.date} {data.readTime && `• ${data.readTime}`}
            </div>
            <ShareButton 
              title={data.title}
              text={lang === 'pt' ? 'Leia este artigo no Spurgeon.tv' : lang === 'es' ? 'Lee este artículo en Spurgeon.tv' : 'Read this article on Spurgeon.tv'}
            />
          </div>
          <h1 className="title-gold" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            {data.title}
          </h1>
        </header>

        <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-primary)', textAlign: 'justify' }}>
          
          {data.content && data.content.map((block, index) => {
            if (block.type === 'h3') {
              return (
                <h3 key={index} style={{ color: 'var(--accent)', marginTop: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }} dangerouslySetInnerHTML={{ __html: block.text }} />
              );
            }
            if (block.type === 'p') {
              return (
                <p key={index} style={{ marginBottom: '1.5rem' }} dangerouslySetInnerHTML={{ __html: block.text }} />
              );
            }
            return null;
          })}

          {data.bibliography && data.bibliography.length > 0 && (
            <>
              <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '3rem 0' }} />
              
              <details className="sermon-tags-details" style={{ marginBottom: '1.5rem' }}>
                <summary className="sermon-tags-summary" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                  <span>{currentUi.biblio}</span>
                  <span className="sermon-tags-icon">▼</span>
                </summary>
                <div className="sermon-tags-content" style={{ marginTop: '1rem' }}>
                  <ol style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: '1.6' }}>
                    {data.bibliography.map((item, index) => (
                      <li key={index} style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ol>
                </div>
              </details>
            </>
          )}

          {data.tags && data.tags.length > 0 && (
            <details className="sermon-tags-details" style={{ marginBottom: '2rem' }}>
              <summary className="sermon-tags-summary" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                <span>{currentUi.tags}</span>
                <span className="sermon-tags-icon">▼</span>
              </summary>
              <div className="sermon-tags-content" style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {data.tags.map((tag) => (
                  <span key={tag} className="sermon-tag" style={{ background: 'var(--surface-hover)', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.85rem', border: '1px solid var(--border)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </details>
          )}

          <div style={{ marginTop: '3rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
            <ShareButton 
              className="dev-share-large"
              title={data.title}
              text={lang === 'pt' ? 'Leia este artigo no Spurgeon.tv' : lang === 'es' ? 'Lee este artículo en Spurgeon.tv' : 'Read this article on Spurgeon.tv'}
            />
          </div>

          {/* CITATION */}
          <CitationBox
            type="article"
            lang={lang}
            url={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.spurgeon.tv'}/${lang}/about/${category}/${slug}`}
            title={data.title}
            date={data.date ? data.date.split('/').pop() || data.date : undefined}
          />

          {/* PAGINATION */}
          {(data.prev?.title || data.next?.title) && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
              {data.prev?.title ? (
                <Link href={`/${lang}/about/${data.prev.category}/${data.prev.slug}`} style={{ textDecoration: 'none', flex: 1 }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>&larr; {currentUi.prev}</span>
                  <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }} dangerouslySetInnerHTML={{ __html: data.prev.title }} />
                </Link>
              ) : <div style={{ flex: 1 }}></div>}
              
              {data.next?.title ? (
                <Link href={`/${lang}/about/${data.next.category}/${data.next.slug}`} style={{ textDecoration: 'none', textAlign: 'right', flex: 1 }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '0.3rem' }}>{currentUi.next} &rarr;</span>
                  <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 'bold' }} dangerouslySetInnerHTML={{ __html: data.next.title }} />
                </Link>
              ) : <div style={{ flex: 1 }}></div>}
            </div>
          )}

        </div>
      </article>
    </div>
  );
}
