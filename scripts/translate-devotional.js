/**
 * scripts/translate-devotional.js
 * 
 * Motor de Tradução Teológica dos Devocionais Diários (Morning and Evening)
 * - Fonte direta: public/data/morning-and-evening.json (inglês vitoriano autêntico)
 * - Padrão Bíblico PT: NVI (Nova Versão Internacional - data/bible/pt_nvi.json)
 * - Padrão Bíblico ES: Reina-Valera 1960 (RVR1960 - data/bible/es_rvr1960.json)
 * - Ciclo cronológico: 28 de outubro a 27 de outubro
 * - Suporte a parada limpa (Ctrl+C) e retomada automática
 * 
 * Uso:
 *   node scripts/translate-devotional.js                     -> Traduz o próximo lote pendente
 *   node scripts/translate-devotional.js --from=10-28 --to=11-03 -> Traduz o intervalo 28/10 a 03/11
 *   node scripts/translate-devotional.js --days=7           -> Traduz os próximos 7 dias
 *   node scripts/translate-devotional.js --lang=pt          -> Traduz apenas para Português
 *   node scripts/translate-devotional.js --status           -> Mostra o status do ciclo
 *   node scripts/translate-devotional.js --force            -> Força retradução
 */

const fs = require('fs');
const path = require('path');
const { translate } = require('bing-translate-api');

// Proteção global contra erros transitórios de rede
process.on('uncaughtException', (err) => {
    console.error('⚠️ [Aviso Global] Erro transitório capturado:', err.message);
});
process.on('unhandledRejection', (reason) => {
    console.error('⚠️ [Aviso Global] Rejeição de Promise:', (reason && reason.message) || reason);
});

// Controle de parada limpa (Graceful Shutdown)
let isStopping = false;
process.on('SIGINT', () => {
    if (isStopping) {
        console.log('\nForçando encerramento imediato...');
        process.exit(1);
    }
    console.log('\n\n🛑 Sinal de interrupção (Ctrl+C) recebido!');
    console.log('   Finalizando a meditação atual e salvando arquivos com segurança...');
    isStopping = true;
});

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'public', 'data');
const DEVOTIONAL_DIR = path.join(DATA_DIR, 'devotional');
const BACKUP_DIR = path.join(DATA_DIR, 'devotional_backup');
const STATUS_FILE = path.join(ROOT, 'scratch', 'devotional_status.json');

const MASTER_EN = path.join(DATA_DIR, 'morning-and-evening.json');
const MASTER_PT = path.join(DATA_DIR, 'morning-and-evening-pt.json');
const MASTER_ES = path.join(DATA_DIR, 'morning-and-evening-es.json');

// Carrega os textos bíblicos integrais locais (NVI e RVR1960)
let ptNviData = null;
let esRvrData = null;
try {
    const ptPath = path.join(ROOT, 'data', 'bible', 'pt_nvi.json');
    const esPath = path.join(ROOT, 'data', 'bible', 'es_rvr1960.json');
    if (fs.existsSync(ptPath)) ptNviData = JSON.parse(fs.readFileSync(ptPath, 'utf8'));
    if (fs.existsSync(esPath)) esRvrData = JSON.parse(fs.readFileSync(esPath, 'utf8'));
} catch (e) {
    console.warn('⚠️ Base bíblica local não encontrada, fallback para tradução direta:', e.message);
}

const EN_BOOKS_ORDER = [
    'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth',
    '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra',
    'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon',
    'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos',
    'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi',
    'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians',
    'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians',
    '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter',
    '1 John', '2 John', '3 John', 'Jude', 'Revelation'
];

const BOOK_ALIASES = {
    'Psalm': 'Psalms',
    'Song of Songs': 'Song of Solomon',
    'Canticles': 'Song of Solomon',
    'I Samuel': '1 Samuel', 'II Samuel': '2 Samuel',
    'I Kings': '1 Kings', 'II Kings': '2 Kings',
    'I Chronicles': '1 Chronicles', 'II Chronicles': '2 Chronicles',
    'I Corinthians': '1 Corinthians', 'II Corinthians': '2 Corinthians',
    'I Thessalonians': '1 Thessalonians', 'II Thessalonians': '2 Thessalonians',
    'I Timothy': '1 Timothy', 'II Timothy': '2 Timothy',
    'I Peter': '1 Peter', 'II Peter': '2 Peter',
    'I John': '1 John', 'II John': '2 John', 'III John': '3 John'
};

// Dicionário de alinhamento teológico Spurgeoniano & NVI/RVR
const THEOLOGICAL_REPLACEMENTS = {
    pt: [
        { pattern: /\bdiscriminating regard\b/gi, replace: 'cuidado criterioso' },
        { pattern: /\bdistinguishing grace\b/gi, replace: 'graça soberana' },
        { pattern: /\bconsideração discriminatória\b/gi, replace: 'cuidado criterioso' },
        { pattern: /\bgracia discriminatoria\b/gi, replace: 'gracia soberana' },
        { pattern: /\bmilho velho da terra\b/gi, replace: 'trigo da terra' },
        { pattern: /\bvelho milho da terra\b/gi, replace: 'trigo da terra' },
        { pattern: /\bquerido leitor cristã\b/gi, replace: 'querido leitor cristão' },
        { pattern: /\bweary wanderings\b/gi, replace: 'peregrinações exaustivas' },
        { pattern: /\bmoving tents\b/gi, replace: 'tendas peregrinas' },
        { pattern: /\bEu escolhi você fora do mundo\b/gi, replace: 'Eu os escolhi do mundo' },
        { pattern: /\bEu escolhi você do mundo\b/gi, replace: 'Eu os escolhi do mundo' },
        { pattern: /\bEle escolheu você\b/gi, replace: 'Ele vos escolheu' },
    ],
    es: [
        { pattern: /\bconsideración discriminatoria\b/gi, replace: 'cuidado soberano' },
        { pattern: /\bgracia discriminatoria\b/gi, replace: 'gracia soberana' },
        { pattern: /\bmaíz viejo de la tierra\b/gi, replace: 'fruto de la tierra' },
        { pattern: /\btrigo añejo de la tierra\b/gi, replace: 'fruto de la tierra' },
        { pattern: /\bTe he elegido del mundo\b/gi, replace: 'Yo os elegí del mundo' },
        { pattern: /\bYo los elegí del mundo\b/gi, replace: 'Yo os elegí del mundo' },
    ]
};

// Tradução de texto com retry e backoff
async function translateWithRetry(text, targetLang, retries = 4, delayMs = 2500) {
    if (!text || text.trim() === '') return '';
    try {
        const res = await translate(text, 'en', targetLang, false);
        return res.translation;
    } catch (e) {
        if (retries > 0) {
            await new Promise(r => setTimeout(r, delayMs));
            return await translateWithRetry(text, targetLang, retries - 1, delayMs * 1.5);
        }
        console.error(`  ❌ Falha na tradução (${targetLang}):`, e.message);
        return text;
    }
}

// Consulta exata do versículo na Bíblia NVI / RVR1960
function lookupBibleVerse(refString, lang) {
    const bibleData = lang === 'pt' ? ptNviData : esRvrData;
    if (!bibleData) return null;

    const m = refString.trim().replace(/^—\s*|^\-\s*/, '').match(/^(.*?)\s+(\d+)[:\.](\d+)/);
    if (!m) return null;

    let bookRaw = m[1].trim();
    const chap = parseInt(m[2], 10);
    const verse = parseInt(m[3], 10);

    const bookStd = BOOK_ALIASES[bookRaw] || bookRaw;
    const bIdx = EN_BOOKS_ORDER.indexOf(bookStd);
    if (bIdx < 0) return null;

    const bookObj = bibleData[bIdx];
    if (!bookObj) return null;

    const cIdx = chap - 1;
    const vIdx = verse - 1;

    if (bookObj.chapters && bookObj.chapters[cIdx] && bookObj.chapters[cIdx][vIdx]) {
        let bookName = bookObj.name;
        if (lang === 'pt') {
            if (bookName === 'Cântico dos Cânticos') bookName = 'Cânticos';
            if (bookName === 'São João') bookName = 'João';
            if (bookName === 'São Mateus') bookName = 'Mateus';
            if (bookName === 'São Marcos') bookName = 'Marcos';
            if (bookName === 'São Lucas') bookName = 'Lucas';
        }
        if (lang === 'es') {
            if (bookName === 'San Juan') bookName = 'Juan';
            if (bookName === 'San Mateo') bookName = 'Mateo';
            if (bookName === 'San Marcos') bookName = 'Marcos';
            if (bookName === 'San Lucas') bookName = 'Lucas';
        }
        return {
            book: bookName,
            chapter: chap,
            verse: verse,
            ref: `${bookName} ${chap}:${verse}`,
            text: bookObj.chapters[cIdx][vIdx].trim()
        };
    }
    return null;
}

// Limpa o corpo da meditação em inglês removendo o cabeçalho duplicado
function extractCleanEnBody(rawBody) {
    if (!rawBody) return [];
    let clean = rawBody.replace(/\r\n/g, '\n').trim();
    
    // Divide por quebras de linha duplas
    const paragraphs = clean.split(/\n\n+/);
    
    // O primeiro parágrafo frequentemente contém "Month Day — Morning/Evening Reading" e o versículo
    if (paragraphs.length > 1) {
        const first = paragraphs[0].trim();
        if (/^(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d+(?:st|nd|rd|th)?\s*[—–-]/i.test(first) || 
            first.includes('Morning Reading') || first.includes('Evening Reading')) {
            paragraphs.shift();
        }
    }
    
    return paragraphs.map(p => p.trim()).filter(p => p.length > 0);
}

// Gera o ciclo de 366 dias a partir de 28/10 até 27/10
function generateChronologicalDates() {
    const dates = [];
    const daysInMonths = [
        { m: 10, days: 31, start: 28 }, // 28/10 a 31/10
        { m: 11, days: 30, start: 1 },  // Novembro
        { m: 12, days: 31, start: 1 },  // Dezembro
        { m: 1,  days: 31, start: 1 },  // Janeiro
        { m: 2,  days: 29, start: 1 },  // Fevereiro (bissexto)
        { m: 3,  days: 31, start: 1 },  // Março
        { m: 4,  days: 30, start: 1 },  // Abril
        { m: 5,  days: 31, start: 1 },  // Maio
        { m: 6,  days: 30, start: 1 },  // Junho
        { m: 7,  days: 31, start: 1 },  // Julho
        { m: 8,  days: 31, start: 1 },  // Agosto
        { m: 9,  days: 30, start: 1 },  // Setembro
        { m: 10, days: 27, start: 1 },  // 01/10 a 27/10
    ];

    for (const info of daysInMonths) {
        const end = (info.m === 10 && info.start === 28) ? info.days : (info.m === 10 && info.start === 1) ? 27 : info.days;
        for (let d = info.start; d <= end; d++) {
            dates.push(`${info.m}-${d}`);
        }
    }
    return dates;
}

// Garante backup antes de iniciar
function ensureBackup() {
    if (!fs.existsSync(BACKUP_DIR)) {
        fs.mkdirSync(BACKUP_DIR, { recursive: true });
        console.log('📦 Criando backup de segurança inicial em public/data/devotional_backup/...');
        if (fs.existsSync(MASTER_PT)) fs.copyFileSync(MASTER_PT, path.join(BACKUP_DIR, 'morning-and-evening-pt.json'));
        if (fs.existsSync(MASTER_ES)) fs.copyFileSync(MASTER_ES, path.join(BACKUP_DIR, 'morning-and-evening-es.json'));
        console.log('✅ Backup concluído!');
    }
}

// Lê ou cria o arquivo de status
function loadStatus() {
    if (fs.existsSync(STATUS_FILE)) {
        try {
            return JSON.parse(fs.readFileSync(STATUS_FILE, 'utf8'));
        } catch (e) {}
    }
    return {
        translated: { pt: [], es: [] },
        lastCompleted: null,
        history: []
    };
}

function saveStatus(status) {
    try {
        const scratchDir = path.dirname(STATUS_FILE);
        if (!fs.existsSync(scratchDir)) fs.mkdirSync(scratchDir, { recursive: true });
        fs.writeFileSync(STATUS_FILE, JSON.stringify(status, null, 2), 'utf8');
    } catch (e) {}
}

// Tradução e alinhamento de uma entrada devocional individual
async function translateDevotionalEntry(enEntry, targetLang) {
    const rawKeyverse = enEntry.keyverse || '';
    
    // 1. Extração do Versículo e Referência em inglês
    let verseText = rawKeyverse;
    let verseRef = '';
    const match = rawKeyverse.match(/^(?:["'“”«»]?)(.+?)(?:["'“”«»]?)\s*[—–-]\s*(.+)$/);
    if (match) {
        verseText = match[1].trim();
        verseRef = match[2].trim();
    }

    // 2. Consulta Canônica na Bíblia NVI / RVR1960
    const canonical = lookupBibleVerse(verseRef, targetLang);
    let finalVerseText = '';
    let finalRef = '';

    if (canonical) {
        finalRef = canonical.ref;
        const fullBibleText = canonical.text;

        // Se o versículo bíblico inteiro for curto ou similar ao que Spurgeon citou, usa direto da NVI/RVR
        if (fullBibleText.length <= verseText.length * 1.5) {
            finalVerseText = fullBibleText;
        } else {
            // Se Spurgeon citou uma oração/cláusula, traduz com precisão e alinha termos NVI/RVR
            let tr = await translateWithRetry(verseText, targetLang);
            tr = tr.replace(/^["'“”«»]+|["'“”«»]+$/g, '').trim();
            if (THEOLOGICAL_REPLACEMENTS[targetLang]) {
                for (const item of THEOLOGICAL_REPLACEMENTS[targetLang]) {
                    tr = tr.replace(item.pattern, item.replace);
                }
            }
            finalVerseText = tr;
        }
    } else {
        // Fallback caso a referência seja atípica
        let tr = await translateWithRetry(verseText, targetLang);
        tr = tr.replace(/^["'“”«»]+|["'“”«»]+$/g, '').trim();
        if (THEOLOGICAL_REPLACEMENTS[targetLang]) {
            for (const item of THEOLOGICAL_REPLACEMENTS[targetLang]) {
                tr = tr.replace(item.pattern, item.replace);
            }
        }
        finalVerseText = tr;
        finalRef = await translateWithRetry(verseRef, targetLang);
    }

    const keyverseFinal = `"${finalVerseText}" — ${finalRef}`;
    await new Promise(r => setTimeout(r, 400));

    // 3. Tradução dos Parágrafos Limpos do Corpo
    const enParagraphs = extractCleanEnBody(enEntry.body);
    const translatedParagraphs = [];

    for (const para of enParagraphs) {
        let tr = await translateWithRetry(para, targetLang);
        
        // Aplica alinhamento teológico Spurgeoniano
        if (THEOLOGICAL_REPLACEMENTS[targetLang]) {
            for (const item of THEOLOGICAL_REPLACEMENTS[targetLang]) {
                tr = tr.replace(item.pattern, item.replace);
            }
        }
        
        translatedParagraphs.push(tr.trim());
        await new Promise(r => setTimeout(r, 600));
    }

    const bodyFinal = translatedParagraphs.join('\n\n');

    return {
        date: enEntry.date,
        time: enEntry.time,
        month: enEntry.month,
        day: enEntry.day,
        keyverse: keyverseFinal,
        body: bodyFinal
    };
}

// Atualiza o arquivo mensal correspondente (ex: public/data/devotional/pt/10.json)
function updateMonthlyShard(entry, targetLang) {
    const monthStr = entry.month.toString().padStart(2, '0');
    const shardPath = path.join(DEVOTIONAL_DIR, targetLang, `${monthStr}.json`);
    
    if (fs.existsSync(shardPath)) {
        try {
            const shardData = JSON.parse(fs.readFileSync(shardPath, 'utf8'));
            const idx = shardData.findIndex(e => e && e.date === entry.date && e.time === entry.time);
            if (idx >= 0) {
                shardData[idx] = entry;
            } else {
                shardData.push(entry);
            }
            fs.writeFileSync(shardPath, JSON.stringify(shardData, null, 2), 'utf8');
        } catch (e) {
            console.error(`Erro ao atualizar shard mensal ${shardPath}:`, e.message);
        }
    }
}

// PROGRAMA PRINCIPAL
async function main() {
    console.log('════════════════════════════════════════════════════════════════════');
    console.log('  MOTOR DE TRADUÇÃO TEOLÓGICA DOS DEVOCIONAIS (SPURGEON.TV)');
    console.log('  Padrão: NVI (Português) | RVR1960 (Espanhol) | Início: 28/10');
    console.log('════════════════════════════════════════════════════════════════════\n');

    ensureBackup();

    const args = process.argv.slice(2);
    let fromDate = null;
    let toDate = null;
    let daysLimit = null;
    let targetLangs = ['pt', 'es'];
    let forceOverwrite = false;
    let showStatusOnly = false;

    function normalizeDateStr(dStr) {
        if (!dStr) return null;
        const parts = dStr.split(/[-/]/);
        if (parts.length === 2) {
            const m = parseInt(parts[0], 10);
            const d = parseInt(parts[1], 10);
            return `${m}-${d}`;
        }
        return dStr;
    }

    let processAll = false;

    for (const arg of args) {
        if (arg.startsWith('--from=')) fromDate = normalizeDateStr(arg.split('=')[1].trim());
        else if (arg.startsWith('--to=')) toDate = normalizeDateStr(arg.split('=')[1].trim());
        else if (arg.startsWith('--days=')) daysLimit = parseInt(arg.split('=')[1], 10);
        else if (arg.startsWith('--lang=')) targetLangs = [arg.split('=')[1].trim().toLowerCase()];
        else if (arg === '--all') processAll = true;
        else if (arg === '--force') forceOverwrite = true;
        else if (arg === '--status') showStatusOnly = true;
    }

    const allChronologicalDates = generateChronologicalDates();
    const status = loadStatus();

    if (showStatusOnly) {
        console.log('📊 STATUS ATUAL DO CICLO DEVOCIONAL:');
        console.log(`   Total de dias no ciclo anual: ${allChronologicalDates.length} dias (732 meditações)`);
        console.log(`   Meditações concluídas em PT: ${status.translated.pt.length} / 732`);
        console.log(`   Meditações concluídas em ES: ${status.translated.es.length} / 732`);
        console.log(`   Último dia processado: ${status.lastCompleted || 'Nenhum ainda (Pronto para 28/10)'}`);
        return;
    }

    // Carrega os arquivos mestre
    const enMaster = JSON.parse(fs.readFileSync(MASTER_EN, 'utf8'));
    const ptMaster = JSON.parse(fs.readFileSync(MASTER_PT, 'utf8'));
    const esMaster = JSON.parse(fs.readFileSync(MASTER_ES, 'utf8'));

    // Determina a lista de datas a processar
    let datesToProcess = [];
    if (fromDate && toDate) {
        const startIdx = allChronologicalDates.indexOf(fromDate);
        const endIdx = allChronologicalDates.indexOf(toDate);
        if (startIdx >= 0 && endIdx >= startIdx) {
            datesToProcess = allChronologicalDates.slice(startIdx, endIdx + 1);
        } else {
            console.error(`❌ Intervalo inválido: ${fromDate} até ${toDate}`);
            return;
        }
    } else if (daysLimit) {
        // Encontra o primeiro dia não concluído
        let startIdx = 0;
        for (let i = 0; i < allChronologicalDates.length; i++) {
            const d = allChronologicalDates[i];
            const amDone = status.translated.pt.includes(`${d}-am`);
            const pmDone = status.translated.pt.includes(`${d}-pm`);
            if (!amDone || !pmDone || forceOverwrite) {
                startIdx = i;
                break;
            }
        }
        datesToProcess = allChronologicalDates.slice(startIdx, startIdx + daysLimit);
    } else if (processAll) {
        // Encontra o primeiro dia não concluído e processa até o final do ciclo de 366 dias sem parar
        let startIdx = 0;
        for (let i = 0; i < allChronologicalDates.length; i++) {
            const d = allChronologicalDates[i];
            const amDone = status.translated.pt.includes(`${d}-am`);
            const pmDone = status.translated.pt.includes(`${d}-pm`);
            if (!amDone || !pmDone || forceOverwrite) {
                startIdx = i;
                break;
            }
        }
        datesToProcess = allChronologicalDates.slice(startIdx);
    } else {
        // Padrão se nada especificado: continua de onde parou em lotes de 7 dias
        let startIdx = 0;
        for (let i = 0; i < allChronologicalDates.length; i++) {
            const d = allChronologicalDates[i];
            const amDone = status.translated.pt.includes(`${d}-am`);
            const pmDone = status.translated.pt.includes(`${d}-pm`);
            if (!amDone || !pmDone || forceOverwrite) {
                startIdx = i;
                break;
            }
        }
        datesToProcess = allChronologicalDates.slice(startIdx, startIdx + 7);
    }

    console.log(`📅 Datas selecionadas para tradução (${datesToProcess.length} dias):`);
    console.log(`   De ${datesToProcess[0]} até ${datesToProcess[datesToProcess.length - 1]}`);
    console.log(`   Idiomas alvo: ${targetLangs.map(l => l.toUpperCase()).join(', ')}`);
    console.log('────────────────────────────────────────────────────────────────────\n');

    let totalSaved = 0;

    for (const dateStr of datesToProcess) {
        if (isStopping) break;

        for (const time of ['am', 'pm']) {
            if (isStopping) break;

            const timeLabel = time === 'am' ? 'Manhã' : 'Noite';
            const entryKey = `${dateStr}-${time}`;

            // Encontra a entrada no inglês
            const enEntry = enMaster.find(e => e && e.date === dateStr && e.time === time);
            if (!enEntry) continue;

            console.log(`📖 Processando: ${dateStr} (${timeLabel}) ...`);

            for (const lang of targetLangs) {
                if (isStopping) break;

                // Verifica se já foi traduzido anteriormente (a menos que seja --force)
                if (!forceOverwrite && status.translated[lang].includes(entryKey)) {
                    console.log(`   ⏩ [${lang.toUpperCase()}] Já traduzido anteriormente. Pulando.`);
                    continue;
                }

                try {
                    const translatedEntry = await translateDevotionalEntry(enEntry, lang);
                    
                    // Atualiza o mestre na memória
                    const masterArray = lang === 'pt' ? ptMaster : esMaster;
                    const mIdx = masterArray.findIndex(e => e && e.date === dateStr && e.time === time);
                    if (mIdx >= 0) {
                        masterArray[mIdx] = translatedEntry;
                    } else {
                        masterArray.push(translatedEntry);
                    }

                    // Atualiza o arquivo mensal sharded do Next.js
                    updateMonthlyShard(translatedEntry, lang);

                    // Registra no status
                    if (!status.translated[lang].includes(entryKey)) {
                        status.translated[lang].push(entryKey);
                    }
                    status.lastCompleted = `${dateStr} (${timeLabel})`;
                    saveStatus(status);

                    console.log(`   ✓ [${lang.toUpperCase()}] Salvo! Versículo: ${translatedEntry.keyverse}`);
                    totalSaved++;
                } catch (err) {
                    console.error(`   ❌ [${lang.toUpperCase()}] Erro ao traduzir:`, err.message);
                }
            }

            // Salva os arquivos mestres a cada meditação para garantir persistência imediata
            if (targetLangs.includes('pt')) fs.writeFileSync(MASTER_PT, JSON.stringify(ptMaster), 'utf8');
            if (targetLangs.includes('es')) fs.writeFileSync(MASTER_ES, JSON.stringify(esMaster), 'utf8');
            console.log('');
        }
    }

    // Gravação final
    if (targetLangs.includes('pt')) fs.writeFileSync(MASTER_PT, JSON.stringify(ptMaster), 'utf8');
    if (targetLangs.includes('es')) fs.writeFileSync(MASTER_ES, JSON.stringify(esMaster), 'utf8');

    console.log('════════════════════════════════════════════════════════════════════');
    if (isStopping) {
        console.log('🛑 Execução pausada com segurança pelo usuário (Ctrl+C).');
        console.log(`   Total de meditações salvas nesta sessão: ${totalSaved}`);
        console.log(`   Último ponto concluído: ${status.lastCompleted}`);
        console.log('   Para continuar a qualquer momento, basta executar novamente:');
        console.log('   npm run translate:devotional');
    } else {
        console.log('🎉 Lote concluído com sucesso!');
        console.log(`   Total de meditações atualizadas: ${totalSaved}`);
        console.log(`   Último dia processado: ${status.lastCompleted}`);
        console.log('   Para traduzir os próximos dias, execute:');
        console.log('   node scripts/translate-devotional.js --days=7');
    }
    console.log('════════════════════════════════════════════════════════════════════');
}

main().catch(err => {
    console.error('Erro crítico no processo:', err);
    process.exit(1);
});
