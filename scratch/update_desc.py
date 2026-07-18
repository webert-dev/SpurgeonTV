import json

filepath = r'c:\Users\fcout\SISTEMA_FAMILIA\04_NEGOCIOS_E_CARREIRAS\04.4_Tecnologia_e_Programacao\SPURGEONTV\lib\videosData.json'

with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)

desc_en = """Here is the intimate story of C.H Spurgeon, one of the greatest preachers in the history of the church. We follow Spurgeon from his youth where, as a young preacher he is surprisingly called to minister in London and soon captures the love and respect of the nation. Spurgeon will go on to become one of England's most influential and beloved figures.

This powerful, inspirational docu-dama faithfully recreates the times of C.H. Spurgeon and brings the “people’s preacher” to life as it follows his trials and triumphs with historical accuracy.

Made by the award-winning Christian Television Association and filmed on location in England, Scotland, France and Germany, this film vividly captures the spirit and message of a man whose eventful — and sometimes controversial — life is highly relevant to the twenty-first century.

An international coproduction with CTA Productions in association with Christian History Institute, CWR (UK), ERF Germany. Written, produced and directed by Crawford Telfer. Presented by Andy Harrison, featuring Christopher Hawes and Stephen Daltry as Spurgeon (younger and older), and introducing Sarah Mardel as Susannah Spurgeon. Music by Steven Faux. Executive Producer Malcolm Turner."""

desc_pt = """Aqui está a história íntima de C.H. Spurgeon, um dos maiores pregadores da história da igreja. Acompanhamos Spurgeon desde sua juventude, onde, como um jovem pregador, ele é surpreendentemente chamado para ministrar em Londres e logo conquista o amor e o respeito da nação. Spurgeon se tornaria uma das figuras mais influentes e amadas da Inglaterra.

Este poderoso e inspirador docudrama recria fielmente a época de C.H. Spurgeon e dá vida ao "pregador do povo", acompanhando suas provações e triunfos com precisão histórica.

Produzido pela premiada Christian Television Association e filmado em locações na Inglaterra, Escócia, França e Alemanha, este filme captura vividamente o espírito e a mensagem de um homem cuja vida agitada - e por vezes controversa - é altamente relevante para o século XXI.

Uma coprodução internacional com a CTA Productions em associação com o Christian History Institute, CWR (Reino Unido) e ERF Alemanha. Escrito, produzido e dirigido por Crawford Telfer. Apresentado por Andy Harrison, estrelando Christopher Hawes e Stephen Daltry como Spurgeon (jovem e mais velho), e introduzindo Sarah Mardel como Susannah Spurgeon. Música de Steven Faux. Produtor Executivo: Malcolm Turner."""

desc_es = """Aquí está la historia íntima de C.H. Spurgeon, uno de los más grandes predicadores en la historia de la iglesia. Seguimos a Spurgeon desde su juventud donde, como un joven predicador, es sorprendentemente llamado a ministrar en Londres y pronto captura el amor y el respeto de la nación. Spurgeon se convertiría en una de las figuras más influyentes y queridas de Inglaterra.

Este poderoso e inspirador docudrama recrea fielmente los tiempos de C.H. Spurgeon y da vida al "predicador del pueblo", siguiendo sus pruebas y triunfos con precisión histórica.

Realizada por la galardonada Christian Television Association y filmada en localizaciones de Inglaterra, Escocia, Francia y Alemania, esta película capta vívidamente el espíritu y el mensaje de un hombre cuya vida llena de acontecimientos —y a veces controvertida— es muy relevante para el siglo XXI.

Una coproducción internacional con CTA Productions en asociación con Christian History Institute, CWR (Reino Unido), ERF Alemania. Escrita, producida y dirigida por Crawford Telfer. Presentada por Andy Harrison, protagonizada por Christopher Hawes y Stephen Daltry como Spurgeon (joven y mayor), y presentando a Sarah Mardel como Susannah Spurgeon. Música de Steven Faux. Productor ejecutivo: Malcolm Turner."""

for lang, desc in [('en', desc_en), ('pt', desc_pt), ('es', desc_es)]:
    for v in data[lang]:
        if v['id'] == 'cKYQW5KB40U':
            v['description'] = desc
            break

with open(filepath, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
