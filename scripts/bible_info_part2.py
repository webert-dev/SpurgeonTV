# -*- coding: utf-8 -*-
"""
Bible Translation Data - Part 2:
- rvr (Reina-Valera 1909 - Antigua)
- frlsg (Louis Segond 1910 - Francês)
- lut (Lutherbibel 1545/1912 - Alemão)
- cuv (Chinese Union Version 1919 - Chinês Tradicional)
- synod (Tradução Sinodal Russa 1876 - Russo)
- svd (Smith & Van Dyck 1865 - Árabe)
- krv (Korean Revised Version 1961 - Coreano)
- vi1934 (Kinh Thánh 1934 - Vietnamita)
- ncv (New Chinese Version 1992/2001 - Chinês Moderno)
"""

PART2 = {}

def reg(k, en, pt, es):
    PART2[k] = {'key': k, 'en': en, 'pt': pt, 'es': es}

# 10. RVR (Reina-Valera 1909)
reg(
    'rvr',
    en={
        'name': 'Reina-Valera 1909 (RVR 1909)',
        'fullName': 'Santa Biblia: Antigua Versión de Casiodoro de Reina (1569), Revisada por Cipriano de Valera (1602) y Cotejada en 1909',
        'year': '1909 (Historic 1909 Revision)',
        'abbrev': 'RVR 1909',
        'language': 'Spanish',
        'philosophy': 'Formal Equivalence (Historic Castilian Reformation Heritage, Unaltered Textus Receptus)',
        'manuscripts': 'Old Testament: Masoretic Text (Second Rabbinic Bible of Bomberg / Ben Hayyim). New Testament: Textus Receptus.',
        'translators': 'Casiodoro de Reina (1569), Cipriano de Valera (1602), revised by an international committee of the British and Foreign Bible Society (BFBS) and the American Bible Society (ABS) in 1909.',
        'history': (
            'The 1909 edition represented the monumental standard revision of the classic Reina-Valera Bible throughout the entire late 19th and early 20th century. '
            'It preserved the archaic majesty and classical Golden Age Spanish prose while correcting printing errors of earlier centuries. '
            'Because it is completely in the public domain worldwide, it has remained a beloved classic for traditional believers and open-source ministries.'
        ),
        'features': [
            'Historic Golden Age Spanish vocabulary with antique grammatical charm and solemnity.',
            'Unwavering adherence to the Reformation Textus Receptus and Masoretic Text.',
            'Fully in the public domain worldwide without copyright encumbrances.'
        ],
        'theologyAndLegacy': (
            'The version that carried the evangelical faith across Latin America during the late 19th and early 20th century missionary movements. '
            'Historically contemporaneous with Spurgeon’s later ministry and initial Spanish translations.'
        ),
        'scopeAndUsage': 'Revered in traditional, independent, and fundamental Baptist and Presbyterian churches across Spain and Latin America.',
        'copyright': 'Public Domain worldwide.'
    },
    pt={
        'name': 'Reina-Valera 1909 (RVR 1909)',
        'fullName': 'Santa Biblia: Antigua Versión de Casiodoro de Reina (1569), Revisada por Cipriano de Valera (1602) e Padronizada em 1909',
        'year': '1909',
        'abbrev': 'RVR 1909',
        'language': 'Espanhol',
        'philosophy': 'Equivalência Formal Histórica (Herança Reformada Espanhola e Textus Receptus)',
        'manuscripts': 'Antigo Testamento: Texto Massorético Hebraico. Novo Testamento: Textus Receptus Grego.',
        'translators': 'Casiodoro de Reina (1569), Cipriano de Valera (1602), revisada pela Sociedade Bíblica Britânica e Estrangeira (BFBS) em 1909.',
        'history': (
            'A célebre edição de 1909 foi a Bíblia padrão que acompanhou os pioneiros missionários evangélicos por toda a América Latina e Espanha. '
            'Preserva a majestade do Século de Ouro da literatura espanhola com total fidelidade ao Textus Receptus. '
            'Encontra-se em Domínio Público universal, sendo um patrimônio histórico imorredouro do cristianismo hispânico.'
        ),
        'features': [
            'Castelhano clássico e reverente com o sabor da literatura do Século de Ouro.',
            'Fidelidade irrestrita aos textos da Reforma Protestante.',
            'Totalmente livre de direitos autorais no mundo inteiro.'
        ],
        'theologyAndLegacy': (
            'A Bíblia histórica que consolidou o protestantismo na América Latina na virada do século XIX para o XX.'
        ),
        'scopeAndUsage': 'Amada por comunidades conservadoras e amplamente utilizada em projetos de distribuição gratuita da Bíblia.',
        'copyright': 'Domínio Público universal.'
    },
    es={
        'name': 'Reina-Valera 1909 (RVR 1909)',
        'fullName': 'Santa Biblia: Antigua Versión de Casiodoro de Reina (1569), Revisada por Cipriano de Valera (1602) y Cotejada en 1909',
        'year': '1909',
        'abbrev': 'RVR 1909',
        'language': 'Español',
        'philosophy': 'Equivalencia Formal Clásica (Patrimonio de la Reforma Española y Textus Receptus)',
        'manuscripts': 'Antiguo Testamento: Texto Masorético. Nuevo Testamento: Textus Receptus.',
        'translators': 'Casiodoro de Reina (1569), Cipriano de Valera (1602), revisada bajo los auspicios de la Sociedad Bíblica Británica y Extranjera (1909).',
        'history': (
            'La histórica edición de 1909 fue el texto estándar que acompañó el gran despertar evangélico en el mundo de habla hispana '
            'a finales del siglo XIX y comienzos del XX. Mantiene el sabor clásico de los grandes reformadores protestantes españoles.'
        ),
        'features': [
            'Castellano antiguo solemne y venerable.',
            'Alineada enteramente con el Textus Receptus.',
            'Completamente en Dominio Público universal sin restricciones de copia ni impresión.'
        ],
        'theologyAndLegacy': (
            'El baluarte histórico de los primeros creyentes protestantes en España y América Latina.'
        ),
        'scopeAndUsage': 'Muy leída en congregaciones tradicionales e iglesias de herencia puritana.',
        'copyright': 'Dominio Público universal.'
    }
)

# 11. FRLSG (Louis Segond 1910 - Francês)
reg(
    'frlsg',
    en={
        'name': 'Louis Segond 1910 (LSG)',
        'fullName': 'La Sainte Bible: Traduction de Louis Segond (Édition Classique Révisée de 1910)',
        'year': '1880 (Complete Bible), 1910 (Landmark Revision)',
        'abbrev': 'LSG',
        'language': 'French',
        'philosophy': 'Formal Equivalence (Elegance, Literary Dignity, and Grammatical Faithfulness)',
        'manuscripts': 'Old Testament: Masoretic Text (Biblia Hebraica). New Testament: Textus Receptus with critical manuscript consultations.',
        'translators': 'Dr. Louis Segond (1810–1885), distinguished Swiss Protestant pastor and theologian at the University of Geneva, commissioned by the Compagnie des Pasteurs de Genève.',
        'history': (
            'Until the late 19th century, French-speaking Protestants relied on archaic revisions of the 1535 Olivétan Bible. '
            'Dr. Louis Segond, a master of Semitic languages, spent fifteen years translating the Old Testament directly from Hebrew (published 1874) '
            'and the New Testament from Greek (1880). Following his death, the British and Foreign Bible Society and the Société Biblique de France '
            'issued the definitive 1910 revision, which established the Segond text as the universal monument of French Protestantism.'
        ),
        'features': [
            'The undisputed "French King James Version", holding unmatched authority in francophone Protestant churches.',
            'Remarkable clarity and elegance of classical French literary prose.',
            'Meticulous formal correspondence to Hebrew and Greek theological terms.',
            'Renders the divine Tetragrammaton YHWH as "l\'Éternel" (The Eternal One), continuing the profound French Protestant tradition.'
        ],
        'theologyAndLegacy': (
            'The Louis Segond Bible gave voice to the gospel across France, French Switzerland, Belgium, Quebec, and Francophone Africa. '
            'All French translations of Charles Spurgeon’s sermons and devotions during the 20th century were harmonized with the Segond 1910 text.'
        ),
        'scopeAndUsage': 'The standard pulpit and reading Bible across more than 30 French-speaking nations in Europe, North America, and Africa.',
        'copyright': 'Public Domain worldwide.'
    },
    pt={
        'name': 'Louis Segond 1910 (LSG)',
        'fullName': 'La Sainte Bible: Traduction de Louis Segond (Édition Classique Révisée de 1910)',
        'year': '1880 (Bíblia Completa), 1910 (Revisão Clássica Definitiva)',
        'abbrev': 'LSG',
        'language': 'Francês',
        'philosophy': 'Equivalência Formal Clássica (Elegância Literária, Rigor e Dignidade Teológica)',
        'manuscripts': 'Antigo Testamento: Texto Massorético Hebraico. Novo Testamento: Textus Receptus Grego com cotejo dos códices antigos.',
        'translators': 'Dr. Louis Segond (1810–1885), eminente pastor reformado e teólogo suíço da Universidade de Genebra, comissionado pela prestigiosa Compagnie des Pasteurs de Genève.',
        'history': (
            'Até o final do século XIX, os protestantes franceses dependiam de revisões arcaicas da Bíblia de Olivétan de 1535. '
            'O Dr. Louis Segond dedicou quinze anos de sua vida a verter o texto sagrado diretamente dos originais hebraicos e gregos. '
            'O Antigo Testamento surgiu em 1874 e o Novo em 1880. A célebre revisão de 1910 aperfeiçoou o vocabulário e consagrou a obra '
            'como a Bíblia padrão inabalável do protestantismo francófono mundial.'
        ),
        'features': [
            'A indiscutível correspondente da King James no idioma francês, padrão em todas as igrejas reformadas e evangélicas de fala francesa.',
            'Elegância poética e pureza clássica da língua francesa.',
            'Traduz o nome YHWH como "l\'Éternel" (O Eterno), seguindo a venerável tradição teológica da Reforma de Genebra.',
            'Fidelidade cirúrgica à gramática e ao pensamento dos autores bíblicos.'
        ],
        'theologyAndLegacy': (
            'É o texto sagrado no qual foram proclamados os sermões de Charles Spurgeon vertidos para o francês na França, na Suíça e no continente africano.'
        ),
        'scopeAndUsage': 'A Bíblia mais lida e reverenciada em todo o mundo francófono (França, Suíça, Bélgica, Canadá e mais de 25 nações africanas).',
        'copyright': 'Domínio Público universal.'
    },
    es={
        'name': 'Louis Segond 1910 (LSG)',
        'fullName': 'La Sainte Bible: Traduction de Louis Segond (Édition Classique Révisée de 1910)',
        'year': '1880 (Completa), 1910 (Revisión Definitiva)',
        'abbrev': 'LSG',
        'language': 'Francés',
        'philosophy': 'Equivalencia Formal Clásica (Elegancia Literaria y Rigor Teológico)',
        'manuscripts': 'Antiguo Testamento: Texto Masorético. Nuevo Testamento: Textus Receptus y códices antiguos.',
        'translators': 'Dr. Louis Segond (1810–1885), pastor reformado y teólogo suizo de Ginebra.',
        'history': (
            'El equivalente exacto a la Reina-Valera o la King James en el idioma francés. '
            'Traducida directamente de los originales hebreo y griego, la revisión de 1910 se convirtió en el texto canónico indiscutible de las iglesias cristianas francófonas.'
        ),
        'features': [
            'Traducción de inigualable dignidad y belleza en lengua francesa.',
            'Traduce el Nombre Divino como "l\'Éternel" (El Eterno).',
            'Referencia suprema para la liturgia y la teología reformada en francés.'
        ],
        'theologyAndLegacy': (
            'El texto en el que se difundió la obra evangélica en Europa francófona y en las naciones de África francófona.'
        ),
        'scopeAndUsage': 'Estándar universal en más de 30 naciones de habla francesa.',
        'copyright': 'Dominio Público universal.'
    }
)

# 12. LUT (Lutherbibel 1545 / 1912 - Alemão)
reg(
    'lut',
    en={
        'name': 'Lutherbibel 1912 (LUT)',
        'fullName': 'Die Bibel: Nach der Übersetzung Martin Luthers (Revidierte Fassung von 1912)',
        'year': '1534/1545 (Luther Original), 1912 (Standard Protestant Revision)',
        'abbrev': 'LUT',
        'language': 'German',
        'philosophy': 'Idiomatic Formal Equivalence (Vigorous, Heartfelt, and Linguistically Formative German)',
        'manuscripts': 'Old Testament: Masoretic Text (Soncino and Brescia Hebrew Bibles). New Testament: Greek Novum Instrumentum omne of Erasmus (1519, 2nd edition).',
        'translators': 'Dr. Martin Luther (1483–1546), assisted by Philipp Melanchthon, Caspar Cruciger, Justus Jonas, and Matthew Aurogallus; standardized by the German Evangelical Church Conference in 1912.',
        'history': (
            'While confined at the Wartburg Castle in 1521–1522 following the Diet of Worms, Martin Luther translated the Greek New Testament '
            'into vernacular German in just eleven weeks ("September Testament"). With the collaboration of Wittenberg scholars, the complete Bible '
            'appeared in 1534 and was perfected in Luther’s final 1545 edition. Luther’s translation was not merely a religious triumph; it literally forged '
            'the Modern High German language, uniting a fragmented nation around the living Word of God.'
        ),
        'features': [
            'The foundational literary monument of the Protestant Reformation and the German language.',
            'Translated with vivid, expressive, and robust vocabulary designed to "look the common man on the street in the mouth" (dem Volk aufs Maul schauen).',
            'Renders the divine name as "DER HERR" (THE LORD in full capitals).',
            'Famous rendering of Romans 3:28 emphasizing justification by faith alone (allein durch den Glauben).'
        ],
        'theologyAndLegacy': (
            'Charles Spurgeon frequently praised Martin Luther as a lion of truth and cited Luther’s theological insights in his expositions of Galatians and Romans. '
            'The Lutherbibel remains the beating heart of German evangelical faith and hymnody (including Luther’s "A Mighty Fortress Is Our God").'
        ),
        'scopeAndUsage': 'The historic heritage Bible of Germany, Austria, and Switzerland, standard in the German Protestant Church (EKD) for generations.',
        'copyright': 'Public Domain worldwide.'
    },
    pt={
        'name': 'Lutherbibel 1912 (LUT)',
        'fullName': 'Die Bibel: Nach der Übersetzung Martin Luthers (Versão Revisada de 1912)',
        'year': '1534/1545 (Original de Lutero), 1912 (Revisão Padronizada)',
        'abbrev': 'LUT',
        'language': 'Alemão',
        'philosophy': 'Equivalência Idiomática Fiel (Força Verbal, Clareza Popular e Majestade Espiritual)',
        'manuscripts': 'Antigo Testamento: Texto Massorético Hebraico. Novo Testamento: Grego de Erasmo de Roterdã (1519).',
        'translators': 'Dr. Martinho Lutero (1483–1546), auxiliado pelo hebraísta Philipp Melanchthon, Caspar Cruciger e teólogos de Wittenberg; revisão unificada de 1912 pela Igreja Evangélica da Alemanha.',
        'history': (
            'Refugiado no Castelo de Wartburg em 1521 após a Dieta de Worms, Martinho Lutero verteu o Novo Testamento grego para o alemão '
            'em apenas onze semanas. Em 1534 publicou a Bíblia completa, aperfeiçoada em sua última edição em 1545. '
            'A tradução de Lutero não apenas inflamou a Reforma Protestante em todo o mundo, mas foi a própria criadora do Alto Alemão Moderno, '
            'unificando a língua e a cultura dos povos germânicos.'
        ),
        'features': [
            'O monumento literário fundador da Reforma Protestante e da língua alemã moderna.',
            'Linguagem enérgica, viva e expressiva que fala diretamente à mente e ao coração do povo.',
            'Traduz o Tetragrama como "DER HERR" (O SENHOR em maiúsculas).',
            'A célebre ênfase paulina em Romanos 3:28 sobre a justificação pela fé somente (allein durch den Glauben).'
        ],
        'theologyAndLegacy': (
            'Spurgeon considerava Lutero um dos maiores heróis da fé e recorria constantemente aos seus comentários e frases '
            'para inflamar sua própria pregação em Londres. A Bíblia de Lutero é a mãe espiritual de todas as Bíblias protestantes vernáculas.'
        ),
        'scopeAndUsage': 'Texto canônico histórico na Alemanha, Áustria, Suíça e comunidades luteranas e reformadas em todo o mundo.',
        'copyright': 'Domínio Público universal.'
    },
    es={
        'name': 'Lutherbibel 1912 (LUT)',
        'fullName': 'Die Bibel: Nach der Übersetzung Martin Luthers (Versión Revisada de 1912)',
        'year': '1534/1545 (Original de Lutero), 1912 (Revisión Estándar)',
        'abbrev': 'LUT',
        'language': 'Alemán',
        'philosophy': 'Equivalencia Idiomática Fiel (Vigor Popular, Fuerza Expresiva y Precisión Teológica)',
        'manuscripts': 'Antiguo Testamento: Texto Masorético Hebreo. Nuevo Testamento: Texto Griego de Erasmo (1519).',
        'translators': 'Dr. Martín Lutero (1483–1546) y los teólogos reformadores de Wittenberg (Philipp Melanchthon y colaboradores).',
        'history': (
            'Escrita en el castillo de Wartburg en 1521–1522 y completada en 1534. La traducción de Martín Lutero no solo desató la Reforma Protestante '
            'sino que forjó la lengua alemana moderna, llevando las Sagradas Escrituras a los hogares de millones de personas.'
        ),
        'features': [
            'Monumento fundacional de la cultura occidental y de la Iglesia de la Reforma.',
            'Prosa apasionada y de extraordinaria fuerza retórica y doctrinal.',
            'Traduce el Nombre Divino como "DER HERR".'
        ],
        'theologyAndLegacy': (
            'Fuente directa de inspiración para los reformadores ingleses, holandeses y españoles, y reverenciada por Charles Spurgeon en sus sermones.'
        ),
        'scopeAndUsage': 'La Biblia tradicional por antonomasia en Alemania, Suiza y Austria.',
        'copyright': 'Dominio Público universal.'
    }
)

# 13. CUV (Chinese Union Version 1919 - 和合本)
reg(
    'cuv',
    en={
        'name': 'Chinese Union Version (CUV - 和合本)',
        'fullName': 'The Chinese Union Version (Traditional Characters, 1919 Centennial Edition - 和合本)',
        'year': '1919',
        'abbrev': 'CUV',
        'language': 'Chinese (Traditional)',
        'philosophy': 'Formal Equivalence in Vernacular Baihua (Elevated Vernacular Chinese Fidelity)',
        'manuscripts': 'Old Testament: Masoretic Text (Biblia Hebraica). New Testament: Greek Critical Text and Textus Receptus comparisons.',
        'translators': 'An interdenominational team of Western missionaries and Chinese scholars, including Calvin W. Mateer, Chauncey Goodrich, Spencer Lewis, and Wang Yuande, sponsored by the British and Foreign Bible Society, American Bible Society, and National Bible Society of Scotland.',
        'history': (
            'Following the 1890 General Missionary Conference in Shanghai, an ambitious project was launched to replace disparate regional dialects '
            'with a single, authoritative Chinese Bible. Working for 29 years through rebellions and political turmoil, the translation committee '
            'pioneered the use of Mandarin Baihua (vernacular) instead of classical Wenli. Published in 1919, the Chinese Union Version (Hehebên) '
            'became the bedrock of the 20th-century Chinese Christian explosion.'
        ),
        'features': [
            'Known as the "King James Version of the Chinese-speaking world", holding unmatched spiritual prestige.',
            'Played a historic role in the May Fourth Movement by establishing vernacular Chinese (Baihua) as a respected literary medium.',
            'Carefully chose balanced theological terms (e.g., translating God as 神 / Shén or 上帝 / Shàngdì).',
            'Unsurpassed poetic balance and memorability in Chinese characters.'
        ],
        'theologyAndLegacy': (
            'Used by martyrs, house church leaders, and legendary evangelists like Watchman Nee and Wang Mingdao. '
            'It is the Bible of the monumental revival of Christianity in China over the last century.'
        ),
        'scopeAndUsage': 'The definitive Bible for over 100 million Chinese Christians in mainland China, Taiwan, Hong Kong, and the worldwide Chinese diaspora.',
        'copyright': 'Public Domain worldwide.'
    },
    pt={
        'name': 'Chinese Union Version (CUV - 和合本)',
        'fullName': 'Chinese Union Version (Caracteres Tradicionais, 1919 - 和合本)',
        'year': '1919',
        'abbrev': 'CUV',
        'language': 'Chinês (Tradicional)',
        'philosophy': 'Equivalência Formal em Chinês Vernáculo Baihua (Clássica e Solene)',
        'manuscripts': 'Antigo Testamento: Texto Massorético Hebraico. Novo Testamento: Texto Grego.',
        'translators': 'Comitê conjunto de eruditos chineses e missionários ocidentais (Calvin Mateer, Chauncey Goodrich, Wang Yuande e outros), patrocinado por três grandes sociedades bíblicas.',
        'history': (
            'Iniciada após a Conferência Missionária de Xangai de 1890, a tradução levou 29 anos de árduo trabalho. '
            'Em vez de utilizar o chinês clássico elitista (Wenli), a comissão foi pioneira em utilizar o chinês vernáculo culto (Baihua). '
            'Publicada em 1919, tornou-se a "King James do mundo chinês", a Bíblia que sustentou a igreja durante décadas de perseguição.'
        ),
        'features': [
            'A versão de maior prestígio espiritual e autoridade canônica entre os cristãos chineses de todo o planeta.',
            'Desempenhou papel histórico na modernização da escrita em língua chinesa.',
            'Equilíbrio reverente na tradução de conceitos teológicos fundamentais.',
            'Ritmo poético inigualável para memorização e liturgia.'
        ],
        'theologyAndLegacy': (
            'A Bíblia utilizada por grandes testemunhas da fé como Watchman Nee. É o texto sagrado que alicerçou o maior avivamento '
            'da história contemporânea da China.'
        ),
        'scopeAndUsage': 'A Bíblia padrão lida por mais de 100 milhões de cristãos chineses na China, Taiwan, Hong Kong e diáspora mundial.',
        'copyright': 'Domínio Público universal.'
    },
    es={
        'name': 'Chinese Union Version (CUV - 和合本)',
        'fullName': 'Chinese Union Version (Caracteres Tradicionales, 1919 - 和合本)',
        'year': '1919',
        'abbrev': 'CUV',
        'language': 'Chino (Tradicional)',
        'philosophy': 'Equivalencia Formal Vernácula (Baihua Culto y Reverente)',
        'manuscripts': 'Antiguo Testamento: Texto Masorético. Nuevo Testamento: Texto Griego.',
        'translators': 'Comité conjunto de biblistas chinos y misioneros tras la Conferencia de Shanghái de 1890.',
        'history': (
            'Conocida como la "King James china", requirió casi tres décadas de esmerada labor y se convirtió en el libro sagrado '
            'del cristianismo chino durante todo el siglo XX.'
        ),
        'features': [
            'Insuperable majestad y reverencia en caracteres tradicionales chinos.',
            'El texto bíblico que cimentó el cristianismo en China continental y ultramar.'
        ],
        'theologyAndLegacy': (
            'El texto con el cual predicaron y sufrieron los líderes históricos de las iglesias clandestinas en China.'
        ),
        'scopeAndUsage': 'La versión universal para creyentes de habla china en el mundo entero.',
        'copyright': 'Dominio Público universal.'
    }
)

# 14. SYNOD (Tradução Sinodal Russa 1876)
reg(
    'synod',
    en={
        'name': 'Russian Synodal Translation (Синодальный перевод)',
        'fullName': 'The Synodal Translation of the Holy Scriptures into Russian (1876)',
        'year': '1876',
        'abbrev': 'SYNOD',
        'language': 'Russian',
        'philosophy': 'Formal Equivalence (Solemn, Majestic Church Slavic Heritage in Classical Russian)',
        'manuscripts': 'Old Testament: Masoretic Hebrew Text with readings influenced by the Septuagint and Church Slavonic tradition. New Testament: Greek Textus Receptus.',
        'translators': 'Commissioned by the Most Holy Synod of the Russian Orthodox Church under Tsar Alexander II and Metropolitan Philaret (Drozdov) of Moscow, translated by professors of the theological academies of St. Petersburg, Moscow, Kiev, and Kazan.',
        'history': (
            'For centuries, the Russian people possessed the Scriptures only in Church Slavonic, an archaic liturgical language incomprehensible '
            'to ordinary peasants. In 1813, the Russian Bible Society began translation into modern Russian. Though halted by conservative backlash, '
            'Tsar Alexander II authorized the resumption in 1858 under Metropolitan Philaret. Completed in 1876, the Synodal Bible was the first '
            'authorized complete Bible in the modern Russian tongue.'
        ),
        'features': [
            'Universally accepted across all Christian denominations in Russia (Orthodox, Baptist, Pentecostal, Presbyterian, Lutheran).',
            'Rich, elevated Russian vocabulary bridging ancient Church Slavonic majesty with 19th-century Golden Age Russian literature (Tolstoy, Dostoevsky).',
            'Deeply reverent rendering of theological terms, preserving traditional Slavic Christian phrasing.'
        ],
        'theologyAndLegacy': (
            'The Synodal Bible sustained the underground church, pastors, and martyrs through 70 years of Soviet Communist persecution. '
            'It is the text through which millions of Russian-speaking souls encountered Christ.'
        ),
        'scopeAndUsage': 'The definitive reference Bible across Russia, Ukraine, Belarus, Central Asia, and Russian diaspora communities worldwide.',
        'copyright': 'Public Domain worldwide.'
    },
    pt={
        'name': 'Tradução Sinodal Russa (Синодальный перевод)',
        'fullName': 'A Tradução Sinodal das Sagradas Escrituras em Russo (1876)',
        'year': '1876',
        'abbrev': 'SYNOD',
        'language': 'Russo',
        'philosophy': 'Equivalência Formal Nobre (Majestade Eslava Traduzida para o Russo Clássico)',
        'manuscripts': 'Antigo Testamento: Texto Massorético Hebraico com harmonização na Septuaginta. Novo Testamento: Textus Receptus Grego.',
        'translators': 'Autorizada pelo Santo Sínodo sob a liderança do Metropolita Filareto de Moscou e professores das academias teológicas de São Petersburgo, Moscou, Kiev e Cazã.',
        'history': (
            'Durante séculos, a Bíblia esteve restrita ao antigo eslavo eclesiástico. A Tradução Sinodal foi comissionada para que todo o povo russo '
            'pudesse ler a Palavra de Deus em sua língua materna viva. Publicada em 1876 pelo Sínodo, tornou-se a Bíblia comum de ortodoxos, batistas '
            'e evangélicos em todo o Império Russo.'
        ),
        'features': [
            'Aceita unanimemente por protestantes e ortodoxos em todo o mundo de língua russa.',
            'Linguagem clássica rica, solene e de imensa força poética.',
            'A Bíblia que sustentou os mártires e a igreja perseguida durante as décadas de perseguição soviética.'
        ],
        'theologyAndLegacy': (
            'O alicerce da fé evangélica e reformada na Rússia, Ucrânia e Leste Europeu.'
        ),
        'scopeAndUsage': 'A Bíblia mais lida em russo na Rússia, Ucrânia, Cazaquistão, Bielorrússia e comunidades eslavas no exterior.',
        'copyright': 'Domínio Público universal.'
    },
    es={
        'name': 'Traducción Sinodal Rusa (Синодальный перевод)',
        'fullName': 'La Traducción Sinodal de las Sagradas Escrituras en Ruso (1876)',
        'year': '1876',
        'abbrev': 'SYNOD',
        'language': 'Ruso',
        'philosophy': 'Equivalencia Formal Clásica (Majestuosa Prosa Rusa del Siglo XIX)',
        'manuscripts': 'Antiguo Testamento: Texto Masorético y Septuaginta. Nuevo Testamento: Textus Receptus.',
        'translators': 'Comisionada por el Santo Sínodo bajo el zar Alejandro II y profesores de teología de San Petersburgo y Moscú.',
        'history': (
            'Publicada en 1876, fue la primera traducción autorizada de la Biblia completa al ruso moderno, '
            'compartida fraternalmente tanto por la Iglesia Ortodoxa como por las florecientes iglesias bautistas y evangélicas.'
        ),
        'features': [
            'Prosa venerable y reverente de la época dorada de la literatura rusa.',
            'Patrimonio de fe que sobrevivió a décadas de persecución comunista en la Unión Soviética.'
        ],
        'theologyAndLegacy': (
            'El texto canónico fundamental del cristianismo en Europa Oriental y Asia Central.'
        ),
        'scopeAndUsage': 'El estándar ecuménico e histórico en todas las naciones rusoparlantes.',
        'copyright': 'Dominio Público universal.'
    }
)

# 15. SVD (Smith & Van Dyck 1865 - Árabe)
reg(
    'svd',
    en={
        'name': 'Smith & Van Dyck (Arabic Bible 1865 - فان دايك)',
        'fullName': 'The Holy Bible in Arabic: Translated by Eli Smith and Cornelius Van Alen Van Dyck (1865)',
        'year': '1865',
        'abbrev': 'SVD',
        'language': 'Arabic',
        'philosophy': 'Formal Equivalence (Classical Arabic Eloquence, Purity, and Strict Textual Fidelity)',
        'manuscripts': 'Old Testament: Masoretic Text. New Testament: Greek Textus Receptus.',
        'translators': 'American Presbyterian missionaries Dr. Eli Smith and Dr. Cornelius Van Alen Van Dyck, working in Beirut with celebrated Lebanese scholars and poets Butrus al-Bustani, Nasif al-Yaziji, and Yusuf al-Asir, sponsored by the American Bible Society.',
        'history': (
            'Begun in 1847 in Beirut, the Smith-Van Dyck project sought a translation of the Bible into classical high literary Arabic (Fusha) '
            'that matched the eloquence of classical Arabic literature while maintaining strict fidelity to the Hebrew and Greek originals. '
            'Following Eli Smith’s death, Dr. Van Dyck, a gifted linguist and physician, brought the work to fruition alongside Muslim and Christian '
            'Arabic grammarians. Printed in 1865, it is regarded as an Arab literary masterpiece.'
        ),
        'features': [
            'The "King James Version of the Arabic World", possessing incomparable literary prestige.',
            'Translated directly from Hebrew and Greek into pure classical Arabic (Fusha).',
            'Used by both Protestant and Orthodox Arab Christians across the Middle East.'
        ],
        'theologyAndLegacy': (
            'Played a historic role in the Arab Cultural Renaissance (Al-Nahda) in the 19th century, proving that Christian doctrine '
            'could be expressed with the highest degree of Arabic grammatical elegance.'
        ),
        'scopeAndUsage': 'The standard reference Bible throughout Egypt, Lebanon, Syria, Jordan, Iraq, and the Arab diaspora.',
        'copyright': 'Public Domain worldwide.'
    },
    pt={
        'name': 'Smith & Van Dyck (Bíblia em Árabe 1865 - فان دايك)',
        'fullName': 'A Bíblia Sagrada em Árabe: Tradução de Eli Smith e Cornelius Van Dyck (Beirute, 1865)',
        'year': '1865',
        'abbrev': 'SVD',
        'language': 'Árabe',
        'philosophy': 'Equivalência Formal em Árabe Clássico (Fusha de Altíssima Eloquência)',
        'manuscripts': 'Antigo Testamento: Texto Massorético Hebraico. Novo Testamento: Textus Receptus Grego.',
        'translators': 'Dr. Eli Smith e Dr. Cornelius Van Dyck, em colaboração com os luminares da literatura libanesa Butrus al-Bustani e Nasif al-Yaziji, patrocinados pela Sociedade Bíblica Americana.',
        'history': (
            'Iniciada em 1847 em Beirute, a tradução Smith-Van Dyck buscou alcançar a mais nobre eloquência do árabe clássico (Fusha), '
            'unindo a perícia de hebraístas com poetas e gramáticos árabes. Publicada em 1865, consolidou-se como a Bíblia de referência '
            'suprema para os cristãos de todo o Oriente Médio.'
        ),
        'features': [
            'Aclamada como obra-prima da língua árabe clássica e texto de púlpito incontestável no mundo árabe.',
            'Fidelidade irrestrita aos textos originais da Reforma.',
            'Papel pioneiro no Renascimento Cultural Árabe (Al-Nahda).'
        ],
        'theologyAndLegacy': (
            'O instrumento fundamental de pregação do Evangelho e preservação da fé cristã no Egito, Líbano, Síria, Jordânia e Iraque.'
        ),
        'scopeAndUsage': 'A Bíblia árabe mais lida no Oriente Médio e Norte da África.',
        'copyright': 'Domínio Público universal.'
    },
    es={
        'name': 'Smith & Van Dyck (Biblia en Árabe 1865 - فان دايك)',
        'fullName': 'La Santa Biblia en Árabe: Traducción de Eli Smith y Cornelius Van Dyck (1865)',
        'year': '1865',
        'abbrev': 'SVD',
        'language': 'Árabe',
        'philosophy': 'Equivalencia Formal Clásica (Árabe Literario Fusha de Insuperable Elegancia)',
        'manuscripts': 'Antiguo Testamento: Texto Masorético. Nuevo Testamento: Textus Receptus.',
        'translators': 'Dr. Eli Smith y Dr. Cornelius Van Dyck en Beirut con los eruditos Butrus al-Bustani y Nasif al-Yaziji.',
        'history': (
            'Completada en 1865 en Beirut, es la versión por excelencia en lengua árabe, '
            'equiparable en prestigio y reverencia a la King James o la Reina-Valera.'
        ),
        'features': [
            'Prosa árabe clásica pura de máxima distinción gramatical.',
            'Fidelidad literal a los textos bíblicos hebreos y griegos.'
        ],
        'theologyAndLegacy': (
            'La Biblia que ha sostenido el testimonio evangélico en el mundo árabe por más de un siglo y medio.'
        ),
        'scopeAndUsage': 'Estándar en las iglesias de Egipto, Levante y todo el Medio Oriente.',
        'copyright': 'Dominio Público universal.'
    }
)

# 16. KRV (Korean Revised Version 1961 - 개역한글)
reg(
    'krv',
    en={
        'name': 'Korean Revised Version (개역한글)',
        'fullName': 'The Korean Revised Version of the Holy Bible (1961 Edition - 성경전서 개역한글판)',
        'year': '1961 (Origins 1911/1938)',
        'abbrev': 'KRV',
        'language': 'Korean',
        'philosophy': 'Formal Equivalence (Solemn, Classical Korean Script and Doctrinal Gravity)',
        'manuscripts': 'Old Testament: Masoretic Text. New Testament: Greek Textus Receptus and historic critical collations.',
        'translators': 'Korean Bible Society translation committees, building upon John Ross (1887), H. G. Underwood, and Henry D. Appenzeller, revised with Korean orthography reforms in 1961.',
        'history': (
            'The first Korean New Testament was translated by Scottish missionary John Ross in Manchuria in 1887. '
            'A unified Old and New Testament appeared in 1911, and was thoroughly revised in 1938. In 1961, the Korean Bible Society '
            'issued the definitive "Gaeyeok Hangul" revision incorporating modern Korean spelling. This historic version accompanied the explosion '
            'of the Korean church, from early revivals through the post-war evangelical awakening.'
        ),
        'features': [
            'The traditional heritage Bible of South Korean Protestantism.',
            'Distinctive, reverent honorific verbal forms reflecting deep respect toward the Almighty God.',
            'Preserves traditional theological terms that defined Korean Presbyterian and Methodist orthodoxy.'
        ],
        'theologyAndLegacy': (
            'Known as the Bible of the Great Korean Revival. It is the text memorized by millions of Korean believers in early morning prayer meetings.'
        ),
        'scopeAndUsage': 'Historical standard in South Korea and thousands of Korean diaspora churches in America, Europe, and Asia.',
        'copyright': 'Public Domain / Korean Bible Society historic text.'
    },
    pt={
        'name': 'Korean Revised Version (개역한글)',
        'fullName': 'The Korean Revised Version of the Holy Bible (Edição de 1961 - 성경전서 개역한글판)',
        'year': '1961 (Raízes em 1911/1938)',
        'abbrev': 'KRV',
        'language': 'Coreano',
        'philosophy': 'Equivalência Formal Solene (Linguagem Clássica Coreana e Deferência Teológica)',
        'manuscripts': 'Antigo Testamento: Texto Massorético. Novo Testamento: Texto Grego Tradicional.',
        'translators': 'Comissões da Sociedade Bíblica Coreana, sobre a base missionária de John Ross, Underwood e eruditos coreanos.',
        'history': (
            'A Bíblia histórica da Coreia do Sul. Consolidada em 1961 com as reformas ortográficas do Hangul, '
            'foi o texto sagrado que impulsionou o avivamento histórico e o impressionante crescimento da igreja na Coreia no século XX.'
        ),
        'features': [
            'Uso sublime de formas honoríficas coreanas de reverência a Deus.',
            'O texto mais memorizado pelos fiéis nas famosas reuniões de oração matinais coreanas.'
        ],
        'theologyAndLegacy': (
            'A Bíblia dos avivamentos de Pyongyang e Seul e dos grandes missionários transculturais coreanos.'
        ),
        'scopeAndUsage': 'Patrimônio indiscutível da fé protestante coreana em todo o mundo.',
        'copyright': 'Domínio Público / Sociedade Bíblica Coreana.'
    },
    es={
        'name': 'Korean Revised Version (개역한글)',
        'fullName': 'The Korean Revised Version of the Holy Bible (Edición de 1961 - 성경전서 개역한글판)',
        'year': '1961',
        'abbrev': 'KRV',
        'language': 'Coreano',
        'philosophy': 'Equivalencia Formal Clásica (Venerable Lenguaje Honorífico Coreano)',
        'manuscripts': 'Antiguo Testamento: Texto Masorético. Nuevo Testamento: Texto Griego.',
        'translators': 'Comité de la Sociedad Bíblica Coreana sobre el trabajo de pioneros protestantes.',
        'history': (
            'El texto canónico con el cual el cristianismo floreció en Corea del Sur durante el siglo XX, '
            'memorizado por generaciones enteras en las vigilias y oraciones matutinas.'
        ),
        'features': [
            'Solemnidad honorífica profunda hacia Dios en el idioma Hangul.',
            'Máxima autoridad eclesiástica en la historia moderna de Corea.'
        ],
        'theologyAndLegacy': (
            'La Biblia del gran avivamiento coreano y de la expansión misionera de Seúl al mundo.'
        ),
        'scopeAndUsage': 'Estándar histórico en congregaciones coreanas de todo el planeta.',
        'copyright': 'Dominio Público universal.'
    }
)

# 17. VI1934 (Kinh Thánh 1934 - Vietnamita)
reg(
    'vi1934',
    en={
        'name': 'Kinh Thánh 1934 (Traditional Vietnamese Bible)',
        'fullName': 'Kinh Thánh: Bản Dịch Truyền Thống 1934 (Cadman & Olson)',
        'year': '1934 (First Complete Edition 1925/1926)',
        'abbrev': 'VI1934',
        'language': 'Vietnamese',
        'philosophy': 'Formal Equivalence (Classical Literary Vietnamese with Deep Reverence)',
        'manuscripts': 'Old Testament: Masoretic Text. New Testament: Greek Textus Receptus and French/English historical collations.',
        'translators': 'Rev. William C. Cadman, his wife Grace Cadman, and Rev. John D. Olson (CMA missionaries), collaborating with celebrated Vietnamese scholar, writer, and journalist Phan Khôi, sponsored by the British and Foreign Bible Society.',
        'history': (
            'Begun in 1914 in Da Nang, this translation represents one of the most heroic chapters in modern missionary history. '
            'Working alongside the brilliant Vietnamese man of letters Phan Khôi, the Cadmans translated directly into high literary Vietnamese (Quốc Ngữ). '
            'Published in full in 1925/1926 and finalized in 1934, it became the universally accepted Bible of Vietnamese Christians.'
        ),
        'features': [
            'Known as "Bản Truyền Thống" (The Traditional Version), the King James of the Vietnamese church.',
            'Masterpiece of Vietnamese literature, praised by secular scholars for its poetic beauty and linguistic elegance.',
            'Faithful word-for-word correspondence to biblical theology.'
        ],
        'theologyAndLegacy': (
            'Sustained Vietnamese Christians through wars, exile, and severe persecution. '
            'It is the sacred text revered by Vietnamese evangelical congregations across Vietnam, the United States, Canada, and Australia.'
        ),
        'scopeAndUsage': 'The standard Bible of Vietnamese Protestant churches worldwide.',
        'copyright': 'Public Domain worldwide.'
    },
    pt={
        'name': 'Kinh Thánh 1934 (Bíblia Vietnamita Tradicional)',
        'fullName': 'Kinh Thánh: Bản Dịch Truyền Thống 1934 (Cadman & Olson)',
        'year': '1934',
        'abbrev': 'VI1934',
        'language': 'Vietnamita',
        'philosophy': 'Equivalência Formal Literária (Prosa Vietnamita Nobre e Fidelidade Bíblica)',
        'manuscripts': 'Antigo Testamento: Texto Massorético. Novo Testamento: Texto Grego Tradicional.',
        'translators': 'William C. Cadman e John D. Olson em colaboração com o célebre literato e intelectual vietnamita Phan Khôi.',
        'history': (
            'Iniciada em 1914 em Da Nang, esta tradução uniu missionários e o maior estilista da língua vietnamita moderna, Phan Khôi. '
            'Publicada em 1934, consagrou-se como o texto clássico inalterável da igreja evangélica do Vietnã.'
        ),
        'features': [
            'Reconhecida como obra-prima da literatura vietnamita em caracteres latinos (Quốc Ngữ).',
            'O texto canônico que sustentou os crentes durante décadas de guerras e tribulações.'
        ],
        'theologyAndLegacy': (
            'A Bíblia histórica do povo vietnamita que ama a Cristo em seu país e na diáspora mundial.'
        ),
        'scopeAndUsage': 'Padrão nas igrejas evangélicas vietnamitas em todo o mundo.',
        'copyright': 'Domínio Público universal.'
    },
    es={
        'name': 'Kinh Thánh 1934 (Biblia Vietnamita Tradicional)',
        'fullName': 'Kinh Thánh: Bản Dịch Truyền Thống 1934 (Cadman & Olson)',
        'year': '1934',
        'abbrev': 'VI1934',
        'language': 'Vietnamita',
        'philosophy': 'Equivalencia Formal Clásica (Belleza Literaria y Precisión Bíblica)',
        'manuscripts': 'Antiguo Testamento: Texto Masorético. Nuevo Testamento: Texto Griego.',
        'translators': 'William C. Cadman y John D. Olson con el célebre erudito literario Phan Khôi.',
        'history': (
            'La "Reina-Valera vietnamita", publicada en 1934 y considerada un monumento literario y espiritual insustituible.'
        ),
        'features': [
            'Prosa vietnamita clásica de incomparable devoción y musicalidad.',
            'Fidelidad formal palabra por palabra.'
        ],
        'theologyAndLegacy': (
            'El refugio espiritual de la Iglesia perseguida en Vietnam y en las comunidades de la diáspora.'
        ),
        'scopeAndUsage': 'El texto estándar de las congregaciones protestantes vietnamitas en el mundo.',
        'copyright': 'Dominio Público universal.'
    }
)

# 18. NCV (New Chinese Version 1992/2001 - 新譯本)
reg(
    'ncv',
    en={
        'name': 'New Chinese Version (NCV - 新譯本)',
        'fullName': 'The Holy Bible: New Chinese Version (Traditional Characters, Worldwide Bible Society - 新譯本)',
        'year': '1992 (New Testament 1976, Complete Bible 1992, Revised 2001)',
        'abbrev': 'NCV',
        'language': 'Chinese (Traditional)',
        'philosophy': 'Optimal Equivalence (Modern Scholarly Chinese Accuracy Translated Directly by Ethnic Chinese Scholars)',
        'manuscripts': 'Old Testament: Biblia Hebraica Stuttgartensia (Masoretic Text). New Testament: Greek Critical Text (Nestle-Aland 27th ed. / UBS 4th ed.).',
        'translators': 'Over 30 distinguished ethnic Chinese biblical scholars, linguists, and theologians worldwide, organized by the Worldwide Bible Society (環球聖經公會) under Dr. Stephen C. T. Chan and Dr. Philip Shen.',
        'history': (
            'Initiated in 1972, the NCV was the first major Chinese Bible translation produced entirely by native Chinese biblical scholars '
            'translating directly from the original Hebrew, Aramaic, and Greek manuscripts. While deeply respecting the historic 1919 CUV, '
            'the NCV incorporated 20th-century manuscript discoveries (including the Dead Sea Scrolls) and updated vocabulary to contemporary Chinese syntax. '
            'The complete Bible was published in 1992 and revised in 2001.'
        ),
        'features': [
            'The first complete Bible translated from original biblical languages by ethnic Chinese evangelical scholars.',
            'Modern, natural, and precise Chinese syntax, overcoming ambiguities in earlier translations.',
            'Incorporate latest biblical scholarship, archaeology, and manuscript readings.',
            'Clear formatting with paragraph headings, cross-references, and textual footnotes.'
        ],
        'theologyAndLegacy': (
            'Highly acclaimed by Chinese theologians and seminary professors as the premier modern scholarly study Bible in the Chinese language.'
        ),
        'scopeAndUsage': 'Extensively used in Hong Kong, Taiwan, Singapore, Malaysia, and Chinese churches in North America and Europe.',
        'copyright': 'Copyright © 1976, 1992, 1999, 2001, 2005, 2010 by Worldwide Bible Society.'
    },
    pt={
        'name': 'New Chinese Version (NCV - 新譯本)',
        'fullName': 'The Holy Bible: New Chinese Version (Caracteres Tradicionais - 新譯本)',
        'year': '1992 (Novo Testamento 1976, Revisão 2001)',
        'abbrev': 'NCV',
        'language': 'Chinês (Tradicional)',
        'philosophy': 'Equivalência Ótima Contemporânea (Tradução Erudita Direta por Biblistas Chineses Nativos)',
        'manuscripts': 'Antigo Testamento: Biblia Hebraica Stuttgartensia. Novo Testamento: Texto Crítico Grego (Nestle-Aland 27ª ed.).',
        'translators': 'Comitê de mais de 30 eruditos, linguistas e teólogos bíblicos de etnia chinesa da Worldwide Bible Society (環球聖經公會).',
        'history': (
            'Iniciada em 1972, a NCV foi um marco histórico: a primeira grande tradução da Bíblia completa realizada inteiramente por biblistas '
            'chineses nativos diretamente do hebraico, aramaico e grego para o chinês contemporâneo. Publicada em 1992 e revisada em 2001, '
            'trouxe o rigor acadêmico moderno e a clareza textual sem perder a reverência espiritual.'
        ),
        'features': [
            'A primeira Bíblia completa traduzida dos originais por teólogos cristãos de etnia chinesa.',
            'Sintaxe clara em chinês contemporâneo de alto nível acadêmico e literário.',
            'Incorpora descobertas textuais modernas como os Manuscritos do Mar Morto.'
        ],
        'theologyAndLegacy': (
            'A versão moderna de referência para exegese, seminários e pregação bíblica em língua chinesa no século XXI.'
        ),
        'scopeAndUsage': 'Muito utilizada em Hong Kong, Taiwan, Cingapura, Malásia e comunidades chinesas no Ocidente.',
        'copyright': 'Copyright © Worldwide Bible Society.'
    },
    es={
        'name': 'New Chinese Version (NCV - 新譯本)',
        'fullName': 'The Holy Bible: New Chinese Version (Caracteres Tradicionales - 新譯本)',
        'year': '1992 (Revisión 2001)',
        'abbrev': 'NCV',
        'language': 'Chino (Tradicional)',
        'philosophy': 'Equivalencia Óptima Moderna (Traducción Erudita por Eruditos Chinos Nativos)',
        'manuscripts': 'Antiguo Testamento: Biblia Hebraica Stuttgartensia. Nuevo Testamento: Texto Crítico Griego.',
        'translators': 'Más de 30 eruditos bíblicos y lingüistas chinos convocados por la Worldwide Bible Society.',
        'history': (
            'El gran proyecto de traducción contemporánea realizado directamente por eruditos nativos desde las lenguas originales '
            'para el pueblo chino del siglo XXI.'
        ),
        'features': [
            'Claridad y precisión filológica impecable en chino contemporáneo.',
            'Notas de traducción sobre descubrimientos arqueológicos y manuscritos antiguos.'
        ],
        'theologyAndLegacy': (
            'La versión moderna académica de mayor estima en los seminarios teológicos chinos actuales.'
        ),
        'scopeAndUsage': 'Estándar en iglesias y academias de Hong Kong, Taiwán y la diáspora global.',
        'copyright': 'Copyright © Worldwide Bible Society.'
    }
)

print(f"Part 2 loaded ({len(PART2)} translations).")
