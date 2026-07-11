import fs from 'fs/promises';
import path from 'path';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

const SERMONS_DIR_EN = path.join(process.cwd(), 'chspurgeon-sermons-main');

function getSermonsDir(lang) {
  if (lang === 'es') return path.join(process.cwd(), 'chspurgeon-sermons-es');
  if (lang === 'pt') return path.join(process.cwd(), 'chspurgeon-sermons-pt');
  return SERMONS_DIR_EN;
}

// Helper to extract scripture reference from the blockquote lines at the top of a sermon.
// The format is typically:
//   > Verse text (line 3)
//   > Book chapter:verse (line 4)
function extractScripture(content) {
  const lines = content.split('\n');
  const scriptureLines = [];
  let inBlockquote = false;

  for (let i = 0; i < Math.min(lines.length, 12); i++) {
    const line = lines[i].trim();
    if (line.startsWith('>')) {
      inBlockquote = true;
      scriptureLines.push(line.replace(/^>\s*/, '').trim());
    } else if (inBlockquote && line === '') {
      // allow one blank line inside blockquote
      continue;
    } else if (inBlockquote) {
      break;
    }
  }

  if (scriptureLines.length === 0) return null;

  // The last non-empty line in the blockquote is usually the reference (e.g. "Malachi 3:6")
  const nonEmpty = scriptureLines.filter((l) => l.length > 0);
  if (nonEmpty.length === 0) return null;

  // Build a nice string: "verse text — Reference"
  if (nonEmpty.length >= 2) {
    return {
      verse: nonEmpty.slice(0, -1).join(' '),
      reference: nonEmpty[nonEmpty.length - 1],
    };
  }
  return { verse: nonEmpty[0], reference: null };
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
    return [];
  }
}

// Helper to get all sermons in a volume (with scripture metadata)
export async function getSermonsInVolume(volumeName, lang = 'en') {
  try {
    const defaultVolumePath = path.join(SERMONS_DIR_EN, volumeName);
    const localizedVolumePath = path.join(getSermonsDir(lang), volumeName);

    // Collect filenames from EN folder
    const enFilenames = new Set();
    try {
      const entries = await fs.readdir(defaultVolumePath, { withFileTypes: true });
      entries
        .filter((d) => d.isFile() && d.name.endsWith('.md'))
        .forEach((d) => enFilenames.add(d.name));
    } catch { /* volume may not exist in EN */ }

    // For non-EN languages, also collect filenames from localized folder
    const localizedFilenames = new Set();
    if (lang !== 'en') {
      try {
        const entries = await fs.readdir(localizedVolumePath, { withFileTypes: true });
        entries
          .filter((d) => d.isFile() && d.name.endsWith('.md'))
          .filter((d) => fs.stat(path.join(localizedVolumePath, d.name)).then(s => s.size > 0).catch(() => false))
          .forEach((d) => localizedFilenames.add(d.name));
      } catch { /* volume may not exist in localized dir */ }
    }

    // Merge: EN union localized
    const allFilenames = [...new Set([...enFilenames, ...localizedFilenames])];

    const sermons = await Promise.all(
      allFilenames.map(async (filename) => {
        // Determine which file to actually read for this lang
        let filePath = path.join(localizedVolumePath, filename);
        let isTranslated = true;
        try {
          const stat = await fs.stat(filePath);
          if (stat.size === 0) throw new Error('empty');
        } catch {
          filePath = path.join(defaultVolumePath, filename);
          isTranslated = lang === 'en';
        }

        // Check availability in each language
        const availableLangs = [];
        if (enFilenames.has(filename)) availableLangs.push('en');
        try {
          const esPath = path.join(getSermonsDir('es'), volumeName, filename);
          const stat = await fs.stat(esPath);
          if (stat.size > 0) availableLangs.push('es');
        } catch {}
        try {
          const ptPath = path.join(getSermonsDir('pt'), volumeName, filename);
          const stat = await fs.stat(ptPath);
          if (stat.size > 0) availableLangs.push('pt');
        } catch {}

        // Make sure 'en' is always first if present
        availableLangs.sort((a, b) => (a === 'en' ? -1 : b === 'en' ? 1 : 0));

        let content = '';
        try {
          content = await fs.readFile(filePath, 'utf-8');
        } catch { return null; }

        const firstLine = content.split('\n')[0];
        const title = firstLine.replace(/^#\s*/, '').trim();
        const scripture = extractScripture(content);
        return {
          filename,
          slug: filename.replace('.md', ''),
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
// We whitelist only what the renderer actually generates — no iframes, scripts, etc.
const SANITIZE_OPTIONS = {
  allowedTags: [
    'p', 'br', 'b', 'i', 'em', 'strong', 'u', 's', 'strike',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'ul', 'ol', 'li',
    'blockquote', 'pre', 'code',
    'a', 'hr',
  ],
  allowedAttributes: {
    a: ['href', 'title', 'target', 'rel'],
  },
  // Force all links to open safely
  transformTags: {
    a: sanitizeHtml.simpleTransform('a', { rel: 'noopener noreferrer', target: '_blank' }),
  },
};

// Helper to read a specific sermon
export async function getSermonContent(volumeName, sermonSlug, lang = 'en') {
  try {
    const defaultPath = path.join(SERMONS_DIR_EN, volumeName, `${sermonSlug}.md`);
    const localizedPath = path.join(getSermonsDir(lang), volumeName, `${sermonSlug}.md`);
    
    let filePath = localizedPath;
    let isTranslated = true;
    try {
      await fs.access(filePath);
    } catch {
      filePath = defaultPath;
      isTranslated = lang === 'en';
    }

    const content = await fs.readFile(filePath, 'utf-8');

    const firstLine = content.split('\n')[0];
    const title = firstLine.replace(/^#\s*/, '').trim();
    const scripture = extractScripture(content);

    const contentWithoutTitle = content.substring(firstLine.length).trim();

    // Strip the opening scripture blockquote so it isn't rendered twice.
    // The UI already displays it via the `reader-scripture` header block.
    const bodyLines = contentWithoutTitle.split('\n');
    let lineIdx = 0;
    let pastBlockquote = false;
    while (lineIdx < bodyLines.length) {
      const trimmed = bodyLines[lineIdx].trim();
      if (trimmed.startsWith('>')) {
        pastBlockquote = true;
        lineIdx++;
      } else if (pastBlockquote && trimmed === '') {
        // skip blank lines immediately following the blockquote
        lineIdx++;
      } else {
        break;
      }
    }
    const bodyContent = pastBlockquote
      ? bodyLines.slice(lineIdx).join('\n').trim()
      : contentWithoutTitle;

    const rawHtml = marked.parse(bodyContent);
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
  const currentIndex = sermons.findIndex((s) => s.slug === sermonSlug);

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
// Used only at build time to generate the search index for the client.
export async function getSearchIndex() {
  const volumes = await getVolumes();
  const index = [];

  for (const volume of volumes) {
    const sermons = await getSermonsInVolume(volume);
    const volumeNum = parseInt(volume.replace('volume-', ''), 10);
    for (const sermon of sermons) {
      index.push({
        title: sermon.title,
        slug: sermon.slug,
        volume,
        volumeNum,
        scripture: sermon.scripture,
      });
    }
  }

  return index;
}

