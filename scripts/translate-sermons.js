const fs = require('fs');
const path = require('path');
const translate = require('google-translate-api-x');

const SERMONS_EN_DIR = path.join(__dirname, '..', 'chspurgeon-sermons-main');
const SERMONS_PT_DIR = path.join(__dirname, '..', 'chspurgeon-sermons-pt');
const SERMONS_ES_DIR = path.join(__dirname, '..', 'chspurgeon-sermons-es');

const TARGET_LANG = process.argv[2] || 'pt';
const OUT_DIR = TARGET_LANG === 'pt' ? SERMONS_PT_DIR : SERMONS_ES_DIR;

async function translateText(text, targetLang) {
    if (!text || text.trim() === '') return '';
    
    try {
        const res = await translate(text, { to: targetLang, autoCorrect: true });
        return res.text;
    } catch (e) {
        console.error('Translation error:', e);
        // Wait a bit and retry
        await new Promise(r => setTimeout(r, 15000));
        try {
            const res = await translate(text, { to: targetLang, autoCorrect: true });
            return res.text;
        } catch (e2) {
            console.error('Translation error on retry:', e2);
            return text; // Fallback to original
        }
    }
}

async function translateMarkdown(content, targetLang) {
    const lines = content.split('\n');
    let translatedLines = [];

    // Group text into chunks to reduce API calls, but preserve markdown
    let currentChunk = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Don't translate empty lines or HTML comments
        if (line.trim() === '' || line.trim().startsWith('<!--')) {
            if (currentChunk.length > 0) {
                const translated = await translateText(currentChunk.join('\n'), targetLang);
                translatedLines.push(translated);
                currentChunk = [];
            }
            translatedLines.push(line);
            continue;
        }

        // Special handling for title (# Title) and blockquotes (> text)
        // It's safer to translate line by line or paragraph by paragraph
        if (currentChunk.join('\n').length + line.length > 3000) {
            const translated = await translateText(currentChunk.join('\n'), targetLang);
            translatedLines.push(translated);
            currentChunk = [];
        }
        
        currentChunk.push(line);
    }
    
    if (currentChunk.length > 0) {
        const translated = await translateText(currentChunk.join('\n'), targetLang);
        translatedLines.push(translated);
    }

    return translatedLines.join('\n');
}

async function run() {
    console.log(`Starting translation to ${TARGET_LANG}...`);
    
    if (!fs.existsSync(OUT_DIR)) {
        fs.mkdirSync(OUT_DIR, { recursive: true });
    }

    const volumes = fs.readdirSync(SERMONS_EN_DIR).filter(d => d.startsWith('volume-'));
    
    let totalTranslated = 0;
    
    for (const vol of volumes) {
        const enVolDir = path.join(SERMONS_EN_DIR, vol);
        const outVolDir = path.join(OUT_DIR, vol);
        
        if (!fs.existsSync(outVolDir)) {
            fs.mkdirSync(outVolDir, { recursive: true });
        }
        
        const files = fs.readdirSync(enVolDir).filter(f => f.endsWith('.md'));
        
        for (const file of files) {
            const outFile = path.join(outVolDir, file.replace('_', '-'));
            
            if (!fs.existsSync(outFile)) {
                console.log(`Translating ${vol}/${file} to ${TARGET_LANG}...`);
                const enContent = fs.readFileSync(path.join(enVolDir, file), 'utf-8');
                
                const translatedContent = await translateMarkdown(enContent, TARGET_LANG);
                const finalContent = translatedContent + '\n\n<!-- auto-translated -->\n';
                
                fs.writeFileSync(outFile, finalContent, 'utf-8');
                console.log(`Saved ${outFile}`);
                totalTranslated++;
                
                // Be nice to the API
                await new Promise(r => setTimeout(r, 3000));
            }
        }
    }
    
    console.log(`Finished translating to ${TARGET_LANG}. Total files: ${totalTranslated}`);
}

run();
