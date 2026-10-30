# -*- coding: utf-8 -*-
import json

p48_es = "Aunque había resucitado, nadie lo había reconocido de inmediato, ni siquiera sus propios seguidores. La expectativa frustrada, la falta de fe y la honda decepción hicieron que, ante sus ojos, los rasgos del Maestro parecieran cambiados o que sus ojos estuvieran «impedidos» de asociarlo con el hombre quebrantado y crucificado tres días antes de aquel encuentro."
p49_es = "Jesús divisó a Cleofás y al joven Natanael, dos discípulos que, saliendo de Jerusalén, se dirigían a la aldea de Emaús. Comenzó a hablar con ellos. Su voz transmitía la autoridad serena y la luz de quien conoce cada palabra de las Escrituras y el fondo mismo del alma humana.[EN_REF:3][EN_REF:4]"

p48_en = "Though risen, no one had yet recognized him immediately, not even his closest followers. Frustrated expectations, lack of faith, and crushing disappointment caused his features in their eyes to appear altered, or their eyes to be \"kept from\" associating him with the broken, crucified man of three days before."
p49_en = "Jesus drew near to Cleopas and young Nathaniel, two disciples who, leaving Jerusalem, were traveling toward the village of Emmaus. He began to converse with them. His voice carried the gentle authority and profound clarity of One who knows every word of the Scriptures and the deepest depths of the human soul.[EN_REF:3][EN_REF:4]"

with open('translations/emmaus_sermon/batch_1_es.json', 'r', encoding='utf-8') as f:
    es_data = json.load(f)
es_data['48'] = p48_es
es_data['49'] = p49_es
with open('translations/emmaus_sermon/batch_1_es.json', 'w', encoding='utf-8') as f:
    json.dump(es_data, f, ensure_ascii=False, indent=2)

with open('translations/emmaus_sermon/batch_1_en.json', 'r', encoding='utf-8') as f:
    en_data = json.load(f)
en_data['48'] = p48_en
en_data['49'] = p49_en
with open('translations/emmaus_sermon/batch_1_en.json', 'w', encoding='utf-8') as f:
    json.dump(en_data, f, ensure_ascii=False, indent=2)

print("Updated batch 1 for ES and EN.")
