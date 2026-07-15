import Link from 'next/link';
import fs from 'fs/promises';
import path from 'path';

// Gerar metadata dinâmico
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { lang, category, slug } = resolvedParams;
  
  try {
    const filePath = path.join(process.cwd(), 'content', 'articles', category, slug, `${lang}.json`);
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    return {
      title: data.seoTitle || data.title,
      description: data.description,
      keywords: data.keywords,
    };
  } catch (error) {
    return {
      title: 'Article Not Found',
    };
  }
}

export default async function ArticlePage({ params }) {
  const resolvedParams = await params;
  const { lang, category, slug } = resolvedParams;
  
  let data = null;
  try {
    const filePath = path.join(process.cwd(), 'content', 'articles', category, slug, `${lang}.json`);
    const fileContents = await fs.readFile(filePath, 'utf8');
    data = JSON.parse(fileContents);
  } catch (error) {
    // Fallback to English if translation doesn't exist
    try {
      const fallbackPath = path.join(process.cwd(), 'content', 'articles', category, slug, 'en.json');
      const fileContents = await fs.readFile(fallbackPath, 'utf8');
      data = JSON.parse(fileContents);
    } catch (fallbackError) {
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
      
      <article className="sermon-content">
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {data.date} {data.readTime && `• ${data.readTime}`}
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
