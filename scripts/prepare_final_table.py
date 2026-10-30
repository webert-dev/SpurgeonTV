# -*- coding: utf-8 -*-
import json
import re

with open('scripts/parsed_table.json', 'r', encoding='utf-8') as f:
    items = json.load(f)

# Dictionary to expand book names
BOOK_NAMES = {
    'Gn': 'Gênesis',
    'Êx': 'Êxodo',
    'x': 'Êxodo',
    'Lv': 'Levítico',
    'Nm': 'Números',
    'Dt': 'Deuteronômio',
    'Js': 'Josué',
    'Jz': 'Juízes',
    '1 Sm': '1 Samuel',
    '2 Sm': '2 Samuel',
    'Sl': 'Salmos',
    'Is': 'Isaías',
    'Jr': 'Jeremias',
    'Ez': 'Ezequiel',
    'Dn': 'Daniel',
    'Jn': 'Jonas',
    'Mq': 'Miqueias',
    'Ag': 'Ageu',
    'Zc': 'Zacarias',
    'Ml': 'Malaquias',
    'Rm': 'Romanos',
    'Lc': 'Lucas',
}

def clean_ref(ref_str):
    ref_str = ref_str.strip()
    # Replace Jz 7.25 with Jz 7:25
    ref_str = ref_str.replace('Jz 7.25', 'Jz 7:25')
    # Replace Jr 23:56 with Jr 23:5-6
    ref_str = ref_str.replace('Jr 23:56', 'Jr 23:5-6')
    # Replace Sl 22: 16-18 with Sl 22:16-18
    ref_str = ref_str.replace('Sl 22: ', 'Sl 22:')
    # Replace Mq 5:2,4-5 with Mq 5:2, 4-5
    ref_str = ref_str.replace('Mq 5:2,4-5', 'Mq 5:2, 4-5')
    
    # Expand abbreviation
    for abbrev, full in sorted(BOOK_NAMES.items(), key=lambda x: -len(x[0])):
        if ref_str.startswith(abbrev + ' '):
            return full + ref_str[len(abbrev):]
        if ref_str == abbrev:
            return full
    return ref_str

# Specific exact cleanups for narrative sentences where the verse is embedded
manual_wording = {
    3: "'à semelhança de Adão, conforme a sua imagem'",
    8: "‘Deus não poupou o Seu próprio Filho, mas O entregou por todos nós’",
    10: "'nos dias vindouros'",
    13: "Um dos príncipes midianitas, por exemplo, foi morto num lagar, trabalhando",
    14: "Deus pisando o lagar sozinho, como Isaías descreveu",
    15: "‘Vocês planejaram o mal contra mim, mas Deus o tornou em bem, para que hoje fosse preservada a vida de muitos.’",
    18: "enquanto os animais puros deveriam ser sacrificados, os filhos primogênitos dos homens deveriam ser resgatados pelo pagamento de um preço, por um sacrifício substitutivo",
    23: "assim como Moisés levantou a serpente de bronze no deserto, para que todo o que olhasse para ela fosse curado",
    26: "Assim como Moisés foi chamado servo do Senhor ('ebed Yahwéh), também Josué recebeu esse mesmo título quando morreu",
    29: "O Anjo do Senhor apareceu — primeiro para advertir Israel de que ele jamais quebraria seu pacto",
    30: "anunciar o nascimento de um libertador consagrado a Deus desde o nascimento, Sansão",
    32: "'Todo o Israel... reconhecia que Samuel estava confirmado como profeta do Senhor.'",
    33: "Como juiz, Samuel governou Israel com integridade — percorrendo um circuito anual por Betel, Gilgal e Mizpa",
    34: "levantaria um 'sacerdote fiel' que agiria conforme o Seu coração... construiu um altar em Ramá e ofereceu sacrifícios em favor de Israel, intercedendo pelo povo diante de Deus",
    35: "'Dá-nos um rei, como têm todas as nações!'",
    36: "'Atenda a tudo o que o povo está lhe pedindo; não foi a você que rejeitaram; foi a mim que rejeitaram como rei.'",
    38: "Ele indevidamente tomou para si o papel de sacerdote, oferecendo sacrifício sem autorização",
    39: "desobedeceu à ordem do Senhor de exterminar Amaleque",
    40: "'Você rejeitou a palavra do Senhor, e o Senhor o rejeitou como rei de Israel!'",
    43: "'O homem vê a aparência, mas o Senhor vê o coração'",
    46: "'o ungido do Deus de Jacó' (meshîah 'elohê ya'aqob)",
    86: "'Peguem-me e atirem-me ao mar, e ele se acalmará para vocês'",
    88: "Jonas orou dizendo que havia clamado lá do fundo do abismo — ao Sheol — até os fundamentos dos montes. A terra, com os seus trincos, parecia tê-lo encerrado para sempre.",
    89: "no terceiro dia, o Senhor deu ordens ao peixe, e ele vomitou Jonas em terra firme."
}

rows_output = []

for item in items:
    num = item['num']
    part = item['part']
    ref = clean_ref(item['ref'])
    
    if num in manual_wording:
        written = manual_wording[num]
    else:
        written = item['verse_written']
    
    # Clean quotes wrapping
    written = written.strip()
    # replace single newlines with spaces
    written = re.sub(r'\s+', ' ', written)
    
    rows_output.append({
        'num': num,
        'part': part,
        'ref': ref,
        'written': written
    })

with open('scripts/final_verse_table.json', 'w', encoding='utf-8') as f:
    json.dump(rows_output, f, ensure_ascii=False, indent=2)

print(f"Prepared {len(rows_output)} rows.")
