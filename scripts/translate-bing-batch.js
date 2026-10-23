const fs = require('fs');
const path = require('path');
const { translate } = require('bing-translate-api');

// Evita que o Node "crushe" (feche sozinho) se a conexão de internet com o Bing cair (ECONNRESET)
process.on('uncaughtException', (err) => {
    console.error('Ignorando erro global para não fechar o script:', err.message);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('Ignorando rejeição global:', reason.message || reason);
});

const SERMONS_EN_DIR = path.join(__dirname, '..', 'chspurgeon-sermons-main');
const SERMONS_PT_DIR = path.join(__dirname, '..', 'chspurgeon-sermons-pt');
const SERMONS_ES_DIR = path.join(__dirname, '..', 'chspurgeon-sermons-es');

const VOLUMES = [];
for (let i = 11; i <= 55; i++) {
    VOLUMES.push(`volume-${i.toString().padStart(2, '0')}`);
}
async function translateText(text, targetLang, retries = 5, delayMs = 5000) {
    if (!text || text.trim() === '') return '';
    try {
        const res = await translate(text, null, targetLang, false);
        return res.translation;
    } catch (e) {
        const errMsg = e.message ? e.message : e;
        console.error(`Bing translation error: ${errMsg}. Retries left: ${retries}`);
        
        if (retries > 0) {
            console.log(`Waiting ${delayMs/1000}s before retrying...`);
            await new Promise(r => setTimeout(r, delayMs));
            // Aumenta o tempo de espera (backoff exponencial) para não ser bloqueado de vez
            return await translateText(text, targetLang, retries - 1, delayMs * 2);
        }
        
        console.error('Failed completely after retries. Returning original text.');
        return text;
    }
}

async function translateMarkdown(content, targetLang) {
    const lines = content.split('\n');
    let translatedLines = [];
    let currentChunk = [];
    
    for (let i = 0; i < lines.length; i++) {
        const rawLine = lines[i];
        
        if (rawLine.trim() === '' || rawLine.trim().startsWith('<!--')) {
            if (currentChunk.length > 0) {
                const translated = await translateText(currentChunk.join('\n'), targetLang);
                translatedLines.push(translated);
                currentChunk = [];
                await new Promise(r => setTimeout(r, 1000));
            }
            translatedLines.push(rawLine);
            continue;
        }

        // Se uma única linha for maior que 900 caracteres, quebramos em frases
        let subLines = [rawLine];
        if (rawLine.length > 900) {
            subLines = rawLine.match(/[^.!?]+[.!?]+/g) || [rawLine];
        }

        for (const line of subLines) {
            if (currentChunk.join('\n').length + line.length > 900) {
                if (currentChunk.length > 0) {
                    const translated = await translateText(currentChunk.join('\n'), targetLang);
                    translatedLines.push(translated);
                    currentChunk = [];
                    await new Promise(r => setTimeout(r, 1000));
                }
                
                // Fallback extremo se uma frase sem pontuação for > 900
                if (line.length > 900) {
                    const part1 = await translateText(line.substring(0, 850), targetLang);
                    const part2 = await translateText(line.substring(850), targetLang);
                    translatedLines.push(part1 + ' ' + part2);
                    continue;
                }
            }
            currentChunk.push(line);
        }
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
        // await runLang('es', SERMONS_ES_DIR, vol); // Desativado até terminar o PT
    }
    console.log('All done!');
}

run();
