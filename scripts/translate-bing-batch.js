const fs = require('fs');
const path = require('path');
const { translate } = require('bing-translate-api');

const SERMONS_EN_DIR = path.join(__dirname, '..', 'chspurgeon-sermons-main');
const SERMONS_PT_DIR = path.join(__dirname, '..', 'chspurgeon-sermons-pt');
const SERMONS_ES_DIR = path.join(__dirname, '..', 'chspurgeon-sermons-es');

const VOLUMES = ['volume-11'];

async function translateText(text, targetLang) {
    if (!text || text.trim() === '') return '';
    try {
        const res = await translate(text, null, targetLang, true);
        return res.translation;
    } catch (e) {
        console.error('Bing translation error:', e);
        // Retry once
        await new Promise(r => setTimeout(r, 5000));
        try {
            const res = await translate(text, null, targetLang, true);
            return res.translation;
        } catch (e2) {
            console.error('Bing translation error on retry:', e2);
            return text;
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
                await new Promise(r => setTimeout(r, 1000)); // Be nice to Bing
            }
            translatedLines.push(line);
            continue;
        }

        // Bing limit is usually around 1000 characters
        if (currentChunk.join('\n').length + line.length > 900) {
            const translated = await translateText(currentChunk.join('\n'), targetLang);
            translatedLines.push(translated);
            currentChunk = [];
            await new Promise(r => setTimeout(r, 1000)); // Be nice to Bing
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
    console.log(`Starting Bing translation of ${vol} to ${lang}...`);
    
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
            console.log(`[Bing] Translating ${vol}/${file} to ${lang}...`);
            const enContent = fs.readFileSync(path.join(enVolDir, file), 'utf-8');
            
            const translatedContent = await translateMarkdown(enContent, lang);
            const finalContent = translatedContent + '\n\n<!-- auto-translated-bing -->\n';
            
            fs.writeFileSync(outFile, finalContent, 'utf-8');
            console.log(`Saved ${outFile}`);
            totalTranslated++;
            
            // Wait between files
            await new Promise(r => setTimeout(r, 5000));
        } else {
            console.log(`Skipping ${outFile} - already translated.`);
        }
    }
    
    console.log(`Finished ${vol} in ${lang}. Total new files: ${totalTranslated}`);
}

async function run() {
    for (const vol of VOLUMES) {
        await runLang('pt', SERMONS_PT_DIR, vol);
        await runLang('es', SERMONS_ES_DIR, vol);
    }
    console.log('All done!');
}

run();
