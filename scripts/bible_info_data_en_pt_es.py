# -*- coding: utf-8 -*-
"""
Builder for comprehensive Bible translation info database.
Covers 27 versions in PT, EN, and ES.
"""
import json
import os

DATA = {}

def add_entry(key, en_data, pt_data, es_data):
    DATA[key] = {
        'key': key,
        'en': en_data,
        'pt': pt_data,
        'es': es_data
    }

# 1. KJV
add_entry(
    'kjv',
    en_data={
        'name': 'King James Version (KJV)',
        'fullName': 'The Authorized King James Version (1611 / 1769 Blayney Revision)',
        'year': '1611 (Standardized 1769)',
        'abbrev': 'KJV',
        'language': 'English',
        'philosophy': 'Formal Equivalence (Word-for-Word Literal Fidelity)',
        'manuscripts': 'Old Testament: Masoretic Text (Second Rabbinic Bible by Jacob ben Hayyim / Daniel Bomberg, 1524–1525). New Testament: Textus Receptus (primarily Robert Estienne/Stephanus 1550 and Theodore Beza 1598 editions).',
        'translators': 'Commissioned by King James I of England following the Hampton Court Conference (1604). 47 eminent scholars and linguists organized into six working companies at Westminster, Oxford, and Cambridge (including Lancelot Andrewes, Edward Lively, and John Bois).',
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
    pt_data={
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
    es_data={
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

print("KJV added.")
