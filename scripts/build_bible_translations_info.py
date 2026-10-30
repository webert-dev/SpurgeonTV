# -*- coding: utf-8 -*-
"""
Comprehensive Scholarly Database of Bible Translations for SpurgeonTV.
Languages: English (en), Portuguese (pt), Spanish (es).
Generates lib/bible-translations-info.js
"""

import json
import os

BIBLE_DATA = {}

def reg(key, en, pt, es):
    BIBLE_DATA[key] = {
        'key': key,
        'en': en,
        'pt': pt,
        'es': es
    }

# ==============================================================================
# 1. KJV (King James Version 1611 / 1769)
# ==============================================================================
reg(
    'kjv',
    en={
        'name': 'King James Version (KJV)',
        'fullName': 'The Authorized King James Version (1611 / 1769 Blayney Revision)',
        'year': '1611 (Standardized 1769)',
        'abbrev': 'KJV',
        'language': 'English',
        'philosophy': 'Formal Equivalence (Literal Word-for-Word Fidelity)',
        'manuscripts': 'Old Testament: Masoretic Text (Second Rabbinic Bible by Jacob ben Hayyim / Daniel Bomberg, Venice, 1524–1525). New Testament: Textus Receptus (primarily Robert Estienne/Stephanus 1550 and Theodore Beza 1598 editions).',
        'translators': 'Commissioned by King James I of England following the Hampton Court Conference (1604). Translated by 47 eminent scholars and linguists organized into six working companies across Westminster, Oxford, and Cambridge (including Lancelot Andrewes, Edward Lively, and John Bois).',
        'history': (
            'Commissioned in 1604 to resolve ecclesiastical friction between Anglicans and Puritans, '
            'the King James Version sought a single, majestic, and unified translation without divisive marginal polemics. '
            'The six translation committees met rigorously for seven years, comparing Tyndale, Coverdale, the Matthew Bible, '
            'the Great Bible, the Bishops’ Bible, and the Geneva Bible against the original Hebrew and Greek texts. '
            'Published by the King’s Printer Robert Barker in 1611, it became the undisputed English Bible for over three centuries, '
            'shaping modern English vocabulary, idioms, syntax, and Christian preaching across the British Empire and America.'
        ),
        'features': [
            'Profound literary cadence designed specifically for oral reading and public preaching in Christian assemblies.',
            'Italicized words indicate words supplied by translators to complete English grammar not explicitly present in original manuscripts.',
            'Distinct singular ("thou/thee/thy") and plural ("ye/you/your") pronouns, reflecting precise Greek and Hebrew grammar.',
            'Renders the Divine Name (Tetragrammaton YHWH) as "LORD" in small capitals, and "Jehovah" in specific exalted instances (Exodus 6:3; Psalm 83:18).',
            'Incorporates the standardized Oxford spelling and punctuation revised by Dr. Benjamin Blayney in 1769.'
        ],
        'theologyAndLegacy': (
            'The King James Version was the foundational pulpit Bible of Charles Haddon Spurgeon throughout his entire 38-year '
            'ministry at the Metropolitan Tabernacle in London. Spurgeon famously proclaimed: "This volume is the city of God, '
            'whereof the Lord is the eternal light... Love this book, believe it, practice it, and you shall never be ashamed." '
            'Its rich theological vocabulary (justification, propitiation, redemption, sanctification) formed the backbone of English Reformed and Evangelical theology.'
        ),
        'scopeAndUsage': 'Unquestionably the most printed and influential book in the history of the English language, used globally in public worship, personal devotions, and classical literature.',
        'copyright': 'Public Domain worldwide (Perpetual Crown Copyright held by the British Crown in the United Kingdom via Cambridge University Press).'
    },
    pt={
        'name': 'King James Version (KJV)',
        'fullName': 'The Authorized King James Version (1611 / Revisão de Blayney de 1769)',
        'year': '1611 (Padronizada em 1769)',
        'abbrev': 'KJV',
        'language': 'Inglês',
        'philosophy': 'Equivalência Formal Estrita (Fidelidade Literal Palavra por Palavra)',
        'manuscripts': 'Antigo Testamento: Texto Massorético Hebraico (Segunda Bíblia Rabínica de Daniel Bomberg / Jacob ben Hayyim, 1524–1525). Novo Testamento: Textus Receptus Grego (principalmente edições de Robert Estienne/Stephanus 1550 e Theodore Beza 1598).',
        'translators': 'Comissionada pelo Rei James I da Inglaterra após a Conferência de Hampton Court (1604). Executada por 47 dos maiores eruditos, linguistas e teólogos da época, divididos em seis companhias de tradução em Westminster, Oxford e Cambridge (incluindo Lancelot Andrewes e John Bois).',
        'history': (
            'Convocada em 1604 para pacificar as tensões entre anglicanos e puritanos, a King James Version almejava uma tradução pública única, '
            'solene e autorizada, desprovida de notas marginais polêmicas. Durante sete anos, as comissões examinaram minuciosamente as traduções de '
            'William Tyndale, Miles Coverdale, a Bíblia de Genebra e a Bíblia dos Bispos, cotejando cada versículo diretamente com os originais hebraicos e gregos. '
            'Publicada em 1611 pelo impressor real Robert Barker, consolidou-se como o padrão supremo da língua inglesa por mais de três séculos, moldando a literatura ocidental.'
        ),
        'features': [
            'Cadência rítmica e majestade sonora concebida propositalmente para proclamação em voz alta no púlpito.',
            'Uso sistemático de itálicos para indicar palavras adicionadas pelos tradutores para clareza em inglês que não constavam explicitamente no original.',
            'Distinção rigorosa entre pronomes da segunda pessoa do singular ("thou/thee") e do plural ("ye/you"), refletindo fielmente a morfologia grega e hebraica.',
            'Tradução do Tetragrama YHWH como "LORD" (SENHOR em versalete) e "Jehovah" em passagens emblemáticas (Êxodo 6:3; Salmo 83:18).',
            'Adota a padronização ortográfica e tipográfica clássica de Oxford, realizada pelo Dr. Benjamin Blayney em 1769.'
        ],
        'theologyAndLegacy': (
            'A KJV foi a Bíblia de púlpito e de coração de Charles Haddon Spurgeon durante todo o seu lendário ministério no Metropolitan Tabernacle de Londres. '
            'Spurgeon afirmava que as páginas da Authorized Version eram ricas como as minas de Ofir e doces como o favo de mel. '
            'Sua teologia calvinista e batista floresceu respaldada na riqueza vocabular e exatidão doutrinária desta tradução.'
        ),
        'scopeAndUsage': 'A obra literária mais publicada e influente de todos os tempos no mundo de língua inglesa, reverenciada globalmente por pregadores, acadêmicos e leigos.',
        'copyright': 'Domínio Público mundial (sob prerrogativa Perpétua da Coroa Britânica administrada pela Cambridge University Press apenas no Reino Unido).'
    },
    es={
        'name': 'King James Version (KJV)',
        'fullName': 'The Authorized King James Version (1611 / Revisión de Blayney de 1769)',
        'year': '1611 (Estandarizada en 1769)',
        'abbrev': 'KJV',
        'language': 'Inglés',
        'philosophy': 'Equivalencia Formal Estricta (Fidelidad Literal Palabra por Palabra)',
        'manuscripts': 'Antiguo Testamento: Texto Masorético Hebreo (Segunda Biblia Rabínica de Bomberg / Jacob ben Hayyim, 1524–1525). Nuevo Testamento: Textus Receptus Griego (edición de Stephanus 1550 y Beza 1598).',
        'translators': 'Encargada por el rey Jacobo I de Inglaterra tras la Conferencia de Hampton Court (1604). Realizada por 47 eminentes eruditos bíblicos y lingüistas organizados en seis compañías en Westminster, Oxford y Cambridge.',
        'history': (
            'Comisionada en 1604 para brindar una versión autorizada y sin notas sectarias que unificara a la iglesia angloparlante. '
            'Durante siete años de exhaustiva labor colegiada, los eruditos compararon las traducciones de Tyndale y la Biblia de Ginebra con los textos originales. '
            'Impresa en 1611, se convirtió en la cúspide de la lengua inglesa y en el texto canónico indiscutible del cristianismo anglosajón por más de trescientos años.'
        ),
        'features': [
            'Prosa de extraordinaria belleza poética y musicalidad, creada especialmente para la proclamación pública desde el púlpito.',
            'Letras cursivas (itálicas) que señalan vocablos necesarios en inglés que no aparecen en los manuscritos hebreos o griegos originales.',
            'Diferenciación exacta de pronombres singulares y plurales de segunda persona, preservando la precisión gramatical bíblica.',
            'Representación del Nombre Divino YHWH como "LORD" (SEÑOR en mayúsculas pequeñas) y "Jehovah" en proclamaciones solemnes.',
            'Edición estandarizada conforme a la revisión de Oxford de 1769 dirigida por el Dr. Benjamin Blayney.'
        ],
        'theologyAndLegacy': (
            'Fue la versión viva desde la cual predicó Charles H. Spurgeon durante más de 38 años en el Tabernáculo Metropolitano de Londres. '
            'Spurgeon la describió como un manantial inagotable de gracia y autoridad evangélica, inspirando a generaciones de predicadores reformados y puritanos.'
        ),
        'scopeAndUsage': 'La traducción bíblica más distribuida e influyente de la historia en el idioma inglés, venerada en congregaciones, seminarios y academias internacionales.',
        'copyright': 'Dominio Público universal (con derechos de Corona administrados por Cambridge University Press en el Reino Unido).'
    }
)

# ==============================================================================
# 2. NIV (New International Version 1984 Edition)
# ==============================================================================
reg(
    'niv',
    en={
        'name': 'New International Version (NIV 1984)',
        'fullName': 'The Holy Bible: New International Version (1984 Classic Edition)',
        'year': '1978 (Complete Bible), 1984 (Canonical Classic Revision)',
        'abbrev': 'NIV 1984',
        'language': 'English',
        'philosophy': 'Optimal Equivalence (Balance of Formal Accuracy and Natural Modern Clarity)',
        'manuscripts': 'Old Testament: Biblia Hebraica Stuttgartensia (Masoretic Text), Samaritan Pentateuch, Septuagint, and Dead Sea Scrolls. New Testament: Eclectic Greek New Testament (Nestle-Aland 26th / United Bible Societies 3rd edition).',
        'translators': 'Committee on Bible Translation (CBT), sponsored by the New York International Bible Society (now Biblica). Over 100 interdenominational evangelical scholars from the United States, Great Britain, Canada, Australia, and New Zealand, chaired by Dr. Edwin H. Palmer and Dr. Kenneth L. Barker.',
        'history': (
            'The NIV originated in the 1950s and 1960s among evangelical scholars who recognized the need for a contemporary English translation '
            'that was not tied to Elizabethan archaic English (like the KJV) nor compromised by theological liberalism (felt by many in the RSV). '
            'In 1965, committees from the Christian Reformed Church and the National Association of Evangelicals met in Palos Heights and Chicago, '
            'initiating the project. The New Testament appeared in 1973, the full Bible in 1978, and the landmark 1984 revision became the gold standard '
            'evangelical Bible for three decades.'
        ),
        'features': [
            'Avoids both wooden hyper-literalism and paraphrastic liberties, translating thought-for-thought where necessary while preserving grammatical contours.',
            'Retains traditional theological terminology (e.g., "justification", "covenant", "saints", "propitiation").',
            'Preserves historical gender references faithfully reflecting the Hebrew and Greek text (e.g., Psalm 1:1 "Blessed is the man", 1 Tim 2:12), unlike later 2011 gender-neutral revisions.',
            'Poetic formatting for Hebrew poetry, wisdom literature, and prophecies with indented parallelisms.',
            'Extensive translational footnotes detailing alternative readings in ancient manuscripts (Septuagint, Dead Sea Scrolls, Vulgate).'
        ],
        'theologyAndLegacy': (
            'The 1984 edition of the NIV is widely recognized as the peak of modern evangelical Bible translation. '
            'It was praised by theologians such as J. I. Packer, D. A. Carson, John Stott, and F. F. Bruce. '
            'When publisher Biblica withdrew the 1984 edition in 2011 to replace it with a gender-modified text, '
            'millions of evangelical pastors, theologians, and churches worldwide rallied to preserve the 1984 text as their canonical study standard.'
        ),
        'scopeAndUsage': 'The best-selling Bible translation in the English-speaking world from 1986 to 2011, standard across thousands of evangelical churches and seminaries.',
        'copyright': 'Copyright © 1973, 1978, 1984 by Biblica, Inc. (formerly International Bible Society). Archived for classical historical study.'
    },
    pt={
        'name': 'New International Version (NIV 1984)',
        'fullName': 'The Holy Bible: New International Version (Edição Clássica de 1984)',
        'year': '1978 (Bíblia Completa), 1984 (Revisão Canônica Clássica)',
        'abbrev': 'NIV 1984',
        'language': 'Inglês',
        'philosophy': 'Equivalência Equilibrada / Ótima (Equilíbrio entre Precisão e Clareza Contemporânea)',
        'manuscripts': 'Antigo Testamento: Biblia Hebraica Stuttgartensia (Texto Massorético), Manuscritos do Mar Morto e Septuaginta. Novo Testamento: Texto Crítico Eclético Grego (Nestle-Aland 26ª ed. / Sociedades Bíblicas Unidas 3ª ed.).',
        'translators': 'Committee on Bible Translation (CBT), patrocinado pela Sociedade Bíblica Internacional (Biblica). Mais de 100 eruditos e biblistas evangélicos dos EUA, Grã-Bretanha, Canadá, Austrália e Nova Zelândia, sob a liderança do Dr. Edwin H. Palmer e Dr. Kenneth L. Barker.',
        'history': (
            'Nascida na década de 1960 da necessidade de uma tradução moderna em língua inglesa fiel à inerrância bíblica, '
            'livre do inglês arcaico da KJV e das inclinações teológicas liberais percebidas na RSV. '
            'O Novo Testamento foi lançado em 1973 e a Bíblia completa em 1978. A revisão de 1984 alcançou aclamação global, '
            'tornando-se por mais de 25 anos a Bíblia de cabeceira e de púlpito de quase todo o mundo evangélico de língua inglesa.'
        ),
        'features': [
            'Comunicação natural em inglês contemporâneo de alto nível, mantendo fidelidade absoluta ao sentido gramatical original.',
            'Preservação rigorosa dos termos teológicos clássicos da fé cristã histórica (propiciação, justificação, redenção).',
            'Fidelidade ao gênero dos termos bíblicos originais (ex.: Salmo 1:1 "Blessed is the man", 1 Tm 2:12), sem adoção de linguagem neutra.',
            'Estrutura poética com recuos e paralelismos hebraicos nos livros sapienciais e proféticos.',
            'Notas de rodapé que documentam variantes textuais significativas de manuscritos antigos.'
        ],
        'theologyAndLegacy': (
            'Considerada a "edição de ouro" da NIV em inglês. Apoiada por teólogos de estatura como J. I. Packer, F. F. Bruce e D. A. Carson. '
            'A substituição forçada desta edição em 2011 por uma revisão com linguagem neutra gerou grande resistência entre evangélicos tradicionais, '
            'fazendo com que a edição de 1984 se tornasse um tesouro raro e altamente valorizado para estudos e pregação bíblica.'
        ),
        'scopeAndUsage': 'A versão bíblica mais vendida e citada do mundo anglófono nas décadas de 1980, 1990 e 2000.',
        'copyright': 'Copyright © 1973, 1978, 1984 por Biblica, Inc. Preservada para pesquisa teológica e estudo histórico.'
    },
    es={
        'name': 'New International Version (NIV 1984)',
        'fullName': 'The Holy Bible: New International Version (Edición Clásica de 1984)',
        'year': '1978 (Biblia Completa), 1984 (Revisión Canónica Clásica)',
        'abbrev': 'NIV 1984',
        'language': 'Inglés',
        'philosophy': 'Equivalencia Óptima (Equilibrio entre Precisión Formal y Fluidez Moderna)',
        'manuscripts': 'Antiguo Testamento: Biblia Hebraica Stuttgartensia (Texto Masorético) y Rollos del Mar Muerto. Nuevo Testamento: Texto Crítico Griego (Nestle-Aland 26ª ed. / UBS 3ª ed.).',
        'translators': 'Committee on Bible Translation (CBT), auspiciado por Biblica (antes International Bible Society). Más de 100 eruditos bíblicos evangélicos internacionales liderados por el Dr. Edwin H. Palmer.',
        'history': (
            'Surgida en la década de 1960 para ofrecer al mundo de habla inglesa una traducción contemporánea de máxima fidelidad bíblica. '
            'Publicada en 1978 y perfeccionada en su célebre revisión de 1984, fue el texto estándar más leído y respetado por predicadores y seminaristas evangélicos durante tres décadas.'
        ),
        'features': [
            'Prosa inglesa moderna fluida, ideal para lectura continua y memorización devocional.',
            'Mantiene los términos teológicos clásicos de la teología reformada y evangélica.',
            'Fidelidad a la traducción literal de géneros en textos canónicos (ej. Salmo 1:1 "Blessed is the man") antes de las revisiones de lenguaje neutro de 2011.',
            'Estructuración poética fiel de los paralelismos hebreos en Salmos y Profetas.'
        ],
        'theologyAndLegacy': (
            'La edición de 1984 es considerada la cúspide de la traducción evangélica moderna en inglés. '
            'Cuando la editorial la descatalogó en 2011 para promover una revisión de lenguaje inclusivo, miles de iglesias mantuvieron la edición de 1984 como su texto canónico inalterable.'
        ),
        'scopeAndUsage': 'La Biblia moderna en inglés más vendida y distribuida entre 1986 y 2011 en los Estados Unidos, Reino Unido y países de la Mancomunidad.',
        'copyright': 'Copyright © 1973, 1978, 1984 por Biblica, Inc. Preservada para consulta y estudio histórico canónico.'
    }
)

# Also register 'niv1984' alias pointing to 'niv'
BIBLE_DATA['niv1984'] = BIBLE_DATA['niv']

print("KJV & NIV registered.")
