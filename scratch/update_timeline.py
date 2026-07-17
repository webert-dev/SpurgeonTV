import re

file_path = "app/[lang]/about/page.js"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Add readMore to EN
content = content.replace(
    'quote: "Visit many good books, but live in the Bible.",',
    'quote: "Visit many good books, but live in the Bible.",\n    readMore: "Read related articles",\n    readMoreLess: "Hide articles",'
)
# Add readMore to PT
content = content.replace(
    'quote: "Visite muitos livros bons, mas viva na Bíblia.",',
    'quote: "Visite muitos livros bons, mas viva na Bíblia.",\n    readMore: "Ler artigos relacionados",\n    readMoreLess: "Ocultar artigos",'
)
# Add readMore to ES
content = content.replace(
    'quote: "Visita muchos libros buenos, pero vive en la Biblia.",',
    'quote: "Visita muchos libros buenos, pero vive en la Biblia.",\n    readMore: "Leer artículos relacionados",\n    readMoreLess: "Ocultar artículos",'
)

related_slugs_map = {
    '1834': "['biography/the-kelvedon-years']",
    '1835': "['biography/the-stambourne-influence']",
    '1850': "['biography/the-snowstorm-conversion']",
    '1851': "['biography/the-boy-preacher-of-the-fens']",
    '1852': "['biography/the-waterbeach-ministry']",
    '1854': "['biography/the-call-to-london']",
    '1856': "['biography/the-surrey-gardens-tragedy']",
    '1857': "['preacher/the-voice-of-spurgeon']",
    '1861': "['biography/the-metropolitan-tabernacle']",
    '1865': "['preacher/the-printed-page']",
    '1867': "['preacher/the-stockwell-orphanage']",
    '1887': "['controversies/the-downgrade-controversy-part-1', 'controversies/the-downgrade-controversy-part-2', 'controversies/the-downgrade-controversy-part-3']",
    '1892': "['biography/the-prince-goes-to-glory', 'biography/the-final-years', 'biography/the-mentone-retreats']"
}

# Now for each timeline entry, we need to inject relatedSlugs.
# We can find "{ year: '1834', title: '..." and inject relatedSlugs before the closing brace.
# But it's easier to just do a regex replace.
for year, slugs in related_slugs_map.items():
    # regex to find `{ year: 'YEAR', ..., }`
    pattern = r"(\{ year: '" + year + r"',.*?)(\s*\})"
    replacement = r"\1, relatedSlugs: " + slugs + r"\2"
    content = re.sub(pattern, replacement, content)

# Now we need to modify the UI rendering of the timeline.
ui_pattern = r"(\{\s*item\.quote && \(\s*<div className=\"timeline-quote-box\".*?\s*</cite>\s*</div>\s*\)\s*\})"
ui_replacement = r"""\1
                  {item.relatedSlugs && (
                    <details style={{ marginTop: '1rem' }} className="timeline-related-articles">
                      <summary style={{ cursor: 'pointer', color: 'var(--accent)', fontWeight: 'bold', fontSize: '0.9rem', listStyle: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>{t.readMore}</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.2s' }} className="summary-chevron">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </summary>
                      <ul style={{ marginTop: '0.75rem', paddingLeft: '1.2rem', listStyle: 'none' }}>
                        {item.relatedSlugs.map(slug => {
                          const article = allArticles.find(a => a.href === `/about/${slug}`);
                          if (!article) return null;
                          return (
                            <li key={slug} style={{ marginBottom: '0.5rem', position: 'relative' }}>
                              <span style={{ position: 'absolute', left: '-1rem', color: 'var(--accent)', fontSize: '0.8rem' }}>•</span>
                              <Link href={`/${lang}/about/${slug}`} style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.2s' }} className="article-hover-link">
                                {article.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </details>
                  )}"""

content = re.sub(ui_pattern, ui_replacement, content, flags=re.DOTALL)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("Updated successfully!")
