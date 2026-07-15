import fs from 'fs/promises';
import path from 'path';
import { translate } from '@vitalets/google-translate-api';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, '..');
const articlesDir = path.join(baseDir, 'app', '[lang]', 'about');
const outputBase = path.join(baseDir, 'content', 'articles');

async function translateText(text, target = 'pt') {
    if (!text || !text.trim()) return text;
    try {
        await new Promise(res => setTimeout(res, 300)); // sleep to avoid rate limits
        const { text: translated } = await translate(text, { to: target });
        return translated;
    } catch (e) {
        console.error(`Translation error: ${e.message}`);
        return text; // fallback
    }
}

function extractContent(content) {
    const data = {
        title: "",
        seoTitle: "",
        description: "",
        keywords: [],
        date: "",
        readTime: "",
        content: [],
        bibliography: [],
        tags: [],
        prev: { title: "", slug: "", category: "" },
        next: { title: "", slug: "", category: "" }
    };
    
    const metaMatch = content.match(/export const metadata = \{([\s\S]*?)\};/);
    if (metaMatch) {
        const metaStr = metaMatch[1];
        const tMatch = metaStr.match(/title:\s*["'](.*?)["']/);
        if (tMatch) data.seoTitle = tMatch[1];
        const dMatch = metaStr.match(/description:\s*["'](.*?)["']/);
        if (dMatch) data.description = dMatch[1];
        const kMatch = metaStr.match(/keywords:\s*\[(.*?)\]/);
        if (kMatch) {
            data.keywords = kMatch[1].replace(/["']/g, '').split(',').map(s => s.trim());
        }
    }
    
    const headerMatch = content.match(/<header[^>]*>([\s\S]*?)<\/header>/);
    if (headerMatch) {
        const h = headerMatch[1];
        const infoMatch = h.match(/<div[^>]*>([\s\S]*?)<\/div>/);
        if (infoMatch) {
            const parts = infoMatch[1].trim().split('•');
            if (parts.length >= 2) {
                data.date = parts[0].trim();
                data.readTime = parts[1].trim();
            }
        }
        const tMatch = h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
        if (tMatch) data.title = tMatch[1].trim();
    }
    
    let mainSection = "";
    let startIdx = content.indexOf('</header>');
    let endIdx = content.indexOf('<hr');
    if (endIdx === -1) endIdx = content.indexOf('{/* BIBLIOGRAPHY */}');
    if (endIdx === -1) endIdx = content.indexOf('{/* TAGS */}');
    
    if (startIdx !== -1 && endIdx !== -1) {
        mainSection = content.substring(startIdx, endIdx);
    }
    
    const blocksRe = /<(h3|p)[^>]*>([\s\S]*?)<\/\1>/g;
    let match;
    while ((match = blocksRe.exec(mainSection)) !== null) {
        let text = match[2].trim();
        // optionally clean inner JSX tags like <Link> here, but for now just trim
        // We will keep raw HTML inside so we can render it safely.
        data.content.push({ type: match[1], text });
    }
    
    const bibMatch = content.match(/{\/\* BIBLIOGRAPHY \*\/}[\s\S]*?<ol[^>]*>([\s\S]*?)<\/ol>/);
    if (bibMatch) {
        const liRe = /<li[^>]*>([\s\S]*?)<\/li>/g;
        let m;
        while ((m = liRe.exec(bibMatch[1])) !== null) {
            data.bibliography.push(m[1].trim());
        }
    }
    
    const tagsMatch = content.match(/{\[\s*([\s\S]*?)\s*\].map/);
    if (tagsMatch) {
        data.tags = tagsMatch[1].replace(/["']/g, '').split(',').map(s => s.trim()).filter(Boolean);
    }
    
    const pagMatch = content.match(/{\/\* PAGINATION \*\/}[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>\s*<\/article>/);
    if (pagMatch) {
        const linkRe = /<Link\s+href=["']\/en\/about\/([^"']+)["'][^>]*>([\s\S]*?)<\/Link>/g;
        let m;
        while ((m = linkRe.exec(pagMatch[1])) !== null) {
            const urlPath = m[1];
            const linkContent = m[2];
            const slug = urlPath.split('/').pop();
            const category = urlPath.split('/')[0];
            
            const tMatch = linkContent.match(/<span[^>]*font-serif[^>]*>([\s\S]*?)<\/span>/);
            const title = tMatch ? tMatch[1].trim() : slug;
            
            if (linkContent.includes('Previous') || linkContent.includes('Anterior') || linkContent.includes('&larr;')) {
                data.prev = { title, slug, category };
            } else if (linkContent.includes('Next') || linkContent.includes('Próximo') || linkContent.includes('&rarr;')) {
                data.next = { title, slug, category };
            }
        }
    }
    
    return data;
}

async function translateData(data) {
    const ptData = JSON.parse(JSON.stringify(data));
    console.log(`Translating: ${data.title}`);
    
    ptData.title = await translateText(data.title);
    ptData.seoTitle = await translateText(data.seoTitle);
    ptData.description = await translateText(data.description);
    ptData.date = await translateText(data.date);
    ptData.readTime = await translateText(data.readTime);
    
    for (let i = 0; i < data.content.length; i++) {
        ptData.content[i].text = await translateText(data.content[i].text);
    }
    
    for (let i = 0; i < data.bibliography.length; i++) {
        ptData.bibliography[i] = await translateText(data.bibliography[i]);
    }
    
    for (let i = 0; i < data.tags.length; i++) {
        ptData.tags[i] = await translateText(data.tags[i]);
    }
    
    if (data.prev.title) ptData.prev.title = await translateText(data.prev.title);
    if (data.next.title) ptData.next.title = await translateText(data.next.title);
    
    return ptData;
}

async function findFiles(dir, fileList = []) {
    const files = await fs.readdir(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = await fs.stat(filePath);
        if (stat.isDirectory()) {
            await findFiles(filePath, fileList);
        } else if (file === 'page.js') {
            fileList.push(filePath);
        }
    }
    return fileList;
}

async function main() {
    await fs.mkdir(outputBase, { recursive: true });
    
    let allFiles = await findFiles(articlesDir);
    // Ignore index pages (e.g. app/[lang]/about/biography/page.js)
    // Keep only deeper ones (e.g. app/[lang]/about/biography/slug/page.js)
    let files = allFiles.filter(f => {
        const relative = path.relative(articlesDir, f);
        const parts = relative.split(path.sep);
        return parts.length === 3; // category/slug/page.js
    });
    
    console.log(`Found ${files.length} articles to process.`);
    
    for (const file of files) {
        const parts = file.split(path.sep);
        const slug = parts[parts.length - 2];
        const category = parts[parts.length - 3];
        
        console.log(`Processing ${category}/${slug}`);
        const content = await fs.readFile(file, 'utf8');
        const dataEn = extractContent(content);
        
        const outDir = path.join(outputBase, category, slug);
        await fs.mkdir(outDir, { recursive: true });
        
        const enOut = path.join(outDir, 'en.json');
        await fs.writeFile(enOut, JSON.stringify(dataEn, null, 2), 'utf8');
        console.log(`Saved EN version for ${slug}`);
    }
}

main().catch(console.error);
