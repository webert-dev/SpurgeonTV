import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';
import { linkifyBibleReferences } from './linkifyBible';

import { loadStaticJson } from './data-loader';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

function extractScripture(content) {
  const lines = content.split('\n');
  const scriptureLines = [];
  let inBlockquote = false;
  for (let i = 0; i < Math.min(lines.length, 15); i++) {
    const line = lines[i].trim();
    if (line.startsWith('>')) {
      inBlockquote = true;
      scriptureLines.push(line.replace(/^>\s*/, '').trim());
    } else if (inBlockquote && line === '') {
      continue;
    } else if (inBlockquote) {
      break;
    }
  }
  if (scriptureLines.length > 0) {
    const nonEmpty = scriptureLines.filter((l) => l.length > 0);
    if (nonEmpty.length >= 2) {
      return { verse: nonEmpty.slice(0, -1).join(' '), reference: nonEmpty[nonEmpty.length - 1] };
    }
    if (nonEmpty.length === 1) return { verse: nonEmpty[0], reference: null };
  }
  for (let i = 0; i < Math.min(lines.length, 25); i++) {
    const line = lines[i].trim();
    const m = line.match(/^["\u201C](.+?)["\u201D][^A-Za-z0-9]*(?:--\s*)?([1-9]?[A-Za-z][a-záéíóúüñ]+(?:\s+[A-Za-záéíóúüñ]+)*\s+\d+\s*[:\d,\s-]*)/);
    if (m) return { verse: m[1].trim(), reference: m[2].trim() };
  }
  return null;
}

function extractTitle(content) {
  return content.split('\n')[0].replace(/^#\s*/, '').trim();
}

function isBrokenTitle(title) {
  if (!title) return true;
  const m = title.match(/^(.+?)\s*\|\s*(.+)$/);
  if (m && m[2].trim().toLowerCase() === m[1].trim().toLowerCase()) return true;
  if (m && /El Púlpito|New Park Street|Tabernáculo|Sermón \d+$/i.test(m[2])) return true;
  return false;
}

export async function getVolumes(lang = 'en') {
  const searchIndexData = await loadStaticJson('search-index.json');
  const baseIndex = searchIndexData?.en || [];
  const localIndex = searchIndexData?.[lang] || [];
  const vols = new Set([...baseIndex.map(s => s.volume), ...localIndex.map(s => s.volume)]);
  return Array.from(vols).sort();
}

export async function getSermonsInVolume(volumeName, lang = 'en') {
  const searchIndexData = await loadStaticJson('search-index.json');
  const baseIndex = searchIndexData?.en || [];
  const enSermons = baseIndex.filter(s => s.volume === volumeName);
  
  const ptSermons = searchIndexData?.pt?.filter(s => s.volume === volumeName) || [];
  const esSermons = searchIndexData?.es?.filter(s => s.volume === volumeName) || [];
  
  const allIds = new Set([
    ...enSermons.map(s => s.slug),
    ...ptSermons.map(s => s.slug),
    ...esSermons.map(s => s.slug)
  ]);
  
  const validSermons = Array.from(allIds).map(slug => {
    const en = enSermons.find(s => s.slug === slug);
    const pt = ptSermons.find(s => s.slug === slug);
    const es = esSermons.find(s => s.slug === slug);
    
    let target = null;
    let isTranslated = false;
    
    if (lang === 'pt' && pt) { target = pt; isTranslated = true; }
    else if (lang === 'es' && es) { target = es; isTranslated = true; }
    else if (lang === 'en' && en) { target = en; isTranslated = true; }
    
    if (!target && en) target = en;
    if (!target) return null;
    
    const availableLangs = [];
    if (en) availableLangs.push('en');
    if (pt) availableLangs.push('pt');
    if (es) availableLangs.push('es');
    
    return {
      filename: `${slug}.md`,
      slug,
      title: target.title,
      scripture: target.scripture,
      isTranslated,
      availableLangs,
    };
  }).filter(Boolean);

  validSermons.sort((a, b) => {
    const numA = parseInt(a.slug.match(/\d+/)?.[0] || '0', 10);
    const numB = parseInt(b.slug.match(/\d+/)?.[0] || '0', 10);
    return numA - numB;
  });

  return validSermons;
}

const SANITIZE_OPTIONS = {
  allowedTags: [
    'p', 'br', 'b', 'i', 'em', 'strong', 'u', 's', 'strike',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'ul', 'ol', 'li',
    'blockquote', 'pre', 'code',
    'a', 'hr', 'span',
  ],
  allowedAttributes: {
    a: ['href', 'title', 'target', 'rel'],
    span: ['class', 'data-book', 'data-chapter', 'data-verse'],
  },
  transformTags: {
    a: sanitizeHtml.simpleTransform('a', { rel: 'noopener noreferrer', target: '_blank' }),
  },
};

export async function getSermonContent(volumeName, sermonSlug, lang = 'en') {
  try {
    const slug = sermonSlug.replace(/^sermon_/, 'sermon-');
    
    // Check available languages
    const searchIndexData = await loadStaticJson('search-index.json');
    const enExists = searchIndexData?.en?.some(s => s.volume === volumeName && s.slug === slug);
    const locExists = searchIndexData?.[lang]?.some(s => s.volume === volumeName && s.slug === slug);
    
    let fetchLang = 'en';
    let isTranslated = false;
    
    if (lang !== 'en' && locExists) {
      fetchLang = lang;
      isTranslated = true;
    } else if (lang === 'en' && enExists) {
      isTranslated = true;
    } else if (enExists) {
      fetchLang = 'en';
    } else {
      return null;
    }

    // Try fetching with hyphens, fallback to underscores for EN
    let content = null;
    const isCloudflare = !!process.env.CF_PAGES;

    const readSermon = async (lang, vol, slg) => {
      if (!isCloudflare) {
        try {
          const fs = eval('require("fs/promises")');
          const path = eval('require("path")');
          const fp = path.join(process.cwd(), 'public', 'data', 'sermons', lang, vol, slg + '.md');
          return await fs.readFile(fp, 'utf-8');
        } catch (e) {
          return null;
        }
      } else {
        const res = await fetch(`${SITE_URL}/data/sermons/${lang}/${vol}/${slg}.md`, { cache: 'no-store' });
        return res.ok ? await res.text() : null;
      }
    };

    content = await readSermon(fetchLang, volumeName, slug);
    if (!content && fetchLang === 'en') {
      content = await readSermon('en', volumeName, slug.replace('-', '_'));
    }
    
    if (!content) return null;

    let title = extractTitle(content);
    let scripture = extractScripture(content);

    // Fix broken title by fetching EN fallback
    if (isBrokenTitle(title) && fetchLang !== 'en' && enExists) {
      let enContent = await readSermon('en', volumeName, slug);
      if (!enContent) enContent = await readSermon('en', volumeName, slug.replace('-', '_'));
      
      if (enContent) {
        const enTitle = extractTitle(enContent);
        if (enTitle && !isBrokenTitle(enTitle)) title = enTitle;
        if (!scripture) scripture = extractScripture(enContent);
      }
    }

    const contentWithoutTitle = content.substring(content.split('\n')[0].length).trim();

    const bodyLines = contentWithoutTitle.split('\n');
    let lineIdx = 0;
    let pastBlockquote = false;
    while (lineIdx < bodyLines.length) {
      const trimmed = bodyLines[lineIdx].trim();
      if (trimmed.startsWith('>')) {
        pastBlockquote = true;
        lineIdx++;
      } else if (pastBlockquote && trimmed === '') {
        lineIdx++;
      } else {
        break;
      }
    }
    const bodyContent = pastBlockquote ? bodyLines.slice(lineIdx).join('\n').trim() : contentWithoutTitle;

    const rawHtml = marked.parse(linkifyBibleReferences(bodyContent));
    const htmlContent = sanitizeHtml(rawHtml, SANITIZE_OPTIONS);

    const isAutoTranslated = content.includes('<!-- auto-translated -->');

    return {
      title,
      scripture,
      content: htmlContent,
      isTranslated,
      isAutoTranslated,
    };
  } catch (error) {
    console.error(`Error reading sermon ${sermonSlug} in ${volumeName}:`, error);
    return null;
  }
}

export async function getSermonNeighbors(volumeName, sermonSlug, lang = 'en') {
  const sermons = await getSermonsInVolume(volumeName, lang);
  const slug = sermonSlug.replace(/^sermon_/, 'sermon-');
  const currentIndex = sermons.findIndex((s) => s.slug === slug);

  if (currentIndex === -1) return { prev: null, next: null };

  return {
    prev: currentIndex > 0
      ? { slug: sermons[currentIndex - 1].slug, title: sermons[currentIndex - 1].title }
      : null,
    next: currentIndex < sermons.length - 1
      ? { slug: sermons[currentIndex + 1].slug, title: sermons[currentIndex + 1].title }
      : null,
  };
}

export async function getSearchIndex(lang = 'en') {
  const searchIndexData = await loadStaticJson('search-index.json');
  return searchIndexData?.[lang] || searchIndexData?.en || [];
}

export async function getPaginatedSermons(lang = 'en', page = 1, limit = 20) {
  try {
    const searchIndexData = await loadStaticJson('search-index.json');
    const searchIndex = searchIndexData?.[lang] || searchIndexData?.en || [];

    const sorted = searchIndex.sort((a, b) => {
      const numA = parseInt(a.slug.match(/\d+/)?.[0] || '0', 10);
      const numB = parseInt(b.slug.match(/\d+/)?.[0] || '0', 10);
      return numA - numB;
    });

    const total = sorted.length;
    const totalPages = Math.ceil(total / limit);
    const offset = (page - 1) * limit;
    const paginatedSlugs = sorted.slice(offset, offset + limit);

    const sermons = await Promise.all(
      paginatedSlugs.map(async (item) => {
        const data = await getSermonContent(item.volume, item.slug, lang);
        if (!data) return { ...item, isTranslated: false };
        
        return {
          ...item,
          title: data.title,
          scripture: data.scripture,
          isTranslated: data.isTranslated,
        };
      })
    );

    return { sermons, total, totalPages, currentPage: page };
  } catch (error) {
    console.error('Error in getPaginatedSermons:', error);
    return { sermons: [], total: 0, totalPages: 0, currentPage: page };
  }
}
