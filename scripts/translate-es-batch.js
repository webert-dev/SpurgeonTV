/**
 * scripts/translate-es-batch.js
 * 
 * Automação de tradução de sermões em lote para Espanhol (Bing Translate).
 * Preserva 100% da estrutura Markdown, cabeçalho de título, bloco de versículo bíblico
 * e separação de parágrafos idênticos ao padrão do Spurgeon.tv.
 * 
 * Uso:
 *   node scripts/translate-es-batch.js               -> Traduz todos os sermões faltantes (01 a 63)
 *   node scripts/translate-es-batch.js --vol=08       -> Traduz apenas o volume 08
 *   node scripts/translate-es-batch.js --start=08 --end=15 -> Traduz do volume 08 ao 15
 *   node scripts/translate-es-batch.js --limit=3      -> Traduz 3 sermões e para (teste)
 */

const fs = require('fs');
const path = require('path');
const { translate } = require('bing-translate-api');
const { execSync } = require('child_process');

// Proteção global contra encerramento por erros transitórios de rede (ECONNRESET, ETIMEDOUT)
process.on('uncaughtException', (err) => {
    console.error('⚠️ [Aviso Global] Erro transitório capturado (mantendo processo ativo):', err.message);
});
process.on('unhandledRejection', (reason) => {
    console.error('⚠️ [Aviso Global] Rejeição de Promise capturada:', (reason && reason.message) || reason);
});

const ROOT = path.resolve(__dirname, '..');
const SERMONS_EN_DIR = path.join(ROOT, 'chspurgeon-sermons-main');
const SERMONS_ES_DIR = path.join(ROOT, 'chspurgeon-sermons-es');
const PUBLIC_ES_DIR = path.join(ROOT, 'public', 'data', 'sermons', 'es');
const STATUS_FILE = path.join(ROOT, 'scratch', 'translation_es_status.json');

// Mapeamento Canônico de Livros Bíblicos EN -> ES
const BIBLE_BOOKS_EN_TO_ES = {
    'Genesis': 'Génesis', 'Exodus': 'Éxodo', 'Leviticus': 'Levítico', 'Numbers': 'Números', 'Deuteronomy': 'Deuteronomio',
    'Joshua': 'Josué', 'Judges': 'Jueces', 'Ruth': 'Rut', '1 Samuel': '1 Samuel', '2 Samuel': '2 Samuel',
    'I Samuel': '1 Samuel', 'II Samuel': '2 Samuel', '1 Kings': '1 Reyes', '2 Kings': '2 Reyes',
    'I Kings': '1 Reyes', 'II Kings': '2 Reyes', '1 Chronicles': '1 Crónicas', '2 Chronicles': '2 Crónicas',
    'I Chronicles': '1 Crónicas', 'II Chronicles': '2 Crónicas', 'Ezra': 'Esdras', 'Nehemiah': 'Nehemías',
    'Esther': 'Ester', 'Job': 'Job', 'Psalms': 'Salmos', 'Psalm': 'Salmo', 'Proverbs': 'Proverbios',
    'Ecclesiastes': 'Eclesiastés', 'Song of Solomon': 'Cantares', 'Song of Songs': 'Cantares', 'Canticles': 'Cantares',
    'Isaiah': 'Isaías', 'Jeremiah': 'Jeremías', 'Lamentations': 'Lamentaciones', 'Ezekiel': 'Ezequiel',
    'Daniel': 'Daniel', 'Hosea': 'Oseas', 'Joel': 'Joel', 'Amos': 'Amós', 'Obadiah': 'Abdías',
    'Jonah': 'Jonás', 'Micah': 'Miqueas', 'Nahum': 'Nahúm', 'Habakkuk': 'Habacuc', 'Zephaniah': 'Sofonías',
    'Haggai': 'Hageo', 'Zechariah': 'Zacarías', 'Malachi': 'Malaquías',
    'Matthew': 'Mateo', 'Mark': 'Marcos', 'Luke': 'Lucas', 'John': 'Juan', 'Acts': 'Hechos',
    'Romans': 'Romanos', '1 Corinthians': '1 Corintios', '2 Corinthians': '2 Corintios',
    'I Corinthians': '1 Corintios', 'II Corinthians': '2 Corintios',
    'Galatians': 'Gálatas', 'Ephesians': 'Efesios', 'Philippians': 'Filipenses', 'Colossians': 'Colosenses',
    '1 Thessalonians': '1 Tesalonicenses', '2 Thessalonians': '2 Tesalonicenses',
    'I Thessalonians': '1 Tesalonicenses', 'II Thessalonians': '2 Tesalonicenses',
    '1 Timothy': '1 Timoteo', '2 Timothy': '2 Timoteo', 'I Timothy': '1 Timoteo', 'II Timothy': '2 Timoteo',
    'Titus': 'Tito', 'Philemon': 'Filemón', 'Hebrews': 'Hebreos', 'James': 'Santiago',
    '1 Peter': '1 Pedro', '2 Peter': '2 Pedro', 'I Peter': '1 Pedro', 'II Peter': '2 Pedro',
    '1 John': '1 Juan', '2 John': '2 Juan', '3 John': '3 Juan',
    'I John': '1 Juan', 'II John': '2 Juan', 'III John': '3 Juan',
    'Jude': 'Judas', 'Revelation': 'Apocalipsis'
};

function normalizeBibleReference(ref) {
    if (!ref) return '';
    let normalized = ref.trim();
    for (const [enBook, esBook] of Object.entries(BIBLE_BOOKS_EN_TO_ES)) {
        const regex = new RegExp(`\\b${enBook}\\b`, 'g');
        if (regex.test(normalized)) {
            normalized = normalized.replace(regex, esBook);
            break;
        }
    }
    return normalized;
}

// Argumentos CLI
const args = process.argv.slice(2);
let targetVolume = null;
let startVol = 1;
let endVol = 63;
let limitTotal = null;
let forceOverwrite = false;
let targetSlug = null;

for (const arg of args) {
    if (arg.startsWith('--vol=')) {
        const v = parseInt(arg.split('=')[1], 10);
        targetVolume = `volume-${v.toString().padStart(2, '0')}`;
    } else if (arg.startsWith('--slug=')) {
        targetSlug = arg.split('=')[1].replace(/_/g, '-');
        if (!targetSlug.endsWith('.md')) targetSlug += '.md';
    } else if (arg.startsWith('--start=')) {
        startVol = parseInt(arg.split('=')[1], 10);
    } else if (arg.startsWith('--end=')) {
        endVol = parseInt(arg.split('=')[1], 10);
    } else if (arg.startsWith('--limit=')) {
        limitTotal = parseInt(arg.split('=')[1], 10);
    } else if (arg === '--force') {
        forceOverwrite = true;
    }
}

let volumesToProcess = [];
if (targetVolume) {
    volumesToProcess = [targetVolume];
} else {
    for (let i = startVol; i <= endVol; i++) {
        volumesToProcess.push(`volume-${i.toString().padStart(2, '0')}`);
    }
}

function updateStatus(info) {
    try {
        const current = fs.existsSync(STATUS_FILE) 
            ? JSON.parse(fs.readFileSync(STATUS_FILE, 'utf8')) 
            : {};
        const updated = {
            ...current,
            ...info,
            lastUpdate: new Date().toISOString()
        };
        fs.writeFileSync(STATUS_FILE, JSON.stringify(updated, null, 2), 'utf8');
    } catch (e) {}
}

async function translateText(text, targetLang = 'es', retries = 5, delayMs = 3500) {
    if (!text || text.trim() === '') return '';
    try {
        const res = await translate(text, 'en', targetLang, false);
        return res.translation;
    } catch (e) {
        const errMsg = e.message || String(e);
        console.error(`  [Bing] Falha na tradução: ${errMsg}. Tentativas restantes: ${retries}`);
        
        if (retries > 0) {
            console.log(`  Aguardando ${(delayMs / 1000).toFixed(1)}s antes de tentar novamente...`);
            await new Promise(r => setTimeout(r, delayMs));
            return await translateText(text, targetLang, retries - 1, delayMs * 1.5);
        }
        
        console.error('  ❌ Esgotadas tentativas para o bloco. Retornando texto original.');
        return text;
    }
}

function isSermonAlreadyTranslated(filePath) {
    if (!fs.existsSync(filePath)) return false;
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const firstLine = content.split('\n')[0] || '';
        // If the title still starts with English 'Sermon ' instead of 'Sermón '
        if (/^#\s*Sermon\s+\d+/i.test(firstLine)) return false;

        // Check for common English stopwords in the body (first 1000 chars)
        const sample = content.substring(0, 1000).toLowerCase();
        if (sample.includes(' the ') && sample.includes(' and ') && sample.includes(' that ')) {
            return false;
        }
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * Decomposição e reconstrução estrutural estrita do Sermão
 */
async function translateSermon(enRawContent) {
    const rawLines = enRawContent.split('\n');
    let lineIdx = 0;

    // 1. EXTRAÇÃO DO TÍTULO
    let sermonNumber = '';
    let enTitlePart = '';
    const firstLine = rawLines[0] || '';
    const titleMatch = firstLine.match(/#\s*(?:Sermon|Sermão|Sermón)\s*(\d+)\s*(?:\||\—|\-)\s*(.+)/i);
    if (titleMatch) {
        sermonNumber = titleMatch[1].trim();
        enTitlePart = titleMatch[2].trim();
    } else {
        const fallbackMatch = firstLine.match(/#\s*(.+)/);
        enTitlePart = fallbackMatch ? fallbackMatch[1].trim() : 'Sermon';
    }
    lineIdx++;

    // 2. EXTRAÇÃO DO BLOCO DE ESCRITURA BÍBLICA (versículo-chave)
    const scriptureRawLines = [];
    while (lineIdx < rawLines.length) {
        const line = rawLines[lineIdx];
        if (line.trim().startsWith('>')) {
            scriptureRawLines.push(line.replace(/^>\s*/, '').trim());
            lineIdx++;
        } else if (scriptureRawLines.length > 0 && line.trim() === '') {
            lineIdx++;
            break;
        } else if (scriptureRawLines.length === 0 && line.trim() === '') {
            lineIdx++;
        } else {
            break;
        }
    }

    // Identificar texto do versículo e referência
    let rawVerseText = '';
    let rawReference = '';
    if (scriptureRawLines.length >= 2) {
        rawVerseText = scriptureRawLines.slice(0, -1).join(' ').replace(/^["'“”«»]+|["'“”«»]+$/g, '').trim();
        rawReference = scriptureRawLines[scriptureRawLines.length - 1];
    } else if (scriptureRawLines.length === 1) {
        rawVerseText = scriptureRawLines[0].replace(/^["'“”«»]+|["'“”«»]+$/g, '').trim();
    }

    // 3. EXTRAÇÃO DO CORPO DO SERMÃO
    // Pula linhas em branco após o bloco de cabeçalho
    while (lineIdx < rawLines.length && rawLines[lineIdx].trim() === '') {
        lineIdx++;
    }
    const bodyLines = rawLines.slice(lineIdx);

    // 4. TRADUÇÃO DAS PARTES ISOLADAS
    // A) Tradução do título
    let esTitle = '';
    if (enTitlePart) {
        const translatedTitle = await translateText(enTitlePart, 'es');
        let clean = translatedTitle.replace(/^#\s*/, '').trim();
        clean = clean.replace(/^(Sermon|Sermón)\s*\d+\s*\|\s*/i, '');
        esTitle = `# Sermón ${sermonNumber} | ${clean}`;
        await new Promise(r => setTimeout(r, 600));
    } else {
        esTitle = `# Sermón ${sermonNumber}`;
    }

    // B) Tradução do versículo chave
    let esScriptureBlock = '';
    if (rawVerseText) {
        const translatedVerse = await translateText(rawVerseText, 'es');
        const cleanVerse = translatedVerse.replace(/^["'“”«»]+|["'“”«»]+$/g, '').trim();
        
        let esRef = '';
        if (rawReference) {
            esRef = normalizeBibleReference(rawReference);
            // Se ainda contiver texto em inglês, traduz a referência
            if (/[a-zA-Z]/.test(esRef) && !Object.values(BIBLE_BOOKS_EN_TO_ES).some(b => esRef.includes(b))) {
                esRef = await translateText(rawReference, 'es');
                esRef = normalizeBibleReference(esRef);
            }
        }
        
        esScriptureBlock = `> "${cleanVerse}"\n`;
        if (esRef) {
            esScriptureBlock += `> ${esRef}\n`;
        }
        await new Promise(r => setTimeout(r, 600));
    }

    // C) Tradução dos parágrafos do corpo preservando blocos
    // Agrupamos linhas em parágrafos separados por linhas vazias
    const paragraphs = [];
    let currentPara = [];
    for (const line of bodyLines) {
        if (line.trim() === '') {
            if (currentPara.length > 0) {
                paragraphs.push(currentPara.join('\n'));
                currentPara = [];
            }
        } else {
            currentPara.push(line);
        }
    }
    if (currentPara.length > 0) {
        paragraphs.push(currentPara.join('\n'));
    }

    const translatedParagraphs = [];
    let chunkBuffer = [];
    let chunkLength = 0;

    async function flushChunk() {
        if (chunkBuffer.length === 0) return;
        const joined = chunkBuffer.join('\n\n');
        const translated = await translateText(joined, 'es');
        translatedParagraphs.push(translated);
        chunkBuffer = [];
        chunkLength = 0;
        await new Promise(r => setTimeout(r, 900));
    }

    for (const para of paragraphs) {
        // Ignora comentários HTML
        if (para.trim().startsWith('<!--')) {
            await flushChunk();
            translatedParagraphs.push(para);
            continue;
        }

        // Se o parágrafo for um subtítulo Markdown (## ou ###)
        const headerMatch = para.match(/^(#{2,6}\s+)(.+)/);
        if (headerMatch) {
            await flushChunk();
            const prefix = headerMatch[1];
            const headerText = headerMatch[2];
            const transHeader = await translateText(headerText, 'es');
            translatedParagraphs.push(`${prefix}${transHeader}`);
            await new Promise(r => setTimeout(r, 600));
            continue;
        }

        // Se o parágrafo for muito grande (> 850 caracteres), divide em frases
        if (para.length > 850) {
            await flushChunk();
            const sentences = para.match(/[^.!?]+[.!?]+(?:\s+|$)|[^.!?]+$/g) || [para];
            let subChunk = '';
            for (const s of sentences) {
                if (subChunk.length + s.length > 850) {
                    if (subChunk) {
                        const tr = await translateText(subChunk, 'es');
                        translatedParagraphs.push(tr);
                        await new Promise(r => setTimeout(r, 800));
                        subChunk = '';
                    }
                }
                subChunk += s;
            }
            if (subChunk) {
                const tr = await translateText(subChunk, 'es');
                translatedParagraphs.push(tr);
                await new Promise(r => setTimeout(r, 800));
            }
            continue;
        }

        if (chunkLength + para.length > 850) {
            await flushChunk();
        }

        chunkBuffer.push(para);
        chunkLength += para.length + 2;
    }
    await flushChunk();

    // 5. RECONSTRUÇÃO FINAL RIGOROSA
    let finalDoc = `${esTitle}\n\n`;
    if (esScriptureBlock) {
        finalDoc += `${esScriptureBlock}\n`;
    }
    finalDoc += translatedParagraphs.join('\n\n').trim();
    finalDoc += '\n\n<!-- auto-translated-bing -->\n';

    return finalDoc;
}

async function run() {
    console.log('══════════════════════════════════════════════════════════════════');
    console.log('  AUTOMAÇÃO RIGOROSA DE TRADUÇÃO DE SERMÕES (SPURGEON.TV)');
    console.log('══════════════════════════════════════════════════════════════════');
    console.log(` Volumes: ${volumesToProcess[0]} até ${volumesToProcess[volumesToProcess.length - 1]}`);
    if (limitTotal) console.log(` Limite de sermões nesta execução: ${limitTotal}`);
    if (forceOverwrite) console.log(` Modo forçado: sobrescrevendo arquivos de destino`);
    console.log('──────────────────────────────────────────────────────────────────\n');

    let totalTranslated = 0;
    let totalSkipped = 0;
    const startTime = Date.now();

    updateStatus({
        status: 'running',
        startTime: new Date().toISOString(),
        totalTranslated: 0,
        currentVolume: '',
        currentFile: '',
    });

    for (const vol of volumesToProcess) {
        const enVolDir = path.join(SERMONS_EN_DIR, vol);
        const esVolDir = path.join(SERMONS_ES_DIR, vol);
        const pubEsVolDir = path.join(PUBLIC_ES_DIR, vol);

        if (!fs.existsSync(enVolDir)) continue;
        if (!fs.existsSync(esVolDir)) fs.mkdirSync(esVolDir, { recursive: true });
        if (!fs.existsSync(pubEsVolDir)) fs.mkdirSync(pubEsVolDir, { recursive: true });

        const enFiles = fs.readdirSync(enVolDir)
            .filter(f => f.endsWith('.md'))
            .sort((a, b) => {
                const numA = parseInt(a.replace(/\D/g, ''), 10) || 0;
                const numB = parseInt(b.replace(/\D/g, ''), 10) || 0;
                return numA - numB;
            });

        console.log(`\n📁 Volume ${vol} (${enFiles.length} sermões no acervo)...`);

        for (const file of enFiles) {
            const standardSlug = file.replace(/_/g, '-');
            if (targetSlug && standardSlug !== targetSlug) {
                continue;
            }

            if (limitTotal && totalTranslated >= limitTotal) {
                console.log(`\n🛑 Limite de ${limitTotal} sermões atingido. Encerrando o lote.`);
                break;
            }

            const targetFileRepo = path.join(esVolDir, standardSlug);
            const targetFilePub = path.join(pubEsVolDir, standardSlug);

            const isTranslated = isSermonAlreadyTranslated(targetFileRepo);

            if (isTranslated && !forceOverwrite && !targetSlug) {
                if (!fs.existsSync(targetFilePub)) {
                    fs.copyFileSync(targetFileRepo, targetFilePub);
                }
                totalSkipped++;
                continue;
            }

            console.log(`\n⏳ Traduzindo com estrutura preservada [${vol}/${standardSlug}]...`);
            updateStatus({
                currentVolume: vol,
                currentFile: standardSlug,
                totalTranslated,
                totalSkipped
            });

            const enContent = fs.readFileSync(path.join(enVolDir, file), 'utf8');
            const fileStart = Date.now();

            try {
                const finalContent = await translateSermon(enContent);

                // Dupla gravação simultânea
                fs.writeFileSync(targetFileRepo, finalContent, 'utf8');
                fs.writeFileSync(targetFilePub, finalContent, 'utf8');

                totalTranslated++;
                const duration = ((Date.now() - fileStart) / 1000).toFixed(1);
                console.log(`✅ Concluído: ${standardSlug} em ${duration}s (Total traduzidos: ${totalTranslated})`);

                updateStatus({
                    totalTranslated,
                    totalSkipped,
                    lastTranslated: `${vol}/${standardSlug}`
                });

                // Pausa prudente para não bloquear no Bing
                await new Promise(r => setTimeout(r, 3000));
            } catch (err) {
                console.error(`❌ Erro ao processar ${standardSlug}:`, err.message);
                await new Promise(r => setTimeout(r, 4000));
            }
        }

        if (limitTotal && totalTranslated >= limitTotal) {
            break;
        }
    }

    const totalMinutes = ((Date.now() - startTime) / 60000).toFixed(1);
    console.log('\n══════════════════════════════════════════════════════════════════');
    console.log(`  FINALIZADO EM ${totalMinutes} MINUTOS!`);
    console.log(`  • Sermões recém-traduzidos: ${totalTranslated}`);
    console.log(`  • Sermões existentes preservados: ${totalSkipped}`);
    console.log('══════════════════════════════════════════════════════════════════\n');

    if (totalTranslated > 0) {
        console.log('🔄 Atualizando o índice de busca (generate-search-index.mjs)...');
        try {
            execSync('node scripts/generate-search-index.mjs', { stdio: 'inherit' });
            console.log('✅ Índice de busca atualizado!');
            console.log('🔄 Atualizando páginas de sermões (generate-sermon-pages.mjs)...');
            execSync('node scripts/generate-sermon-pages.mjs', { stdio: 'inherit' });
            console.log('✅ Páginas de sermões atualizadas!');
        } catch (e) {
            console.error('⚠️ Aviso ao atualizar o índice de busca:', e.message);
        }
    }

    updateStatus({
        status: 'finished',
        totalTranslated,
        totalSkipped,
        finishTime: new Date().toISOString()
    });
}

run();
