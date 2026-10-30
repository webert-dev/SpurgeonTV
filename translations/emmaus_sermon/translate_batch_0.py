# -*- coding: utf-8 -*-
import json
import os

BATCH_0_ES = {
    0: "**El Sermón de Emaús**",
    1: "***¿Conoces las Promesas Mesiánicas del Antiguo Testamento?***",
    2: "Una reconstrucción literaria de la enseñanza de Jesús a los dos discípulos en el camino a Emaús basada en Lucas 24:27.",
    4: "*«Y comenzando por Moisés y por todos los profetas, les explicó lo que se refería a él (acerca del Mesías) en todas las Escrituras».*",
    5: "**EL SERMÓN DE EMAÚS**",
    6: "Datos Internacionales de Catalogación en la Publicación (CIP)",
    7: "C837s",
    9: "Costa, Webert T. S.",
    10: "    El sermón de Emaús : ¿conoces las promesas mesiánicas del Antiguo Testamento? / Webert T. S. Costa. – 1. ed. – São Paulo, SP: Ed. del Autor, 2026.",
    12: "Obra literaria que incluye índice de versículos mesiánicos y notas explicativas finales.",
    14: "ISBN 978-65-02-46170-9 (e-book)",
    15: "ISBN 978-65-02-46171-6 (libro impreso)",
    18: "1. Jesucristo - Profecías. 2. Biblia. A.T. - Tipología. 3. Biblia. N.T. Lucas - Crítica e interpretación. 4. Teología bíblica. 5. Apologética cristiana. I. Título.",
    20: "Catálogo sistemático:",
    21: "CDD 232.12 – Mesianismo / Profecías mesiánicas",
    22: "CDU 2-32 - Personas en la religión / Mesías",
    24: "Copyright © 2026",
    25: "Todos los derechos reservados. Ninguna parte de esta publicación puede ser reproducida, archivada o transmitida por ningún medio —electrónico, mecánico, fotocopia, grabación u otros— sin el permiso previo por escrito del autor, excepto para breves citas en reseñas o artículos críticos.",
    26: "**Declaración de Autoría y Uso Responsable de Inteligencia Artificial**",
    27: "Todo el contenido y el proceso creativo de esta obra fueron desarrollados por inteligencia humana. En compromiso con la transparencia, declaramos que hubo un uso eventual y responsable de herramientas de Inteligencia Artificial (I.A.) en breves etapas, como soporte en las revisiones textuales y el desarrollo de la imagen de portada.",
    28: "**Compromiso Social y Evangelístico**",
    29: "Reafirmando la vocación ministerial y el propósito evangelístico de esta obra, el autor hace público el compromiso de que una porción significativa de los recursos netos obtenidos con la comercialización de esta obra (en sus ediciones impresas y digitales) será destinada al financiamiento, adquisición y distribución gratuita o patrocinada de Santas Biblias y ejemplares de este libro para iglesias, misiones y personas en situación de vulnerabilidad, a fin de que conozcan a Jesucristo, Hijo de Dios, como su único, suficiente y eterno Salvador.",
    31: "Para conocer más detalles, envíe un correo electrónico al autor: webert@ymail.com .",
    32: "**Nota del Autor**",
    34: "**¿Por qué la Biblia no registró la totalidad de todas las predicaciones y obras de Jesús?**",
    35: "El apóstol Juan nos ofrece una pista al concluir su Evangelio afirmando que, si se escribieran en detalle cada una de las obras y enseñanzas de Cristo, ni siquiera en el mundo entero cabrían los libros que se habrían de escribir (Jn 21:25). Nos recordó que el Espíritu Santo permitió la redacción explícita de todo lo que es plenamente suficiente para nuestra salvación, fe y edificación (Jn 20:31).",
    36: "La primera y principal parte de este libro es una reconstrucción literaria y devocional del discurso que Jesús pudo haber dirigido a los dos discípulos en el camino a Emaús, según lo registrado en Lucas 24:13-35. El evangelista nos informa que Jesús, «comenzando por Moisés y por todos los profetas», les explicó todo lo que tocante a él mismo, el Mesías, el Cristo, se hallaba en todas las Escrituras. La transcripción exacta y palabra por palabra de este sermón histórico no quedó grabada en las páginas del Nuevo Testamento. Pero la pregunta vuelve a surgir: ¿Por qué una de las exposiciones exegéticas más sublimes de la historia permaneció registrada únicamente como un sumario?",
    37: "La caminata de Jerusalén a Emaús era de aproximadamente 11 kilómetros (60 estadios, según se registra en Lc 24:13), lo que tomaba entre dos y tres horas a pie. Tiempo más que suficiente para una enseñanza extensa y profunda de las Escrituras.",
    38: "Creemos que, con esta aparente omisión, el Espíritu Santo nos hizo a cada uno de nosotros una invitación y un desafío permanente: el de abrir el Antigo Testamento por cuenta propia para recorrer el mismo camino hermenéutico y buscar y descubrir a Cristo en cada una de sus páginas.",
    39: "El discurso sigue el orden canónico de las Escrituras Hebreas: la Torá (Moisés), los Profetas Anteriores (de Josué a Reyes), los Escritos Poéticos (Salmos) y los Profetas Posteriores (de Isaías a Malaquías), conforme a la estructura empleada por el propio Jesús en Lucas 24:44: «Era necesario que se cumpliera todo lo que está escrito acerca de mí en la Ley de Moisés, en los Profetas y en los Salmos».",
    40: "Las referencias entre corchetes en el cuerpo del texto indican los pasajes bíblicos del Antiguo Testamento mencionados. En notas finales se encuentran dispuestos los comentarios exegéticos, teológicos y observaciones del autor, referenciando cada sección de la obra tras el desenlace de la narrativa, a fin de hacer más fluida la lectura del texto artístico.[EN_REF:1][EN_REF:2]",
    41: "Esta obra no pretende «añadir» nada a la Biblia. Si esta lectura hace que su corazón arda y lo conduce de regreso a la lectura directa de las Sagradas Escrituras, este libro habrá cumplido plenamente su propósito.",
    42: "¡Una cosa más! Al final del libro, en la última página, ¡tengo una petición y también una sorpresa para ti! ¡Espero que la disfrutes!",
    43: "¡La paz del Señor! ¡Buena lectura!"
}

BATCH_0_EN = {
    0: "**The Emmaus Sermon**",
    1: "***Do You Know the Messianic Promises of the Old Testament?***",
    2: "A literary reconstruction of Jesus' teaching to the two disciples on the road to Emmaus based on Luke 24:27.",
    4: "*\"And beginning with Moses and all the Prophets, he explained to them what was said in all the Scriptures concerning himself (concerning the Messiah).\"*",
    5: "**THE EMMAUS SERMON**",
    6: "Cataloging-in-Publication Data (CIP)",
    7: "C837s",
    9: "Costa, Webert T. S.",
    10: "    The Emmaus sermon : do you know the messianic promises of the Old Testament? / Webert T. S. Costa. – 1st ed. – São Paulo, SP: Author's Edition, 2026.",
    12: "Literary work including an index of messianic verses and final explanatory notes.",
    14: "ISBN 978-65-02-46170-9 (e-book)",
    15: "ISBN 978-65-02-46171-6 (print edition)",
    18: "1. Jesus Christ - Prophecies. 2. Bible. O.T. - Typology. 3. Bible. N.T. Luke - Criticism and interpretation. 4. Biblical theology. 5. Christian apologetics. I. Title.",
    20: "Systematic catalog:",
    21: "CDD 232.12 – Messianism / Messianic prophecies",
    22: "CDU 2-32 - Persons in religion / Messiah",
    24: "Copyright © 2026",
    25: "All rights reserved. No part of this publication may be reproduced, stored, or transmitted in any form or by any means — electronic, mechanical, photocopying, recording, or otherwise — without the prior written permission of the author, except for brief quotations in critical reviews or articles.",
    26: "**Statement of Authorship and Responsible Use of Artificial Intelligence**",
    27: "All content and the creative process of this work were developed by human intelligence. In commitment to transparency, we state that there was occasional and responsible use of Artificial Intelligence (A.I.) tools in brief stages, as an aid in textual proofreading and the design of the cover artwork.",
    28: "**Social and Evangelistic Commitment**",
    29: "Reaffirming the ministerial vocation and evangelistic purpose of this work, the author makes a public commitment that a substantial portion of the net proceeds generated from the sale of this book (in its print and digital editions) will be dedicated to funding, acquiring, and distributing free or sponsored copies of the Holy Bible and this book to churches, mission fields, and individuals in vulnerable situations, so that they may come to know Jesus Christ, the Son of God, as their only, all-sufficient, and eternal Savior.",
    31: "For further details, please contact the author via email: webert@ymail.com .",
    32: "**Author's Note**",
    34: "**Why did the Bible not record the full text of all Jesus' sermons and deeds?**",
    35: "The apostle John offers us an answer as he concludes his Gospel, affirming that if every one of the deeds and teachings of Christ were written down in detail, even the whole world would not have room for the books that would be written (Jn 21:25). He reminded us that the Holy Spirit granted the explicit written record of all that is entirely sufficient for our salvation, faith, and edification (Jn 20:31).",
    36: "The first and largest portion of this book is a literary and devotional reconstruction of the discourse Jesus may have delivered to the two disciples on the road to Emmaus, as recorded in Luke 24:13-35. The evangelist informs us that Jesus, \"beginning with Moses and all the Prophets,\" explained to the disciples everything concerning himself—the Messiah, the Christ—found in all the Scriptures. The verbatim, word-for-word transcript of that historic sermon was not inscribed upon the pages of the New Testament. Yet the question returns: Why did one of the most sublime exegetical expositions in human history remain preserved only as a summary?",
    37: "The walk from Jerusalem to Emmaus was approximately 11 kilometers (about seven miles, or sixty stadia, as recorded in Lk 24:13), which would require between two and three hours on foot. Ample time for an extensive and profound exposition of the Scriptures.",
    38: "We believe that through this apparent omission, the Holy Spirit has extended to each of us a permanent invitation and challenge: to open the Old Testament for ourselves, walk that same hermeneutical road, and seek and discover Christ across every page.",
    39: "The discourse follows the canonical order of the Hebrew Scriptures: the Torah (Moses), the Former Prophets (Joshua through Kings), the Poetic Writings (Psalms), and the Latter Prophets (Isaiah through Malachi), reflecting the very structure employed by Jesus in Luke 24:44: \"Everything must be fulfilled that is written about me in the Law of Moses, the Prophets and the Psalms.\"",
    40: "The references in brackets throughout the text indicate the Old Testament passages cited. In the final endnotes, theological and exegetical comments and observations from the author are arranged, annotating each section of the work following the conclusion of the narrative, so as to maintain the uninterrupted flow of the artistic prose.[EN_REF:1][EN_REF:2]",
    41: "This work does not intend to \"add\" anything to the Bible. If this reading causes your heart to burn within you and leads you back to direct engagement with the Holy Scriptures, this book will have achieved its purpose in full.",
    42: "One more thing! At the very end of the book, on the final page, I have a request and a special surprise for you! I hope you enjoy it!",
    43: "The peace of the Lord be with you! Happy reading!"
}

# Save partial files
os.makedirs('translations/emmaus_sermon', exist_ok=True)
with open('translations/emmaus_sermon/batch_0_es.json', 'w', encoding='utf-8') as f:
    json.dump(BATCH_0_ES, f, ensure_ascii=False, indent=2)
with open('translations/emmaus_sermon/batch_0_en.json', 'w', encoding='utf-8') as f:
    json.dump(BATCH_0_EN, f, ensure_ascii=False, indent=2)

print("Batch 0 (Pre-textuals 0-43) written for ES and EN.")
