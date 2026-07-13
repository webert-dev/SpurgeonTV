import fs from 'fs/promises';
import path from 'path';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';
import { linkifyBibleReferences } from './linkifyBible';

const SERMONS_DIR_EN = path.join(process.cwd(), 'chspurgeon-sermons-main');

function getSermonsDir(lang) {
  if (lang === 'es') return path.join(process.cwd(), 'chspurgeon-sermons-es');
  if (lang === 'pt') return path.join(process.cwd(), 'chspurgeon-sermons-pt');
  return SERMONS_DIR_EN;
}

// Extract the canonical sermon number from a filename.
// Handles both "sermon_427.md" (EN) and "sermon-427.md" (ES/PT).
function sermonIdFromFilename(filename) {
  const m = filename.match(/sermon[_-](.+)\.md$/i);
  return m ? m[1] : null;
}

// Build a canonical slug (always hyphen-separated), e.g. "sermon-427"
function canonicalSlug(id) {
  return `sermon-${id}`;
}

// ── Scripture extraction ──────────────────────────────────────────────────────
// Handles two formats:
//   1. Blockquote (EN format):
//      > Verse text
//      > Book chapter:verse
//   2. Quoted inline (ES/PT format):
//      "Verse text"  Book chapter:verse
//      "Verse text" -- Book chapter:verse
function extractScripture(content) {
  const lines = content.split('\n');

  // ── Format 1: blockquote ────────────────────────────────────────────────────
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
      return {
        verse: nonEmpty.slice(0, -1).join(' '),
        reference: nonEmpty[nonEmpty.length - 1],
      };
    }
    if (nonEmpty.length === 1) return { verse: nonEmpty[0], reference: null };
  }

  // ── Format 2: quoted inline ─────────────────────────────────────────────────
  // Look in the first 25 lines for patterns like:
  //   "Verse text."  Book 1:23
  //   "Verse text." -- Book 1:23
  for (let i = 0; i < Math.min(lines.length, 25); i++) {
    const line = lines[i].trim();
    // Match quoted text followed by optional separator and a Bible reference
    const m = line.match(
      /^["\u201C](.+?)["\u201D][^A-Za-z0-9]*(?:--\s*)?([1-9]?[A-Za-z][a-záéíóúüñ]+(?:\s+[A-Za-záéíóúüñ]+)*\s+\d+\s*[:\d,\s-]*)/
    );
    if (m) {
      return {
        verse: m[1].trim(),
        reference: m[2].trim(),
      };
    }
  }

  return null;
}

// ── Title extraction ──────────────────────────────────────────────────────────
// Returns the title from the H1 line of the file.
// For ES/PT files the scraper sometimes produces a broken title like:
//   "Sermón 427 | Sermón 427"  or  "Sermón 5 | El Púlpito De La Capilla…"
// In these cases we signal that the title is broken so the caller can fall back.
function extractTitle(content) {
  const firstLine = content.split('\n')[0];
  const raw = firstLine.replace(/^#\s*/, '').trim();
  return raw;
}

function isBrokenTitle(title) {
  // Broken patterns in ES/PT scraped files:
  // 1. "Sermón NNN | Sermón NNN"  — repeated number
  // 2. Long concatenated collection name "El Púlpito De La Capilla New Park Street..."
  if (!title) return true;
  // Pattern: "Sermón 427 | Sermón 427" — second part same as first
  const m = title.match(/^(.+?)\s*\|\s*(.+)$/);
  if (m && m[2].trim().toLowerCase() === m[1].trim().toLowerCase()) return true;
  // Second segment starts with collection name fragments
  if (m && /El Púlpito|New Park Street|Tabernáculo|Sermón \d+$/i.test(m[2])) return true;
  return false;
}

// Helper to get all volumes — merges EN and any localized-only volumes
export async function getVolumes(lang = 'en') {
  try {
    const readVolumesFrom = async (dir) => {
      try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        return entries
          .filter((d) => d.isDirectory() && d.name.startsWith('volume-'))
          .map((d) => d.name);
      } catch { return []; }
    };

    const enVolumes = await readVolumesFrom(SERMONS_DIR_EN);
    const localizedDir = getSermonsDir(lang);
    const localizedVolumes = lang !== 'en' ? await readVolumesFrom(localizedDir) : [];

    const allVolumes = [...new Set([...enVolumes, ...localizedVolumes])].sort();
    return allVolumes;
  } catch (error) {
    console.error('Error reading volumes directory:', error);
    return []
  }
}

// Helper to get all sermons in a volume (with scripture metadata)
export async function getSermonsInVolume(volumeName, lang = 'en') {
  try {
    const defaultVolumePath = path.join(SERMONS_DIR_EN, volumeName);
    const localizedVolumePath = path.join(getSermonsDir(lang), volumeName);

    // ── 1. Collect files from EN folder keyed by sermon ID ───────────────────
    // Map: sermonId → actual EN filename (may use underscores)
    const enById = new Map(); // id → filename
    try {
      const entries = await fs.readdir(defaultVolumePath, { withFileTypes: true });
      for (const d of entries) {
        if (!d.isFile() || !d.name.endsWith('.md')) continue;
        const id = sermonIdFromFilename(d.name);
        if (id) enById.set(id, d.name);
      }
    } catch { /* volume may not exist in EN */ }

    // ── 2. Collect files from localized folder keyed by sermon ID ────────────
    // Map: sermonId → actual localized filename (always hyphens)
    const localById = new Map(); // id → filename
    if (lang !== 'en') {
      try {
        const entries = await fs.readdir(localizedVolumePath, { withFileTypes: true });
        for (const d of entries) {
          if (!d.isFile() || !d.name.endsWith('.md')) continue;
          const id = sermonIdFromFilename(d.name);
          if (id) localById.set(id, d.name);
        }
      } catch { /* volume may not exist in localized dir */ }
    }

    // ── 3. Merge: all unique sermon IDs ──────────────────────────────────────
    const allIds = [...new Set([...enById.keys(), ...localById.keys()])];

    // ── 4. Build sermon records ───────────────────────────────────────────────
    const sermons = await Promise.all(
      allIds.map(async (id) => {
        const enFilename  = enById.get(id);
        const locFilename = localById.get(id);
        const slug = canonicalSlug(id);  // always "sermon-NNN"

        // Determine which file to read for content
        let filePath = null;
        let isTranslated = false;

        if (lang !== 'en' && locFilename) {
          const fp = path.join(localizedVolumePath, locFilename);
          try {
            const stat = await fs.stat(fp);
            if (stat.size > 0) { filePath = fp; isTranslated = true; }
          } catch {}
        }
        if (!filePath && enFilename) {
          filePath = path.join(defaultVolumePath, enFilename);
          isTranslated = lang === 'en';
        }
        if (!filePath) return null;

        // ── Determine available languages ────────────────────────────────────
        const availableLangs = [];
        if (enFilename) availableLangs.push('en');
        // Check ES
        try {
          const esDir = path.join(getSermonsDir('es'), volumeName);
          const esFiles = await fs.readdir(esDir);
          const esFile = esFiles.find((f) => sermonIdFromFilename(f) === id);
          if (esFile) {
            const stat = await fs.stat(path.join(esDir, esFile));
            if (stat.size > 0) availableLangs.push('es');
          }
        } catch {}
        // Check PT
        try {
          const ptDir = path.join(getSermonsDir('pt'), volumeName);
          const ptFiles = await fs.readdir(ptDir);
          const ptFile = ptFiles.find((f) => sermonIdFromFilename(f) === id);
          if (ptFile) {
            const stat = await fs.stat(path.join(getSermonsDir('pt'), volumeName, ptFile));
            if (stat.size > 0) availableLangs.push('pt');
          }
        } catch {}

        // ── Read content ─────────────────────────────────────────────────────
        let content = '';
        try { content = await fs.readFile(filePath, 'utf-8'); }
        catch { return null; }

        let title = extractTitle(content);
        let scripture = extractScripture(content);

        // ── Fix broken title by reading EN file ──────────────────────────────
        if (isBrokenTitle(title) && enFilename && filePath !== path.join(defaultVolumePath, enFilename)) {
          try {
            const enContent = await fs.readFile(path.join(defaultVolumePath, enFilename), 'utf-8');
            const enTitle = extractTitle(enContent);
            if (enTitle && !isBrokenTitle(enTitle)) title = enTitle;
            // Also get scripture from EN if ES didn't yield one
            if (!scripture) scripture = extractScripture(enContent);
          } catch {}
        }

        // If scripture still null, try EN fallback
        if (!scripture && enFilename && filePath !== path.join(defaultVolumePath, enFilename)) {
          try {
            const enContent = await fs.readFile(path.join(defaultVolumePath, enFilename), 'utf-8');
            scripture = extractScripture(enContent);
          } catch {}
        }

        return {
          filename: locFilename || enFilename,
          slug,
          title,
          scripture,
          isTranslated,
          availableLangs,
        };
      })
    );

    const validSermons = sermons.filter(Boolean);

    validSermons.sort((a, b) => {
      const numA = parseInt(a.slug.match(/\d+/)?.[0] || '0', 10);
      const numB = parseInt(b.slug.match(/\d+/)?.[0] || '0', 10);
      return numA - numB;
    });

    return validSermons;
  } catch (error) {
    console.error(`Error reading sermons in ${volumeName}:`, error);
    return [];
  }
}

// Allowed HTML tags and attributes produced by `marked` from sermon Markdown.
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

// Helper to read a specific sermon
export async function getSermonContent(volumeName, sermonSlug, lang = 'en') {
  try {
    // sermonSlug may be "sermon-427" (hyphens) or "sermon_427" (underscores)
    // Normalize to try both
    const id = sermonIdFromFilename(`${sermonSlug}.md`) || sermonSlug.replace(/^sermon[-_]/, '');

    const localizedDir = getSermonsDir(lang);
    const localizedVolumePath = path.join(localizedDir, volumeName);
    const defaultVolumePath = path.join(SERMONS_DIR_EN, volumeName);

    // Find the actual file in localized dir (may have hyphens)
    let localizedFile = null;
    try {
      const entries = await fs.readdir(localizedVolumePath);
      localizedFile = entries.find((f) => sermonIdFromFilename(f) === id) || null;
    } catch {}

    // Find the actual file in EN dir (may have underscores)
    let enFile = null;
    try {
      const entries = await fs.readdir(defaultVolumePath);
      enFile = entries.find((f) => sermonIdFromFilename(f) === id) || null;
    } catch {}

    let filePath = null;
    let isTranslated = false;

    if (lang !== 'en' && localizedFile) {
      const fp = path.join(localizedVolumePath, localizedFile);
      try {
        const stat = await fs.stat(fp);
        if (stat.size > 0) { filePath = fp; isTranslated = true; }
      } catch {}
    }
    if (!filePath && enFile) {
      filePath = path.join(defaultVolumePath, enFile);
      isTranslated = lang === 'en';
    }
    if (!filePath) return null;

    const content = await fs.readFile(filePath, 'utf-8');

    let title = extractTitle(content);
    let scripture = extractScripture(content);

    // Fix broken title
    if (isBrokenTitle(title) && enFile) {
      try {
        const enContent = await fs.readFile(path.join(defaultVolumePath, enFile), 'utf-8');
        const enTitle = extractTitle(enContent);
        if (enTitle && !isBrokenTitle(enTitle)) title = enTitle;
        if (!scripture) scripture = extractScripture(enContent);
      } catch {}
    }

    const contentWithoutTitle = content.substring(content.split('\n')[0].length).trim();

    // Strip the opening scripture blockquote so it isn't rendered twice.
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
    const bodyContent = pastBlockquote
      ? bodyLines.slice(lineIdx).join('\n').trim()
      : contentWithoutTitle;

    const rawHtml = marked.parse(linkifyBibleReferences(bodyContent));
    const htmlContent = sanitizeHtml(rawHtml, SANITIZE_OPTIONS);

    return {
      title,
      scripture,
      content: htmlContent,
      isTranslated,
    };
  } catch (error) {
    console.error(`Error reading sermon ${sermonSlug} in ${volumeName}:`, error);
    return null;
  }
}

// Returns the previous and next sermon slugs/titles within a volume for navigation.
export async function getSermonNeighbors(volumeName, sermonSlug, lang = 'en') {
  const sermons = await getSermonsInVolume(volumeName, lang);
  const id = sermonIdFromFilename(`${sermonSlug}.md`) || sermonSlug.replace(/^sermon[-_]/, '');
  const currentIndex = sermons.findIndex((s) => s.slug === canonicalSlug(id));

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

// Build a flat search index: [{title, slug, volume, volumeNum, scripture}]
export async function getSearchIndex() {
  const volumes = await getVolumes();
  const index = [];

  for (const volume of volumes) {
    const sermons = await getSermonsInVolume(volume);
    const volumeNum = parseInt(volume.replace('volume-', ''), 10);
    const year = 1854 + volumeNum;
    for (const sermon of sermons) {
      index.push({
        title: sermon.title,
        slug: sermon.slug,
        volume,
        volumeNum,
        year,
        scripture: sermon.scripture,
      });
    }
  }

  return index;
}

// Fetch all sermons sorted by sequential id, paginated
export async function getPaginatedSermons(lang = 'en', page = 1, limit = 20) {
  try {
    const indexPath = path.join(process.cwd(), 'lib', 'search-index.json');
    const indexRaw = await fs.readFile(indexPath, 'utf-8');
    const searchIndex = JSON.parse(indexRaw);

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
