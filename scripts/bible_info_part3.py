# -*- coding: utf-8 -*-
"""
Bible Translation Data - Part 3:
- el (Neofytos Vamvas 1850 - Grego Moderno)
- eo (La Sankta Biblio 1926 - Esperanto)
- fi (Pyhä Raamattu 1938/1933 - Finlandês)
- pr (Pyhä Raamattu 1776 - Finlandês Tradicional)
- ro (Dumitru Cornilescu 1921/1924 - Romeno)
- aa (Almeida Revisada / Revista e Atualizada 1993 - Português)
- wlc (Westminster Leningrad Codex - Hebraico Bíblico)
- tr (Textus Receptus - Grego Koiné)
- bbe (Bible in Basic English 1949/1964)
"""

PART3 = {}

def reg(k, en, pt, es):
    PART3[k] = {'key': k, 'en': en, 'pt': pt, 'es': es}

# 19. EL (Modern Greek - Neofytos Vamvas 1850)
reg(
    'el',
    en={
        'name': 'Modern Greek Bible (Neofytos Vamvas 1850 - Νεοελληνική)',
        'fullName': 'Η Αγία Γραφή: Μετάφραση Νεοφύτου Βάμβα (Modern Greek Translation of 1850)',
        'year': '1850',
        'abbrev': 'EL',
        'language': 'Modern Greek (Katharevousa)',
        'philosophy': 'Formal Equivalence (Noble Literary Katharevousa Fidelity)',
        'manuscripts': 'Old Testament: Masoretic Hebrew Text. New Testament: Ancient Greek Textus Receptus.',
        'translators': 'Archimandrite Neofytos Vamvas (1776–1855), rector of the National and Kapodistrian University of Athens, prominent intellectual of the Modern Greek Enlightenment, with scholars of the British and Foreign Bible Society (BFBS).',
        'history': (
            'Although Greek is the mother tongue of the New Testament, by the 19th century the living spoken language had evolved dramatically '
            'from ancient Koine Greek, leaving ordinary Greeks unable to understand the Scriptures in church. Archimandrite Neofytos Vamvas, '
            'a fervent Christian humanist and educator, dedicated decades to translating the Bible into Katharevousa (the elevated literary standard of modern Greek). '
            'Published in 1850 by the British and Foreign Bible Society, it overcame initial ecclesiastical opposition to become the beloved Bible of Greek evangelical Christianity.'
        ),
        'features': [
            'Translated directly from original Hebrew for the Old Testament, rather than merely translating the Septuagint.',
            'Preserves the unique dignity of the Greek language while rendering the Word of God crystal clear to modern Greek speakers.',
            'The historical standard Bible for Greek Evangelical and Protestant churches for over 170 years.'
        ],
        'theologyAndLegacy': (
            'A historic bridge reconnecting the Greek-speaking people to their biblical patrimony in their living vernacular.'
        ),
        'scopeAndUsage': 'Standard liturgical and study Bible in Greek Evangelical churches in Greece, Cyprus, and the worldwide Hellenic diaspora.',
        'copyright': 'Public Domain worldwide.'
    },
    pt={
        'name': 'Bíblia em Grego Moderno (Neofytos Vamvas 1850 - Νεοελληνική)',
        'fullName': 'Η Αγία Γραφή: Μετάφραση Νεοφύτου Βάμβα (Tradução Neogrega de 1850)',
        'year': '1850',
        'abbrev': 'EL',
        'language': 'Grego Moderno (Katharevousa)',
        'philosophy': 'Equivalência Formal Literária (Katharevousa Clássica e Reverente)',
        'manuscripts': 'Antigo Testamento: Texto Massorético Hebraico. Novo Testamento: Textus Receptus Grego.',
        'translators': 'Arquimandrita Neofytos Vamvas (1776–1855), reitor da Universidade de Atenas e intelectual do Iluminismo Grego, em parceria com a Sociedade Bíblica Britânica e Estrangeira.',
        'history': (
            'Embora a Grécia seja o berço do Novo Testamento, no século XIX a língua falada havia se distanciado tanto do grego koiné que o povo comum '
            'não compreendia os textos nas igrejas. O erudito Neofytos Vamvas dedicou décadas para traduzir a Bíblia para o grego moderno culto (Katharevousa). '
            'Publicada em 1850, tornou-se a Bíblia histórica dos evangélicos gregos.'
        ),
        'features': [
            'Verte o Antigo Testamento diretamente do hebraico, preservando a verdade textual.',
            'Linguagem nobre, solene e de altíssima categoria literária grega.',
            'O texto canônico das comunidades evangélicas de língua grega há mais de um século e meio.'
        ],
        'theologyAndLegacy': (
            'Reconectou o povo helênico à Palavra de Deus em sua língua viva e compreensível.'
        ),
        'scopeAndUsage': 'Texto oficial das igrejas evangélicas na Grécia, Chipre e na diáspora grega mundial.',
        'copyright': 'Domínio Público universal.'
    },
    es={
        'name': 'Biblia en Griego Moderno (Neofytos Vamvas 1850 - Νεοελληνική)',
        'fullName': 'Η Αγία Γραφή: Μετάφραση Νεοφύτου Βάμβα (Traducción al Griego Moderno de 1850)',
        'year': '1850',
        'abbrev': 'EL',
        'language': 'Griego Moderno (Katharevousa)',
        'philosophy': 'Equivalencia Formal Clásica (Katharevousa Culta y Fiel)',
        'manuscripts': 'Antiguo Testamento: Texto Masorético Hebreo. Nuevo Testamento: Textus Receptus.',
        'translators': 'Arquimandrita Neofytos Vamvas (1776–1855), rector de la Universidad de Atenas, con la Sociedad Bíblica Británica y Extranjera.',
        'history': (
            'Publicada en 1850, fue la primera gran traducción de las Sagradas Escrituras al griego moderno culto, '
            'haciendo comprensible el mensaje del Evangelio para todo el pueblo griego.'
        ),
        'features': [
            'Traducción directa desde el hebreo y griego antiguo.',
            'Prosa griega noble y venerable.'
        ],
        'theologyAndLegacy': (
            'El texto sagrado de referencia para las iglesias cristianas evangélicas en Grecia y Chipre.'
        ),
        'scopeAndUsage': 'Estándar en las iglesias de habla griega de todo el mundo.',
        'copyright': 'Dominio Público universal.'
    }
)

# 20. EO (Esperanto - La Sankta Biblio 1926)
reg(
    'eo',
    en={
        'name': 'Esperanto Bible (La Sankta Biblio 1926)',
        'fullName': 'La Sankta Biblio: Malnova kaj Nova Testamentoj Tradukitaj el la Originalaj Lingvoj (Londono, 1926)',
        'year': '1926 (Old Testament 1910–1917, Complete Bible 1926)',
        'abbrev': 'EO',
        'language': 'Esperanto',
        'philosophy': 'Formal Equivalence (Masterful Literary Precision in International Auxiliary Language)',
        'manuscripts': 'Old Testament: Masoretic Hebrew Text. New Testament: Greek New Testament (Westcott-Hort and historic collations).',
        'translators': 'Old Testament translated directly from Hebrew by Dr. L. L. Zamenhof (1859–1917), the creator of Esperanto. New Testament translated by a British committee of Christian scholars chaired by Rev. John Cyprian Rust and Rev. John M. Warden, published by the British and Foreign Bible Society.',
        'history': (
            'Dr. L. L. Zamenhof considered his translation of the Hebrew Bible into Esperanto to be his supreme literary achievement, '
            'working tirelessly on it until his death in 1917. An Anglican-led committee in Great Britain completed the Greek New Testament. '
            'In 1926, the combined "Londona Biblio" was published in London, establishing Esperanto as a mature, expressive language capable '
            'of rendering the most sublime depths of sacred literature.'
        ),
        'features': [
            'Translated directly from the original Hebrew and Greek texts.',
            'Zamenhof’s Old Testament is celebrated as a stylistic masterpiece of the Esperanto language.',
            'Remarkable clarity and logical grammatical transparency unique to Esperanto.'
        ],
        'theologyAndLegacy': (
            'Demonstrated that the international language could express divine revelation with reverence, beauty, and precision.'
        ),
        'scopeAndUsage': 'Standard text of the Christian Esperanto movement (KELI - Kristana Esperantista Ligo Internacia) worldwide.',
        'copyright': 'Public Domain worldwide.'
    },
    pt={
        'name': 'Bíblia em Esperanto (La Sankta Biblio 1926)',
        'fullName': 'La Sankta Biblio: Antigo e Novo Testamento em Esperanto (Londres, 1926)',
        'year': '1926',
        'abbrev': 'EO',
        'language': 'Esperanto',
        'philosophy': 'Equivalência Formal Literária (Obra-Prima na Língua Auxiliar Internacional)',
        'manuscripts': 'Antigo Testamento: Texto Massorético Hebraico. Novo Testamento: Texto Grego.',
        'translators': 'Antigo Testamento vertido diretamente do hebraico pelo próprio criador do Esperanto, Dr. L. L. Zamenhof. Novo Testamento traduzido por comitê britânico liderado pelo Rev. John Cyprian Rust.',
        'history': (
            'O criador do Esperanto, Dr. L. L. Zamenhof, considerava a tradução da Bíblia hebraica o ápice de sua vida literária. '
            'O Novo Testamento grego foi traduzido por eruditos cristãos na Inglaterra. Em 1926, a Sociedade Bíblica Britânica publicou '
            'a Bíblia completa em Londres ("Londona Biblio"), provando a universalidade e riqueza espiritual do Esperanto.'
        ),
        'features': [
            'Tradução direta dos originais hebraicos e gregos.',
            'O texto mais admirado e canônico da literatura em Esperanto.',
            'Transparência gramatical e pureza de vocabulário.'
        ],
        'theologyAndLegacy': (
            'Utilizada pela Liga Internacional de Cristãos Esperantistas (KELI) para unir crentes de todas as nações.'
        ),
        'scopeAndUsage': 'Padrão da comunidade cristã internacional em Esperanto.',
        'copyright': 'Domínio Público universal.'
    },
    es={
        'name': 'Biblia en Esperanto (La Sankta Biblio 1926)',
        'fullName': 'La Sankta Biblio: Sagradas Escrituras en Esperanto (Londres, 1926)',
        'year': '1926',
        'abbrev': 'EO',
        'language': 'Esperanto',
        'philosophy': 'Equivalencia Formal Clásica (Obra Maestra del Idioma Internacional)',
        'manuscripts': 'Antiguo Testamento: Texto Masorético Hebreo. Nuevo Testamento: Texto Griego.',
        'translators': 'Dr. L. L. Zamenhof (Antiguo Testamento) y un comité de teólogos británicos (Nuevo Testamento).',
        'history': (
            'Publicada en Londres en 1926, representa la cumbre literaria del idioma internacional Esperanto, '
            'llevando la Palabra de Dios a una comunidad global unida por un mismo ideal de fraternidad.'
        ),
        'features': [
            'Traducción directa desde el hebreo y el griego.',
            'Claridad lógica y belleza expresiva incomparable.'
        ],
        'theologyAndLegacy': (
            'El texto canónico de la Liga Internacional de Esperantistas Cristianos (KELI).'
        ),
        'scopeAndUsage': 'Utilizada por comunidades cristianas internacionales de habla esperanto en todo el mundo.',
        'copyright': 'Dominio Público universal.'
    }
)

# 21. FI (Finnish - Pyhä Raamattu 1938/1933 - Kirkkoraamattu)
reg(
    'fi',
    en={
        'name': 'Finnish Bible 1938 (Pyhä Raamattu)',
        'fullName': 'Pyhä Raamattu: Suomen Evankelis-Luterilaisen Kirkon Kirkkoraamattu (1933/1938)',
        'year': '1933 (OT) / 1938 (NT)',
        'abbrev': 'FI',
        'language': 'Finnish',
        'philosophy': 'Formal Equivalence (Poetic Finnish Elevation, Solemnity, and Grammatical Precision)',
        'manuscripts': 'Old Testament: Masoretic Text (Biblia Hebraica). New Testament: Greek Critical Text (Nestle) with reference to Textus Receptus.',
        'translators': 'Translation committee appointed by the Synod of the Evangelical Lutheran Church of Finland, featuring celebrated Finnish poet Otto Manninen, linguist E. N. Setälä, and Old Testament scholar Arthur Hjelt.',
        'history': (
            'Authorized by the Church Synod in 1933 (Old Testament) and 1938 (New Testament), this translation was designed to provide Finland '
            'with an authoritative modern Bible celebrating the rich, poetic depth of the Finnish language. It accompanied Finland through the harrowing '
            'Winter War and Continuation War, providing spiritual solace and biblical steadfastness to a whole generation.'
        ),
        'features': [
            'Known as the "Kirkkoraamattu" (Church Bible), cherished for its majestic, rhythmic Finnish prose.',
            'Strict faithfulness to Hebrew and Greek theological concepts.',
            'Widely considered the golden literary standard of Finnish biblical translation.'
        ],
        'theologyAndLegacy': (
            'Deeply loved by Finnish Christians of all traditions, especially in conservative pietistic and Lutheran revival movements.'
        ),
        'scopeAndUsage': 'Historical standard Bible of the Finnish nation throughout the 20th century.',
        'copyright': 'Public Domain / Historic ecclesiastical text.'
    },
    pt={
        'name': 'Bíblia em Finlandês 1938 (Pyhä Raamattu)',
        'fullName': 'Pyhä Raamattu: Suomen Kirkkoraamattu (Edição de 1933/1938)',
        'year': '1938 (Antigo Testamento 1933)',
        'abbrev': 'FI',
        'language': 'Finlandês',
        'philosophy': 'Equivalência Formal Nobre (Riqueza Poética Finlandesa e Exatidão Teológica)',
        'manuscripts': 'Antigo Testamento: Texto Massorético. Novo Testamento: Texto Grego.',
        'translators': 'Comissão nomeada pelo Sínodo da Igreja Luterana da Finlândia, com o célebre poeta Otto Manninen e hebraístas.',
        'history': (
            'Adotada oficialmente em 1933 e 1938, esta Bíblia foi o refúgio e o sustento espiritual do povo finlandês durante a Guerra de Inverno. '
            'É admirada por sua linguagem poética magistral e fidelidade rigorosa aos textos bíblicos originais.'
        ),
        'features': [
            'A Bíblia de referência clássica e litúrgica da Finlândia.',
            'Linguagem solene, reverente e de inigualável harmonia verbal.'
        ],
        'theologyAndLegacy': (
            'O coração espiritual dos movimentos de avivamento bíblico na Finlândia no século XX.'
        ),
        'scopeAndUsage': 'A versão clássica por excelência na Finlândia.',
        'copyright': 'Domínio Público universal.'
    },
    es={
        'name': 'Biblia en Finlandés 1938 (Pyhä Raamattu)',
        'fullName': 'Pyhä Raamattu: Suomen Kirkkoraamattu (1933/1938)',
        'year': '1938',
        'abbrev': 'FI',
        'language': 'Finlandés',
        'philosophy': 'Equivalencia Formal Poética (Prosa Finlandesa Sagrada y Fidelidad Literal)',
        'manuscripts': 'Antiguo Testamento: Texto Masorético. Nuevo Testamento: Texto Griego.',
        'translators': 'Comité del Sínodo de la Iglesia Evangélica Luterana de Finlandia con el poeta Otto Manninen.',
        'history': (
            'Aprobada en 1938, fue el texto con el cual la nación finlandesa enfrentó los desafíos del siglo XX, '
            'reconocida como una joya indiscutible de su patrimonio literario y teológico.'
        ),
        'features': [
            'Prosa rítmica y poética de alta dignidad espiritual.',
            'Fidelidad estricta a los originales bíblicos.'
        ],
        'theologyAndLegacy': (
            'El gran texto canónico tradicional en las congregaciones luteranas y evangélicas de Finlandia.'
        ),
        'scopeAndUsage': 'Estándar histórico en toda Finlandia.',
        'copyright': 'Dominio Público universal.'
    }
)

# 22. PR (Pyhä Raamattu 1776 - Finlandês Antigo)
reg(
    'pr',
    en={
        'name': 'Finnish Heritage Bible 1776 (Vanha kirkkoraamattu)',
        'fullName': 'Biblia: Se on Coco Pyhä Ramattu Suomexi (1776 Lizelius Revision)',
        'year': '1776 (Origins in 1548 Agricola NT & 1642 Bible)',
        'abbrev': 'PR',
        'language': 'Finnish (Archaic)',
        'philosophy': 'Historic Formal Equivalence (Reformation Textus Receptus & Masoretic Text)',
        'manuscripts': 'Old Testament: Masoretic Text. New Testament: Greek Textus Receptus.',
        'translators': 'Building on Bishop Mikael Agricola (Father of the Finnish Literary Language, 1548) and the 1642 Bible commission, thoroughly revised by Henrik Florinus and Dean Antti Lizelius in 1776.',
        'history': (
            'Mikael Agricola, a student of Martin Luther and Philipp Melanchthon in Wittenberg, translated the Finnish New Testament in 1548, '
            'creating written Finnish in the process. The first complete Finnish Bible appeared in 1642. In 1776, Pastor Antti Lizelius '
            'issued a thorough revision that became known as the "Vanha kirkkoraamattu" (Old Church Bible). It was the solitary spiritual guide '
            'of Finnish families for more than 150 years.'
        ),
        'features': [
            'The pure historic Reformation text of Finland, strictly based on the Textus Receptus.',
            'Venerable archaic Finnish prose with deep spiritual gravitas.',
            'Completely in the public domain.'
        ],
        'theologyAndLegacy': (
            'Treasured to this day by traditional Finnish pietistic revival movements (such as the Conservative Laestadians and Awakened) '
            'as the purest transmission of Reformation doctrine.'
        ),
        'scopeAndUsage': 'Preserved as an irreplaceable treasure of Finnish Reformation history and conservative devotion.',
        'copyright': 'Public Domain worldwide.'
    },
    pt={
        'name': 'Bíblia Finlandesa Histórica 1776 (Vanha kirkkoraamattu)',
        'fullName': 'Biblia: Se on Coco Pyhä Ramattu Suomexi (Revisão de Lizelius de 1776)',
        'year': '1776 (Raízes em 1548/1642)',
        'abbrev': 'PR',
        'language': 'Finlandês (Arcaico)',
        'philosophy': 'Equivalência Formal Histórica da Reforma (Textus Receptus e Texto Massorético)',
        'manuscripts': 'Antigo Testamento: Texto Massorético Hebraico. Novo Testamento: Textus Receptus Grego.',
        'translators': 'Baseada em Mikael Agricola (pai da língua finlandesa escrita, 1548) e revisada pelo deão Antti Lizelius em 1776.',
        'history': (
            'Mikael Agricola, discípulo de Lutero em Wittenberg, criou a língua finlandesa escrita ao traduzir o Novo Testamento em 1548. '
            'A Bíblia completa surgiu em 1642 e foi aperfeiçoada por Antti Lizelius em 1776. Foi a Bíblia exclusiva do povo finlandês por mais de um século e meio.'
        ),
        'features': [
            'O texto histórico da Reforma Luterana na Finlândia alinhado ao Textus Receptus.',
            'Linguagem arcaica solene, venerada por movimentos tradicionais pietistas.',
            'Domínio Público universal.'
        ],
        'theologyAndLegacy': (
            'O tesouro espiritual imutável que moldou a identidade moral e cristã da Finlândia.'
        ),
        'scopeAndUsage': 'Preservada com imenso respeito por teólogos e fiéis confessionais.',
        'copyright': 'Domínio Público universal.'
    },
    es={
        'name': 'Biblia Finlandesa Histórica 1776 (Vanha kirkkoraamattu)',
        'fullName': 'Biblia: Se on Coco Pyhä Ramattu Suomexi (Revisión de 1776)',
        'year': '1776',
        'abbrev': 'PR',
        'language': 'Finlandés (Antiguo)',
        'philosophy': 'Equivalencia Formal de la Reforma (Textus Receptus)',
        'manuscripts': 'Antiguo Testamento: Texto Masorético. Nuevo Testamento: Textus Receptus.',
        'translators': 'Mikael Agricola (pionero, 1548) y Antti Lizelius (1776).',
        'history': (
            'La histórica "Biblia Vieja" de Finlandia, fundada en la labor del reformador Mikael Agricola y revisada en 1776. '
            'Fue el único texto canónico del pueblo finés durante más de un siglo y medio.'
        ),
        'features': [
            'Prosa antigua y solemne de la Reforma Protestante.',
            'Fidelidad absoluta al Textus Receptus.'
        ],
        'theologyAndLegacy': (
            'El legado más venerado de la historia del cristianismo en Finlandia.'
        ),
        'scopeAndUsage': 'Preservada en Dominio Público para estudio histórico y devoción clásica.',
        'copyright': 'Dominio Público universal.'
    }
)

# 23. RO (Romanian - Dumitru Cornilescu 1921/1924)
reg(
    'ro',
    en={
        'name': 'Romanian Cornilescu Bible 1924 (Traducerea Cornilescu)',
        'fullName': 'Sfânta Scriptură a Vechiului și Noului Testament: Traducerea Dumitru Cornilescu (1921 / 1924)',
        'year': '1921 (First Edition), 1924 (Standard BFBS Revision)',
        'abbrev': 'RO',
        'language': 'Romanian',
        'philosophy': 'Formal Equivalence (Vibrant, Clear, and Spiritually Piercing Contemporary Romanian)',
        'manuscripts': 'Old Testament: Masoretic Hebrew Text with reference to French and German versions. New Testament: Greek Critical Text and Textus Receptus collations.',
        'translators': 'Dumitru Cornilescu (1891–1975), Romanian Orthodox hieromonk who embraced evangelical faith, supported by Princess Ralu Callimachi and the British and Foreign Bible Society (BFBS).',
        'history': (
            'In the early 20th century, Romanian Bibles were written in obsolete Cyrillic-influenced vocabulary that common people could scarcely comprehend. '
            'Dumitru Cornilescu, a brilliant young theological student at the Cernica Monastery, passionately desired that ordinary Romanians understand '
            'the gospel of grace. Working tirelessly, he translated the New Testament in 1919 and the complete Bible in 1921. Printed in London by the '
            'British and Foreign Bible Society in 1924, Cornilescu’s translation sparked a tremendous spiritual revival across Romania and Moldova.'
        ),
        'features': [
            'The undisputed "King James / Reina-Valera of the Romanian-speaking world".',
            'Fresh, elegant, and deeply moving Romanian literary style that touches the heart and conscience.',
            'Directly catalysed the birth of the Evangelical and Brethren movements ("Oastea Domnului" and Baptist revivals) in Romania.'
        ],
        'theologyAndLegacy': (
            'Cornilescu was persecuted and exiled for his bold evangelical translation, but his work became the undisputed spiritual foundation '
            'for millions of Romanian Christians who endured persecution under the communist regime of Ceaușescu.'
        ),
        'scopeAndUsage': 'Used universally by Baptist, Pentecostal, Brethren, and Evangelical churches in Romania, Moldova, and the Romanian diaspora.',
        'copyright': 'Public Domain worldwide.'
    },
    pt={
        'name': 'Bíblia Romena Cornilescu 1924 (Traducerea Cornilescu)',
        'fullName': 'Sfânta Scriptură: Traducerea Dumitru Cornilescu (1921 / 1924)',
        'year': '1921 (Bíblia Completa), 1924 (Revisão da BFBS)',
        'abbrev': 'RO',
        'language': 'Romeno',
        'philosophy': 'Equivalência Formal Clara (Romeno Vibrante, Nobre e Profundamente Devocional)',
        'manuscripts': 'Antigo Testamento: Texto Massorético Hebraico. Novo Testamento: Texto Grego com cotejo dos códices e textos da Reforma.',
        'translators': 'Dumitru Cornilescu (1891–1975), monge e teólogo romeno convertido à fé evangélica, com apoio da Sociedade Bíblica Britânica e Estrangeira.',
        'history': (
            'No início do século XX, as Bíblias na Romênia usavam uma linguagem arcaica de difícil compreensão. '
            'Dumitru Cornilescu dedicou-se apaixonadamente a verter a Palavra de Deus em romeno moderno, claro e comovente. '
            'Publicada em 1921 e revisada em 1924 pela BFBS em Londres, a tradução Cornilescu desatou um poderoso avivamento espiritual '
            'que transformou a Romênia e deu origem a milhares de comunidades evangélicas.'
        ),
        'features': [
            'A "Reina-Valera / King James do mundo romeno", padrão inquestionável em todas as igrejas evangélicas.',
            'Estilo literário elegante, cristalino e com imensa capacidade de persuasão bíblica.',
            'A Bíblia dos mártires cristãos que resistiram à brutal perseguição comunista na Romênia.'
        ],
        'theologyAndLegacy': (
            'O texto canônico que nutriu gerações de pastores heroicos na Romênia, como Richard Wurmbrand.'
        ),
        'scopeAndUsage': 'A tradução mais lida e reverenciada na Romênia, Moldávia e comunidades romenas no exterior.',
        'copyright': 'Domínio Público universal.'
    },
    es={
        'name': 'Biblia Rumana Cornilescu 1924 (Traducerea Cornilescu)',
        'fullName': 'Sfânta Scriptură: Traducerea Dumitru Cornilescu (1921 / 1924)',
        'year': '1921 (Completa), 1924 (Revisión)',
        'abbrev': 'RO',
        'language': 'Rumano',
        'philosophy': 'Equivalencia Formal Clara (Prosa Rumana Vibrante y Fiel)',
        'manuscripts': 'Antiguo Testamento: Texto Masorético. Nuevo Testamento: Texto Griego.',
        'translators': 'Dumitru Cornilescu (1891–1975) con el respaldo de la Sociedad Bíblica Británica y Extranjera.',
        'history': (
            'La Biblia indiscutible del cristianismo evangélico en Rumania y Moldavia, '
            'publicada en 1924 y celebrada como la versión que desató el gran avivamiento del siglo XX en Europa del Este.'
        ),
        'features': [
            'La traducción en rumano más amada, memorizada y citada en la historia de la nación.',
            'Claridad diáfana que toca el corazón del lector.'
        ],
        'theologyAndLegacy': (
            'El texto que sostuvo a miles de creyentes en las prisiones clandestinas del régimen comunista rumano.'
        ),
        'scopeAndUsage': 'El estándar absoluto para pastores y congregaciones de habla rumana en todo el mundo.',
        'copyright': 'Dominio Público universal.'
    }
)

# 24. AA (Almeida Revista e Atualizada / Revisada 1993 - Português)
reg(
    'aa',
    en={
        'name': 'Almeida Revista e Corrigida / Revisada (AA / ARC)',
        'fullName': 'Bíblia Sagrada: Tradução de João Ferreira de Almeida — Edição Revista e Corrigida / Atualizada (SBB)',
        'year': '1898 / 1969 / 1993',
        'abbrev': 'AA / ARC',
        'language': 'Portuguese',
        'philosophy': 'Formal Equivalence (Historic Lusophone Protestant Tradition with Textual Updates)',
        'manuscripts': 'Old Testament: Masoretic Text. New Testament: Greek Critical Text and Textus Receptus collated.',
        'translators': 'Originally translated by João Ferreira de Almeida, revised in 1898 in Lisbon and updated by the Bible Society of Brazil (Sociedade Bíblica do Brasil - SBB) in 1969 and 1993.',
        'history': (
            'The Almeida Revised text family represents the historic liturgical backbone of traditional Protestantism in Brazil. '
            'In the late 19th and mid-20th centuries, missionary societies updated Almeida’s syntax while keeping his beloved phrasing intact. '
            'Published and distributed in millions of copies by the Sociedade Bíblica do Brasil (SBB), it was the pulpit Bible of Presbyterian, '
            'Methodist, Baptist, and Assembly of God pioneers across Brazil.'
        ),
        'features': [
            'Historic solemnity of João Ferreira de Almeida’s traditional phrasing.',
            'Balanced formal equivalence, translating clause-by-clause with reverence.',
            'Familiar cadence known by memory by millions of Brazilian churchgoers.'
        ],
        'theologyAndLegacy': (
            'The foundational text of the 20th-century evangelical awakening across Brazil and Portugal.'
        ),
        'scopeAndUsage': 'Extensively used in Brazilian traditional Protestant and Pentecostal churches.',
        'copyright': 'Historic text distributed by Bible Societies.'
    },
    pt={
        'name': 'Almeida Revista e Corrigida / Revisada (AA / ARC)',
        'fullName': 'Bíblia Sagrada: Tradução de João Ferreira de Almeida — Edição Histórica Revisada (SBB)',
        'year': '1898 / 1969 / 1993',
        'abbrev': 'AA / ARC',
        'language': 'Português',
        'philosophy': 'Equivalência Formal Tradicional (Herança Clássica de Almeida com Atualização Textual)',
        'manuscripts': 'Antigo Testamento: Texto Massorético. Novo Testamento: Texto Grego com cotejo tradicional.',
        'translators': 'João Ferreira de Almeida, revisada por comissões missionárias em Lisboa (1898) e continuada pela Sociedade Bíblica do Brasil (SBB).',
        'history': (
            'Esta linhagem de Almeida constitui a coluna vertebral litúrgica e histórica da igreja evangélica brasileira durante o século XX. '
            'Distribuída aos milhões de exemplares pela Sociedade Bíblica do Brasil, foi a Bíblia que ecoou nos primeiros programas de rádio, '
            'escolas dominicais e cultos ao ar livre de norte a sul do Brasil.'
        ),
        'features': [
            'Solene e memorável cadência que moldou o vocabulário devocional de gerações de brasileiros.',
            'Equivalência formal fiel e respeitosa com a tradição da Reforma.',
            'A Bíblia com a qual milhões de fiéis decoraram seus primeiros versículos bíblicos.'
        ],
        'theologyAndLegacy': (
            'O esteio das pioneiras missões protestantes e do avivamento pentecostal no Brasil.'
        ),
        'scopeAndUsage': 'Tradicionalmente presente em milhões de lares e congregações no Brasil e no mundo de fala portuguesa.',
        'copyright': 'Texto histórico da tradição bíblica brasileira.'
    },
    es={
        'name': 'Almeida Revista e Corrigida / Revisada (AA / ARC)',
        'fullName': 'Bíblia Sagrada: Tradução de João Ferreira de Almeida — Edição Histórica Revisada',
        'year': '1898 / 1969 / 1993',
        'abbrev': 'AA / ARC',
        'language': 'Portugués',
        'philosophy': 'Equivalencia Formal Tradicional (Patrimonio Histórico Evangélico Lusófono)',
        'manuscripts': 'Antiguo Testamento: Texto Masorético. Nuevo Testamento: Texto Griego.',
        'translators': 'João Ferreira de Almeida y comités de revisión histórica de las Sociedades Bíblicas en Portugal y Brasil.',
        'history': (
            'El texto histórico más emblemático del protestantismo brasileño durante todo el siglo XX, '
            'equivalente en trascendencia a la Reina-Valera en el mundo hispano.'
        ),
        'features': [
            'Prosa portuguesa venerable y de gran unción espiritual.',
            'El texto clásico memorizado por millones de creyentes en Brasil.'
        ],
        'theologyAndLegacy': (
            'Fundamento del crecimiento evangélico más grande de América del Sur.'
        ),
        'scopeAndUsage': 'Muy leída en congregaciones tradicionales de Brasil y Portugal.',
        'copyright': 'Texto de la tradición bíblica histórica.'
    }
)

# 25. WLC (Westminster Leningrad Codex - Hebraico Bíblico)
reg(
    'wlc',
    en={
        'name': 'Westminster Leningrad Codex (WLC - Hebraico Bíblico)',
        'fullName': 'The Westminster Leningrad Codex (Digital Text of the Masoretic Hebrew Old Testament / Tanakh - כֶּתֶר אַרַם צוֹבָא)',
        'year': '1008 CE (Manuscript) / Modern Scholarly Digital Edition',
        'abbrev': 'WLC',
        'language': 'Biblical Hebrew & Aramaic',
        'philosophy': 'Original Diplomatic Text (Complete Authentic Tiberian Masoretic Text with Vowel Points & Cantillation)',
        'manuscripts': 'Codex Leningradensis (Firkovich B 19 A, preserved in the National Library of Russia in St. Petersburg), copied in Old Cairo in 1008 CE from the master exemplars of the Ben Asher school of Tiberias.',
        'translators': 'Preserved and vocalized by Aaron ben Moses ben Asher and the Tiberian Masoretes (10th century); transcribed and digitally maintained by the J. Alan Groves Center for Advanced Biblical Research at Westminster Theological Seminary (Philadelphia).',
        'history': (
            'The Leningrad Codex is the oldest complete manuscript of the Hebrew Bible (Tanakh) surviving intact today, dated explicitly to 1008 CE. '
            'While the Aleppo Codex is slightly older, large portions of it were tragically lost in the 1947 pogroms. The Leningrad Codex preserves '
            'all 39 books of the Old Testament with pristine Tiberian vocalization (niqqud), accents (ta\'amei hamikra), and Masorah notes. '
            'It serves as the foundation for the standard scholarly printed Hebrew Bibles (Biblia Hebraica Kittel, BHS, and BHQ).'
        ),
        'features': [
            'The pure, inspired words of the Hebrew and Aramaic Old Testament as penned by Moses, David, and the Prophets.',
            'Includes full vowel pointing and cantillation marks representing the ancient oral chanting tradition.',
            'The definitive diplomatic baseline for every modern Old Testament translation worldwide.'
        ],
        'theologyAndLegacy': (
            'Spurgeon said of the Hebrew Scriptures: "Every word of God is pure... He who wrote the book is the Lord of heaven and earth." '
            'The Leningrad Codex proves God’s supernatural, providential preservation of the sacred text across millennia.'
        ),
        'scopeAndUsage': 'The global academic and ecclesiastical standard for all Old Testament scholarship, translation, and exegesis.',
        'copyright': 'Public Domain / Open source digital collation by the J. Alan Groves Center for Advanced Biblical Research.'
    },
    pt={
        'name': 'Westminster Leningrad Codex (WLC - Hebraico Bíblico)',
        'fullName': 'The Westminster Leningrad Codex (Texto Massorético Hebraico do Antigo Testamento / Tanakh)',
        'year': '1008 d.C. (Manuscrito Original) / Edição Digital Acadêmica',
        'abbrev': 'WLC',
        'language': 'Hebraico e Aramaico Bíblicos',
        'philosophy': 'Texto Diplomático Original Inspirado (Texto Massorético Tiberiano Completo com Pontuação e Cantilação)',
        'manuscripts': 'Códice de Leningrado (Firkovich B 19 A, preservado na Biblioteca Nacional da Rússia em São Petersburgo), copiado no Cairo em 1008 d.C. a partir dos autógrafos da escola massorética de Ben Asher de Tiberíades.',
        'translators': 'Preservado pelos escribas massoretas tiberianos (família Ben Asher); mantido e transcrito digitalmente pelo J. Alan Groves Center for Advanced Biblical Research no Westminster Theological Seminary (Filadélfia).',
        'history': (
            'O Códice de Leningrado é o mais antigo manuscrito completo de todo o Antigo Testamento hebraico (Tanakh) sobrevivente no mundo, '
            'datado exatamente de 1008 d.C. Enquanto o Códice de Alepo sofreu perdas parciais em 1947, o Códice de Leningrado permaneceu 100% íntegro '
            'com todos os seus pontos vocálicos, sinais de acentuação e anotações massoréticas de rodapé. '
            'É o texto diplomático universal que serve de base para as edições da Biblia Hebraica Stuttgartensia (BHS).'
        ),
        'features': [
            'As palavras originais inspiradas do Espírito Santo dadas a Moisés, Davi e aos profetas hebreus.',
            'Pontuação vocálica tiberiana completa (niqqud) e marcas de cantilação musical sagrada.',
            'A fonte primária inquestionável da qual foram vertidas todas as Bíblias do Antigo Testamento no mundo.'
        ],
        'theologyAndLegacy': (
            'Charles Spurgeon amava o texto hebraico original e consultava hebraístas para enriquecer suas pregações no Metropolitan Tabernacle. '
            'O Códice de Leningrado é a maior prova viva da preservação milagrosa e providencial das Sagradas Escrituras ao longo dos séculos.'
        ),
        'scopeAndUsage': 'O padrão universal adotado por todas as universidades, seminários de teologia e comitês de tradução bíblica do planeta.',
        'copyright': 'Domínio Público / Colação digital do Westminster Theological Seminary.'
    },
    es={
        'name': 'Westminster Leningrad Codex (WLC - Hebreo Bíblico)',
        'fullName': 'The Westminster Leningrad Codex (Texto Masorético Hebreo del Antiguo Testamento / Tanaj)',
        'year': '1008 d.C. (Manuscrito) / Edición Académica Digital',
        'abbrev': 'WLC',
        'language': 'Hebreo y Arameo Bíblicos',
        'philosophy': 'Texto Diplomático Original Inspirado (Texto Masorético Completo con Vocalización Tiberiana)',
        'manuscripts': 'Códice de Leningrado (Biblioteca Nacional de Rusia en San Petersburgo), copiado en el año 1008 d.C. conforme a la escuela de Ben Asher.',
        'translators': 'Preservado por los masoretas tiberianos y mantenido digitalmente por el Centro J. Alan Groves del Seminario Teológico Westminster.',
        'history': (
            'Es el manuscrito completo más antiguo que existe de todo el Antiguo Testamento hebreo. '
            'Contiene los 39 libros canónicos con todas sus vocales y acentos sagrados intactos, '
            'siendo la base primaria de la Biblia Hebraica Stuttgartensia y de todas las traducciones bíblicas modernas.'
        ),
        'features': [
            'El texto hebreo original inspirado por Dios a través de los profetas bíblicos.',
            'Vocalización tiberiana completa y notas masoréticas de los escribas.',
            'El estándar científico y teológico para cualquier exégesis rigurosa del Antiguo Testamento.'
        ],
        'theologyAndLegacy': (
            'Monumento supremo del cuidado providencial de Dios para que ninguna jota ni tilde de Su Santa Ley se perdiera.'
        ),
        'scopeAndUsage': 'Texto de referencia universal para eruditos, traductores y profesores de hebreo en todo el mundo.',
        'copyright': 'Dominio Público universal.'
    }
)

# 26. TR (Textus Receptus - Grego Koiné do Novo Testamento)
reg(
    'tr',
    en={
        'name': 'Textus Receptus (TR - Greek New Testament - Novum Testamentum Graece)',
        'fullName': 'Novum Testamentum Graece: Textus Receptus (Stephanus 1550 / Scrivener 1894)',
        'year': '1516 (Erasmus) / 1550 (Stephanus) / 1894 (Scrivener Compilation)',
        'abbrev': 'TR',
        'language': 'Ancient Koine Greek',
        'philosophy': 'Original Greek Foundation of the Protestant Reformation',
        'manuscripts': 'Byzantine text-type manuscript tradition, compiled from ancient Greek minuscules and uncials in Western Europe by Desiderius Erasmus, refined by Robert Estienne (Stephanus, 1550) and Theodore Beza (1598), and compiled into final critical form by F. H. A. Scrivener (1894).',
        'translators': 'Desiderius Erasmus of Rotterdam (1516), Robert Estienne (1550), Theodore Beza (1565–1598), and Dr. F. H. A. Scrivener (1894 for Cambridge University Press).',
        'history': (
            'In 1516, Desiderius Erasmus published the first printed edition of the Greek New Testament ("Novum Instrumentum omne"), '
            'unleashing a spiritual earthquake across Europe. For the first time in over a thousand years, scholars and reformers could read '
            'the Apostles’ own words in their original Koine Greek rather than through the filter of the Latin Vulgate. '
            'In 1550, Paris printer Robert Estienne (Stephanus) published the "Editio Regia", introducing for the first time modern verse divisions. '
            'In the 1633 Elzevir edition, it was famously branded: "Textum ergo habes, nunc ab omnibus receptum" (You have therefore the text now received by all), '
            'coining the historic name "Textus Receptus".'
        ),
        'features': [
            'The foundational Greek text underlying all classic Reformation Bibles: Tyndale, Luther, Geneva, King James Version, Reina-Valera, and Almeida.',
            'Includes historically cherished passages such as the Johannine Comma (1 John 5:7-8), the Doxology of the Lord’s Prayer (Matt 6:13), the Pericope Adulterae (John 7:53–8:11), and the Longer Ending of Mark (Mark 16:9-20).',
            'Represents the living liturgical and ecclesiastical consensus of the historic Greek-speaking church across centuries.'
        ],
        'theologyAndLegacy': (
            'Charles Spurgeon preached his immortal sermons holding the King James Bible in his hands, which was a direct, faithful translation of the Textus Receptus. '
            'Spurgeon affirmed: "We have in our common version a translation of the very words spoken by Christ and His Apostles." '
            'The TR is venerated by Reformed and Confessional Christians as the providential vehicle of the Protestant Reformation.'
        ),
        'scopeAndUsage': 'The underlying Greek text for confessional Protestant seminaries, traditional translations, and classical Greek exegesis worldwide.',
        'copyright': 'Public Domain worldwide.'
    },
    pt={
        'name': 'Textus Receptus (TR - Grego Koiné do Novo Testamento)',
        'fullName': 'Novum Testamentum Graece: Textus Receptus (Edição de Robert Estienne 1550 / F.H.A. Scrivener 1894)',
        'year': '1516 (Erasmo) / 1550 (Stephanus) / 1894 (Scrivener)',
        'abbrev': 'TR',
        'language': 'Grego Koiné Bíblico',
        'philosophy': 'Texto Grego Original Fundador da Reforma Protestante',
        'manuscripts': 'Tradição do Texto Bizantino Maioritário, reunida a partir de manuscritos gregos milenares por Erasmo de Roterdã (1516), aperfeiçoada por Robert Estienne (Stephanus, 1550), Teodoro de Beza (1598) e compilada em Cambridge por F. H. A. Scrivener (1894).',
        'translators': 'Erasmo de Roterdã, Robert Estienne, Teodoro de Beza e Dr. Frederick Scrivener.',
        'history': (
            'Em 1516, Erasmo de Roterdã publicou a primeira edição impressa do Novo Testamento grego ("Novum Instrumentum"), '
            'desencadeando a chama da Reforma Protestante. Pela primeira vez após um milênio, teólogos e pastores puderam ler os escritos dos Apóstolos '
            'diretamente no grego original, rompendo com as distorções da Vulgata Latina. '
            'Em 1550, Robert Estienne (Stephanus) lançou a magnífica "Editio Regia", introduzindo pela primeira vez a divisão em versículos que usamos até hoje. '
            'Em 1633, os editores Elzevir cunharam a famosa frase em latim que batizou a obra: "Textum ergo habes, nunc ab omnibus receptum" (Tens portanto o texto agora recebido por todos).'
        ),
        'features': [
            'O texto grego que serviu de base direta para todas as Bíblias clássicas da Reforma: Lutero em alemão, Tyndale e King James em inglês, Reina-Valera em espanhol e João Ferreira de Almeida em português.',
            'Mantém integralmente passagens históricas da fé cristã (como a doxologia do Pai-Nosso em Mt 6:13, a mulher adúltera em Jo 7:53-8:11, o final de Marcos 16:9-20 e o testemunho trinitariano de 1 Jo 5:7-8).',
            'Reflete o texto lido, copiado e preservado providencialmente pelas igrejas cristãs de língua grega através dos séculos.'
        ],
        'theologyAndLegacy': (
            'É o texto grego por trás de cada sermão pregado por Charles Spurgeon no Metropolitan Tabernacle. '
            'Para os teólogos reformados e puritanos, o Textus Receptus é a comprovação máxima da Promessa Divina de preservar '
            'as Sagradas Escrituras puras em todas as épocas.'
        ),
        'scopeAndUsage': 'O padrão grego supremo para os cristãos confessionais, igrejas reformadas, batistas tradicionais e estudiosos do texto bíblico clássico.',
        'copyright': 'Domínio Público universal.'
    },
    es={
        'name': 'Textus Receptus (TR - Griego Koiné del Nuevo Testamento)',
        'fullName': 'Novum Testamentum Graece: Textus Receptus (Stephanus 1550 / Scrivener 1894)',
        'year': '1516 / 1550 / 1894',
        'abbrev': 'TR',
        'language': 'Griego Koiné',
        'philosophy': 'El Texto Griego Original de la Reforma Protestante',
        'manuscripts': 'Tradición de manuscritos bizantinos recopilados por Erasmo de Róterdam (1516), Stephanus (1550), Teodoro de Beza (1598) y F. H. A. Scrivener (1894).',
        'translators': 'Erasmo de Róterdam, Robert Estienne (Stephanus), Teodoro de Beza y Dr. F. H. A. Scrivener.',
        'history': (
            'Publicado en 1516, el Nuevo Testamento Griego devolvió a la cristiandad las palabras auténticas de los apóstoles. '
            'Fue el texto del cual Casiodoro de Reina y Cipriano de Valera tradujeron la inmortal Reina-Valera en español, '
            'Martín Lutero su Biblia alemana, y los traductores ingleses la venerada King James.'
        ),
        'features': [
            'La base textual sagrada sobre la que se edificaron todas las grandes versiones bíblicas de la Reforma Protestante.',
            'Conserva intactos pasajes emblemáticos como la doxología del Padre Nuestro y el final de Marcos 16.',
            'La voz original de los evangelistas y apóstoles preservada con reverencia inmutable.'
        ],
        'theologyAndLegacy': (
            'El fundamento griego sobre el que descansa toda la predicación bíblica de Charles H. Spurgeon y los gigantes puritanos.'
        ),
        'scopeAndUsage': 'Texto de estudio indispensable en seminarios reformados e institutos bíblicos confesionales de todo el mundo.',
        'copyright': 'Dominio Público universal.'
    }
)

# 27. BBE (Bible in Basic English 1949/1964)
reg(
    'bbe',
    en={
        'name': 'Bible in Basic English (BBE)',
        'fullName': 'The Bible in Basic English: Translated by S. H. Hooke (Cambridge University Press, 1949 / 1964)',
        'year': '1949 (New Testament 1941, Complete Bible 1949)',
        'abbrev': 'BBE',
        'language': 'Simple English (Basic English 1,000-Word Vocabulary)',
        'philosophy': 'Controlled Vocabulary Equivalence (Simplicity, Directness, and Global Accessibility)',
        'manuscripts': 'Old Testament: Masoretic Text. New Testament: Greek Critical Text and Textus Receptus.',
        'translators': 'Professor S. H. Hooke of the University of London, under the direction of C. K. Ogden (inventor of Basic English) and the Orthological Institute, in collaboration with Cambridge University Press.',
        'history': (
            'In the 1930s, linguist C. K. Ogden created "Basic English", a simplified system of the English language utilizing only 850 core words '
            'capable of expressing almost any idea. Professor S. H. Hooke of London University led a distinguished team of scholars to translate '
            'the entire Bible using these 850 words plus 100 special biblical words and 50 poetic words (1,000 words total). '
            'Published by Cambridge University Press in 1949, it provided an astonishingly clear window into the Scriptures for ESL learners, children, '
            'and readers across Asia and Africa.'
        ),
        'features': [
            'Restricted to a carefully curated vocabulary of exactly 1,000 English words.',
            'Unrivaled simplicity and directness, making complex passages immediately transparent.',
            'Extremely valuable for international evangelism, literacy projects, and early readers.'
        ],
        'theologyAndLegacy': (
            'Proved that the majestic truths of the Christian faith can be articulated with power using the most humble, simple human words.'
        ),
        'scopeAndUsage': 'Widely read by English learners, mission agencies, and literacy programs worldwide.',
        'copyright': 'Public Domain worldwide.'
    },
    pt={
        'name': 'Bible in Basic English (BBE)',
        'fullName': 'The Bible in Basic English: Traduzida pelo Prof. S. H. Hooke (Cambridge, 1949 / 1964)',
        'year': '1949 (Novo Testamento em 1941)',
        'abbrev': 'BBE',
        'language': 'Inglês Básico (Vocabulário Controlado de 1.000 Palavras)',
        'philosophy': 'Equivalência com Vocabulário Controlado (Simplicidade, Clareza e Acessibilidade Global)',
        'manuscripts': 'Antigo Testamento: Texto Massorético. Novo Testamento: Texto Grego.',
        'translators': 'Professor S. H. Hooke (Universidade de Londres) e C. K. Ogden (criador do Basic English), em cooperação com a Cambridge University Press.',
        'history': (
            'Desenvolvida para tornar a Bíblia acessível a qualquer pessoa no mundo que estivesse aprendendo inglês. '
            'Utiliza rigorosamente apenas 850 palavras do inglês básico mais 150 termos bíblicos específicos (1.000 palavras no total). '
            'Publicada pela Universidade de Cambridge em 1949, provou que a mensagem divina pode ser compreendida sem jargões complexos.'
        ),
        'features': [
            'Vocabulário simplificado de exatamente 1.000 palavras em inglês.',
            'Frases diretas e diáfanas que facilitam a leitura para estudantes de inglês e novos leitores.',
            'Ferramenta missionária extraordinária em países em desenvolvimento.'
        ],
        'theologyAndLegacy': (
            'Demonstrou a universalidade do Evangelho em um formato humilde, direto e acessível a todas as nações.'
        ),
        'scopeAndUsage': 'Adotada globalmente em programas de alfabetização bíblica e ensino de inglês.',
        'copyright': 'Domínio Público universal.'
    },
    es={
        'name': 'Bible in Basic English (BBE)',
        'fullName': 'The Bible in Basic English: Traducida por S. H. Hooke (Cambridge University Press, 1949)',
        'year': '1949',
        'abbrev': 'BBE',
        'language': 'Inglés Básico (Vocabulario de 1.000 Palabras)',
        'philosophy': 'Equivalencia de Vocabulario Controlado (Máxima Claridad y Accesibilidad Internacional)',
        'manuscripts': 'Antiguo Testamento: Texto Masorético. Nuevo Testamento: Texto Griego.',
        'translators': 'Profesor S. H. Hooke de la Universidad de Londres y C. K. Ogden con la Cambridge University Press.',
        'history': (
            'Creada para que cualquier persona en el mundo con nociones elementales de inglés pudiera leer las Escrituras. '
            'Emplea estrictamente un vocabulario de 1.000 palabras, conservando la fidelidad teológica del mensaje bíblico.'
        ),
        'features': [
            'Estructura gramatical limpia y sencilla.',
            'Invaluable para estudiantes de inglés y evangelismo en países no anglófonos.'
        ],
        'theologyAndLegacy': (
            'Un puente lingüístico que ha llevado el mensaje de salvación a millones de lectores en todos los continentes.'
        ),
        'scopeAndUsage': 'Texto de referencia en proyectos misioneros internacionales.',
        'copyright': 'Dominio Público universal.'
    }
)

print(f"Part 3 loaded ({len(PART3)} translations).")
