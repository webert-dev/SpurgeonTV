const fs = require('fs');
const path = require('path');
const translate = require('google-translate-api-x');

const SERMONS_EN_DIR = path.join(__dirname, '..', 'chspurgeon-sermons-main');
const SERMONS_PT_DIR = path.join(__dirname, '..', 'chspurgeon-sermons-pt');
const SERMONS_ES_DIR = path.join(__dirname, '..', 'chspurgeon-sermons-es');

const VOLUMES = ['volume-59', 'volume-58', 'volume-57', 'volume-56', 'volume-55'];

async function translateText(text, targetLang) {
    if (!text || text.trim() === '') return '';
    
    // Google Translate API rate limit handling
    await new Promise(r => setTimeout(r, 10000));

    try {
        const res = await translate(text, { to: targetLang, autoCorrect: true });
        return res.text;
    } catch (e) {
        console.error('Translation error:', e.message);
        // Wait a bit and retry
        await new Promise(r => setTimeout(r, 15000));
        try {
            const res = await translate(text, { to: targetLang, autoCorrect: true });
            return res.text;
        } catch (e2) {
            console.error('Translation error on retry:', e2.message);
            return text; // Fallback to original
        }
    }
}

async function translateMarkdown(content, targetLang) {
    const lines = content.split('\n');
    let translatedLines = [];
    let currentChunk = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.trim() === '' || line.trim().startsWith('<!--')) {
            if (currentChunk.length > 0) {
                const translated = await translateText(currentChunk.join('\n'), targetLang);
                translatedLines.push(translated);
                currentChunk = [];
            }
            translatedLines.push(line);
            continue;
        }

        if (currentChunk.join('\n').length + line.length > 4000) {
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

async function runLang(lang, outDir, vol) {
    console.log(`\n--- Starting Google translation of ${vol} to ${lang} ---`);
    
    const enVolDir = path.join(SERMONS_EN_DIR, vol);
    const outVolDir = path.join(outDir, vol);
    
    if (!fs.existsSync(outVolDir)) {
        fs.mkdirSync(outVolDir, { recursive: true });
    }
    
    const files = fs.readdirSync(enVolDir).filter(f => f.endsWith('.md'));
    let totalTranslated = 0;
    
    for (const file of files) {
        const outFile = path.join(outVolDir, file.replace('_', '-'));
        
        if (!fs.existsSync(outFile)) {
            console.log(`[Google] Translating ${vol}/${file} to ${lang}...`);
            const enContent = fs.readFileSync(path.join(enVolDir, file), 'utf-8');
            
            const translatedContent = await translateMarkdown(enContent, lang);
            const finalContent = translatedContent + '\n\n<!-- auto-translated-google -->\n';
            
            fs.writeFileSync(outFile, finalContent, 'utf-8');
            console.log(`Saved ${outFile}`);
            totalTranslated++;
            
            // Wait 15s between files to avoid bans
            await new Promise(r => setTimeout(r, 15000));
        } else {
            console.log(`Skipping ${outFile} - already exists.`);
        }
    }
    
    console.log(`Finished ${vol} in ${lang}. Total new files: ${totalTranslated}`);
}

async function run() {
    for (const vol of VOLUMES) {
        // Run Portuguese
        await runLang('pt', SERMONS_PT_DIR, vol);
        // Run Spanish
        await runLang('es', SERMONS_ES_DIR, vol);
    }
    console.log('\nAll missing translations in Volumes 55-59 completed!');
}

run();
