import { cache } from 'react';
import { marked } from 'marked';
import { linkifyBibleReferences } from './linkifyBible';

import { loadStaticJson, loadStaticText } from './data-loader';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://spurgeon.tv';

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
      if (scriptureLines.length >= 2) break;
      continue;
    } else if (inBlockquote) {
      break;
    }
  }
  if (scriptureLines.length > 0) {
    const nonEmpty = scriptureLines.filter((l) => l.length > 0);
    if (nonEmpty.length >= 2) {
      const v = nonEmpty.slice(0, -1).join(' ').replace(/^["'“”«»]+|["'“”«»]+$/g, '').trim();
      const r = nonEmpty[nonEmpty.length - 1];
      if (!/^por\s+charles|^serm[oó]n\s+predicado/i.test(v)) {
        return { verse: v, reference: r };
      }
    } else if (nonEmpty.length === 1) {
      const v = nonEmpty[0].replace(/^["'“”«»]+|["'“”«»]+$/g, '').trim();
      if (!/^por\s+charles|^serm[oó]n\s+predicado/i.test(v)) {
        return { verse: v, reference: null };
      }
    }
  }
  for (let i = 0; i < Math.min(lines.length, 25); i++) {
    const line = lines[i].trim();
    const m = line.match(/^["\u201C](.+?)["\u201D][^A-Za-z0-9]*(?:--\s*)?([1-9]?[A-Za-z][a-záéíóúüñ]+(?:\s+[A-Za-záéíóúüñ]+)*\s+\d+\s*[:\d,\s-]*)/);
    if (m) return { verse: m[1].trim(), reference: m[2].trim() };
  }
  return null;
}

function extractTitle(content) {
  let title = content.split('\n')[0].replace(/^#\s*/, '').trim();
  return title
    .replace(/&mdash;|&#8212;|&mmdash;/g, '—')
    .replace(/&ndash;|&#8211;/g, '–')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;|&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&hellip;|&#8230;/g, '…')
    .replace(/&nbsp;/g, ' ')
    .trim();
}

function isBrokenTitle(title) {
  if (!title) return true;
  const m = title.match(/^(.+?)\s*\|\s*(.+)$/);
  if (m && m[2].trim().toLowerCase() === m[1].trim().toLowerCase()) return true;
  if (m && /El Púlpito|New Park Street|Tabernáculo|Sermón \d+$/i.test(m[2])) return true;
  return false;
}

export const getVolumes = cache(async function getVolumes(lang = 'en') {
  const searchIndexData = await loadStaticJson('search-index.json');
  const baseIndex = searchIndexData?.en || [];
  const localIndex = searchIndexData?.[lang] || [];
  const vols = new Set([...baseIndex.map(s => s.volume), ...localIndex.map(s => s.volume)]);
  return Array.from(vols).sort();
});

export const getSermonsInVolume = cache(async function getSermonsInVolume(volumeName, lang = 'en') {
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
});

export const getSermonContent = cache(async function getSermonContent(volumeName, sermonSlug, lang = 'en') {
  try {
    const canonicalSlug = sermonSlug.replace(/^sermon_/, 'sermon-');
    const normalizeNum = (s) => (s ? s.replace(/^sermon[-_]/, '') : '');
    const targetNum = normalizeNum(sermonSlug);
    
    // Check available languages
    const searchIndexData = await loadStaticJson('search-index.json');
    const matchesTarget = (s) => s.volume === volumeName && (s.slug === canonicalSlug || normalizeNum(s.slug) === targetNum);
    const enExists = searchIndexData?.en?.some(matchesTarget);
    const locExists = searchIndexData?.[lang]?.some(matchesTarget);
    
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

    const readSermon = async (l, vol, slg) => {
      const folder = `data/sermons/${l}/${vol}`;
      let text = await loadStaticText(`${slg}.md`, folder);
      if (!text) {
        // Fallback for underscore if file is named with underscore
        const altSlug = slg.includes('-') ? slg.replace('-', '_') : slg.replace('_', '-');
        text = await loadStaticText(`${altSlug}.md`, folder);
      }
      return text;
    };

    let content = await readSermon(fetchLang, volumeName, canonicalSlug);
    
    if (!content) return null;

    let title = extractTitle(content);
    let scripture = extractScripture(content);

    // Fix broken title by fetching EN fallback
    if (isBrokenTitle(title) && fetchLang !== 'en' && enExists) {
      let enContent = await readSermon('en', volumeName, canonicalSlug);
      
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

    const htmlContent = marked.parse(linkifyBibleReferences(bodyContent));

    const isAutoTranslated = content.includes('<!-- auto-translated -->') || 
                             content.includes('<!-- auto-translated-bing -->') || 
                             content.includes('<!-- auto-translated-google -->');

    return {
      title,
      scripture,
      content: htmlContent,
      isTranslated,
      isAutoTranslated,
      requiresClientTranslation: !isTranslated,
    };
  } catch (error) {
    console.error(`Error reading sermon ${sermonSlug} in ${volumeName}:`, error);
    return null;
  }
});

export const getSermonNeighbors = cache(async function getSermonNeighbors(volumeName, sermonSlug, lang = 'en') {
  const sermons = await getSermonsInVolume(volumeName, lang);
  const canonicalSlug = sermonSlug.replace(/^sermon_/, 'sermon-');
  const targetNum = sermonSlug.replace(/^sermon[-_]/, '');
  const currentIndex = sermons.findIndex((s) => s.slug === canonicalSlug || s.slug.replace(/^sermon[-_]/, '') === targetNum);

  if (currentIndex === -1) return { prev: null, next: null };

  return {
    prev: currentIndex > 0
      ? { slug: sermons[currentIndex - 1].slug, title: sermons[currentIndex - 1].title }
      : null,
    next: currentIndex < sermons.length - 1
      ? { slug: sermons[currentIndex + 1].slug, title: sermons[currentIndex + 1].title }
      : null,
  };
});

export const getSearchIndex = cache(async function getSearchIndex(lang = 'en') {
  const searchIndexData = await loadStaticJson('search-index.json');
  return searchIndexData?.[lang] || searchIndexData?.en || [];
});

export const getPaginatedSermons = cache(async function getPaginatedSermons(lang = 'en', page = 1, limit = 9) {
  try {
    const filename = `page-${page}.json`;
    const folder = `data/sermons-pages/${lang}`;
    const data = await loadStaticJson(filename, folder);
    
    if (data) {
      return data;
    }
    return { sermons: [], total: 0, totalPages: 0, currentPage: page };
  } catch (error) {
    console.error('Error in getPaginatedSermons:', error);
    return { sermons: [], total: 0, totalPages: 0, currentPage: page };
  }
});
