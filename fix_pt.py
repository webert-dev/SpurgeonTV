import json, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('lib/sermon-dates.json', encoding='utf-8') as f:
    data = json.load(f)

fixes = {
    'na manhã de no domingo':       'na manhã do domingo',
    'na manhã de no sábado':        'na manhã do sábado',
    'na manhã de na segunda-feira': 'na manhã de segunda-feira',
    'na manhã de na terça-feira':   'na manhã de terça-feira',
    'na manhã de na quarta-feira':  'na manhã de quarta-feira',
    'na manhã de na quinta-feira':  'na manhã de quinta-feira',
    'na manhã de na sexta-feira':   'na manhã de sexta-feira',
    'na noite de no domingo':       'na noite do domingo',
    'na noite de no sábado':        'na noite do sábado',
    'na noite de na segunda-feira': 'na noite de segunda-feira',
    'na noite de na terça-feira':   'na noite de terça-feira',
    'na noite de na quarta-feira':  'na noite de quarta-feira',
    'na tarde de no domingo':       'na tarde do domingo',
    'na tarde de no sábado':        'na tarde do sábado',
}

count = 0
for k, v in data.items():
    for bad, good in fixes.items():
        if bad in v['pt']:
            v['pt'] = v['pt'].replace(bad, good)
            count += 1

with open('lib/sermon-dates.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print(f'Fixed {count} PT strings. Total entries: {len(data)}')

for k in ['5', '11', '15', '427', '20']:
    if k in data:
        print(f'[{k}] PT: {data[k]["pt"]}')
