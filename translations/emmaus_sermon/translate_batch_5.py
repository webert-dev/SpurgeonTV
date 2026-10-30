# -*- coding: utf-8 -*-
import json
import os

BATCH_5_ES = {
    389: "**PARTE V - «¿NO ERA NECESARIO?»**",
    391: "La aldea de Emaús despuntaba ya ante los caminantes, bañada por los últimos destellos dorados del sol poniente. El Viajero Jesús hizo ademán de continuar adelante por el sendero que rodeaba el poblado, pero Cleofás se adelantó conmovido y detuvo suavemente la túnica de su Maestro.",
    392: "Con la voz entrecortada por la urgencia de quien siente renacer la esperanza tras el abismo de la angustia, exclamó:",
    393: "«¡Señor, quédate con nosotros! Ya es tarde y la noche caerá pronto sobre los caminos de Judea. No nos desampares ahora, pues tu palabra nos ha devuelto la luz. ¡Entra en nuestra casa, comparte nuestra mesa!»",
    394: "Jesús consintió y, mientras tomaba agua de un cántaro en el umbral de la vivienda para limpiar el polvo del camino de sus pies, concluyó:",
    395: "«Ustedes me preguntaban por qué el Mesías debía padecer. Ahora ya tienen la respuesta divina. Todas las Escrituras dan testimonio de él: desde la simiente de la mujer en el huerto del Edén hasta el Cordero de Dios proclamado por Juan el Bautista. Desde la promesa eterna a Abraham hasta el nuevo pacto revelado a Jeremías. Desde el trono inmutable jurado a David hasta el glorioso Hijo del Hombre contemplado por Daniel.",
    396: "Desde la serpiente de bronce levantada en el desierto hasta el Siervo de Isaías, traspasado por nuestras rebeliones.",
    397: "*«¿Acaso no tenía que sufrir el Cristo estas cosas antes de entrar en su gloria?».* [Lc 24:26]",
    398: "El sufrimiento de Jesucristo jamás representó la frustración del propósito de Dios: ¡era el plan eterno de Dios en acción! La cruz no fue la derrota, sino el madero santo mediante el cual el Cordero inmaculado quitó el pecado del mundo; mediante el cual la simiente de la mujer aplastó para siempre la cabeza de la serpiente; el Sacerdote según Melquisedec ofreció el sacrificio perfecto y definitivo; y el Rey de reyes inauguró su Reino eterno».",
    399: "Al entrar en la humilde estancia, Cleofás dispuso la lámpara de aceite sobre la mesa y, mirando fijamente al Forastero con los ojos radiantes de consuelo, exclamó:",
    400: "«Señor, el peso insoportable que nos aplastaba al salir de Jerusalén ha quedado atrás en el camino. Tus palabras han devuelto el aliento a nuestra alma. Siéntate a nuestra mesa; el pan está servido, y no queremos que termine esta bendición».",
    401: "*«Estando a la mesa con ellos, tomó el pan, lo bendijo, lo partió y se lo dio. Entonces se les abrieron los ojos y lo reconocieron, pero él desapareció de su vista.*",
    402: "*Se decían el uno al otro: ¿Acaso no ardía nuestro corazón mientras nos hablaba en el camino y nos explicaba las Escrituras?».*",
    403: "— Lucas 24:30-32"
}

BATCH_5_EN = {
    389: "**PART V - \"WAS IT NOT NECESSARY?\"**",
    391: "The village of Emmaus now appeared ahead of the travelers, bathed in the tender golden glow of the setting sun. The Traveler, Jesus, made as if he were going farther, continuing past the village along the ascending road, but Cleopas stepped forward and gently laid hold of the Master's cloak.",
    392: "With a voice shaking with the urgency of one whose hope had been miraculously reborn from the ashes of despair, he pleaded:",
    393: "\"Lord, stay with us! It is nearly evening; the day is almost over, and darkness will soon envelope the roads of Judea. Do not leave us now, for your words have brought heaven's light to our souls. Come in, break bread at our table!\"",
    394: "Jesus consented. And as he poured water from a clay pitcher at the threshold to wash the road dust from his feet, he concluded:",
    395: "\"You asked me why the Messiah had to suffer. Now you hold heaven's answer. All the Scriptures bear witness of him—from the seed of the woman in the garden of Eden to the Lamb of God proclaimed by John the Baptist. From the covenant promise given to Abraham to the new covenant written upon the heart in Jeremiah. From the everlasting throne sworn to David to the heavenly Son of Man seen by Daniel.",
    396: "\"From the bronze serpent lifted high in the wilderness to the Servant of Isaiah, pierced through for our transgressions.",
    397: "*\"Did not the Messiah have to suffer these things and then enter his glory?\"* [Lk 24:26]",
    398: "\"The suffering of Jesus Christ was never a defeat of God's redemptive purpose—it was the very purpose of God fulfilled. The cross was not the end—it was the holy altar whereby the divine Lamb took away the sin of the world; whereby the seed of the woman crushed the serpent's head; whereby the Priest in the order of Melchizedek offered the one all-sufficient sacrifice; and whereby the King of kings inaugurated his eternal Kingdom.\"",
    399: "Entering the simple dwelling, Cleopas set the oil lamp upon the table and, gazing intently into the face of their Traveler with tears of joy, whispered:",
    400: "\"Lord, the bitter grief we carried as we fled Jerusalem has vanished along the road. Your words have breathed life back into our souls. Sit with us; the bread is set, and we cannot bear for this fellowship to end.\"",
    401: "*\"When he was at the table with them, he took bread, gave thanks, broke it and began to give it to them. Then their eyes were opened and they recognized him, and he disappeared from their sight.*",
    402: "*They asked each other, 'Were not our hearts burning within us while he talked with us on the road and opened the Scriptures to us?'\"*",
    403: "— Luke 24:30-32"
}

# Save batch 5
with open('translations/emmaus_sermon/batch_5_es.json', 'w', encoding='utf-8') as f:
    json.dump(BATCH_5_ES, f, ensure_ascii=False, indent=2)
with open('translations/emmaus_sermon/batch_5_en.json', 'w', encoding='utf-8') as f:
    json.dump(BATCH_5_EN, f, ensure_ascii=False, indent=2)

print("Batch 5 (Conclusion 389-404) successfully generated for ES and EN.")
