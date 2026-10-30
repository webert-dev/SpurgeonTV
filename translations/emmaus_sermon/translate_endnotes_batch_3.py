# -*- coding: utf-8 -*-
import json
import os

ENDNOTES_36_50_ES = {
    "36": [
        "El Salmo 22 no es simplemente un grito de angustia personal: es el mapa profético que traza el itinerario del Gólgota hasta el triunfo universal del Mesías.",
        "David describe tormentos físicos que él jamás experimentó: manos y pies traspasados, huesos descoyuntados, sed abrasadora y el sorteo de sus vestiduras.",
        "Jesús hizo suyas las palabras iniciales del Salmo desde la cruz: *«Dios mío, Dios mío, ¿por qué me has desamparado?»* (Mateo 27:46), no en desesperación, sino proclamando que aquel salmo se estaba cumpliendo en su persona.",
        "El punto de inflexión del versículo 22 convierte el lamento en un himno de alabanza cósmica: *«Anunciaré tu nombre a mis hermanos; en medio de la congregación te alabaré»* (citado en Hebreos 2:12).",
        "El salmo culmina anunciando que todos los confines de la tierra se acordarán y se volverán al Señor, pues suyo es el reino sobre todas las naciones (Salmo 22:27-28).",
        "El sufrimiento vicario del Calvario fue el precio de la redención universal."
    ],
    "37": [
        "El Salmo 45:6-7 es citado explícitamente en Hebreos 1:8-9 como testimonio de la plena divinidad del Hijo: *«Pero del Hijo dice: Tu trono, oh Dios, por el siglo del siglo; cetro de equidad es el cetro de tu reino»*.",
        "En el contexto de las bodas reales de Israel, el salmista se dirige al Rey llamándolo *Elohim* («oh Dios»), celebrando su amor por la justicia y su odio por la iniquidad.",
        "Esta gloriosa paradoja une la humanidad del Ungido con su majestad divina eterna."
    ],
    "38": [
        "El Salmo 72 describe el reinado mesiánico de paz, rectitud y prosperidad universal, extendiéndose *«de mar a mar, y desde el río hasta los confines de la tierra»* (Salmo 72:8). Salomón oró por este reino, pero su cumplimiento pleno trasciende la monarquía terrenal y pertenece al Reino consumado de Cristo."
    ],
    "39": [
        "Jesús planteó este dilema teológico a los fariseos en Mateo 22:41-46 citando el Salmo 110:1: *«El Señor dijo a mi Señor: Siéntate a mi derecha... Si David lo llama Señor, ¿cómo es su hijo?»*. Los líderes no supieron responder, pues la única respuesta admisible es la doble naturaleza del Mesías: Hijo de David según la carne y Señor eterno según el Espíritu."
    ],
    "40": [
        "La Epístola a los Hebreos (capítulos 5 al 7) fundamenta la superioridad del sacerdocio de Cristo en el Salmo 110:4: *«Tú eres sacerdote para siempre, según el orden de Melquisedec»*.",
        "Melquisedec aparece en Génesis 14 sin genealogía registrada de principio ni fin, uniendo en su persona la dignidad de rey de justicia (Salén) y sacerdote del Dios Altísimo.",
        "Cristo no pertenece a la tribu sacerdotal de Leví, sino a la de Judá; su sacerdocio no descansa en mandatos humanos temporales, sino en el poder de una vida indestructible, ministrando para siempre a favor de su pueblo."
    ],
    "41": [
        "El rey Acaz, asediado por Siria e Israel, rechazó pedir una señal del cielo bajo pretexto de falsa piedad. Dios entonces dio por medio de Isaías una señal cósmica a la casa de David: *«La virgen concebirá y dará a luz un hijo, y lo llamará Emanuel»* (Isaías 7:14).",
        "El término hebreo *‘almāh* designa a una doncella en edad casadera no desposada, y la versión griega de los Setenta (LXX, siglo III a.C.) lo tradujo con precisión por *parthénos* (virgen estricta).",
        "Mateo 1:22-23 consagra esta profecía como cumplida en la concepción virginal de Jesús por obra del Espíritu Santo.",
        "El nombre *Emanuel* resume el misterio de la Encarnación: el Dios infinito desciende a habitar en carne humana en medio de su creación."
    ],
    "42": [
        "Isaías 9:6-7 corona el anuncio del nacimiento real desplegando los títulos gloriosos del Mesías: *«Consejero admirable, Dios fuerte, Padre eterno, Príncipe de paz»*. Estos nombres no son simples metáforas poéticas: revelan la soberanía divina del Hijo que se sentará sobre el trono de David por toda la eternidad."
    ],
    "43": [
        "Sobre Isaías 53:10-11 se observa que la promesa de *«ver descendencia»* y *«prolongar sus días»* tras haber entregado su vida en expiación por el pecado presupone necesariamente la resurrección de entre los muertos.",
        "El Siervo Justo no solo muere como víctima vicaria por las rebeliones del pueblo, sino que vive para justificar a muchos llevando sobre sí sus iniquidades.",
        "Este es el núcleo indiscutible del Evangelio apostólico: Cristo murió por nuestros pecados según las Escrituras, fue sepultado y resucitó al tercer día (1 Corintios 15:3-4)."
    ],
    "44": [
        "Daniel en Babilonia recibió dos revelaciones mesiánicas capitales:",
        "En Daniel 7:13-14, contempla a *«uno como un hijo de hombre»* viniendo en las nubes del cielo hasta el Anciano de Días, recibiendo dominio eterno y adoración de todos los pueblos.",
        "En Daniel 9:24-26, el ángel Gabriel le revela la profecía de las Setenta Semanas: el tiempo señalado para expiar la iniquidad, traer la justicia eterna y ungir el Lugar Santísimo, anunciando que tras sesenta y dos semanas *«se le quitará la vida al Ungido»*.",
        "Daniel armoniza así la doble dimensión mesiánica: el Salvador sufriente que entrega su vida en sacrificio y el Soberano glorioso que reina sobre todo el universo."
    ],
    "45": [
        "Jesús mismo certificó el carácter profético de la experiencia de Jonás en Mateo 12:39-40: *«Porque como estuvo Jonás en el vientre del gran pez tres días y tres noches, así estará el Hijo del Hombre en el corazón de la tierra tres días y tres noches»*.",
        "La liberación de Jonás de las entrañas del abismo y su posterior predicación a los gentiles en Nínive prefiguraron la resurrección de Cristo al tercer día y la consiguiente apertura del Evangelio a todas las naciones del mundo."
    ],
    "46": [
        "Miqueas 5:2 señala a Belén Efrata —la pequeña aldea natal de David— como el lugar señalado para el nacimiento del Soberano de Israel.",
        "Al mismo tiempo, el profeta afirma que sus orígenes son *«desde el principio, desde los días de la eternidad»* (*mîmê 'ôlām*), revelando la preexistencia eterna del Mesías antes de su encarnación terrenal.",
        "Esta profecía guio con exactitud a los sacerdotes y escribas de Jerusalén para indicar a los reyes magos dónde nacería el Cristo (Mateo 2:4-6)."
    ],
    "47": [
        "Hageo 2:6-9 profetiza que la gloria del Segundo Templo superaría con creces la del suntuoso santuario de Salomón.",
        "Aquel nuevo templo carecía del oro original y de la nube visible de la *Shejiná*; sin embargo, su gloria fue infinitamente superior porque el *«Deseado de todas las naciones»* —Jesucristo en persona— entró en sus recintos y enseñó la salvación en sus atrios.",
        "Hebreos 12:26-28 retoma este oráculo para proclamar que Dios sacudirá lo perecedero para establecer un Reino inconmovible."
    ],
    "48": [
        "Mateo 27:3-10 registra el cumplimiento literal de las treinta piezas de plata como el precio infame de la traición de Judas Iscariote y la adquisición del «campo del alfarero», conectando directamente con la profecía de Zacarías 11:12-13."
    ],
    "49": [
        "Zacarías 12:10 encierra un misterio cristológico sublime: es Yahweh mismo quien afirma: *«Y mirarán a mí, a quien traspasaron»*.",
        "El cumplimiento histórico supremo tuvo lugar en el Calvario cuando los soldados traspasaron el costado de Jesús con la lanza (Juan 19:37).",
        "De aquella herida divina brotó sangre y agua, inaugurando la *«fuente abierta para la casa de David... para lavar el pecado y la impureza»* (Zacarías 13:1).",
        "Esta profecía aguarda su culminación escatológica cuando el pueblo reconozca con lágrimas de arrepentimiento al Salvador traspasado (Apocalipsis 1:7)."
    ],
    "50": [
        "Malaquías 3:1 y 4:5-6 clausura el Antiguo Testamento señalando al precursor profético (*«mi mensajero»* / *«el profeta Elías»*) y al advenimiento repentino del Señor a su Templo (*«el mensajero del pacto»*).",
        "Jesús confirmó explícitamente en Mateo 11:10-14 y Marcos 1:2 que Juan el Bautista fue el Elías prometido que preparó su camino en el desierto.",
        "Así, el canon del Antiguo Testamento concluye mirando hacia el horizonte del nuevo pacto, donde la gracia de Dios se manifiesta en el Cordero de Dios."
    ]
}

ENDNOTES_36_50_EN = {
    "36": [
        "Psalm 22 is not merely an expression of David's personal anguish; it is the inspired prophetic map tracing the road from Golgotha to the universal reign of the Messiah.",
        "David depicts physical sufferings he never endured in his own life: pierced hands and feet, disjointed bones, burning thirst, and onlookers dividing his garments by casting lots.",
        "Jesus took upon his lips the opening words of the Psalm upon the cross: *\"My God, my God, why have you forsaken me?\"* (Matthew 27:46), not in despair, but identifying his passion as the fulfillment of this sacred prophecy.",
        "The turning point in verse 22 transforms grief into a cosmic chorus of praise: *\"I will declare your name to my people; in the assembly I will praise you\"* (quoted in Hebrews 2:12).",
        "The psalm culminates in the declaration that all the ends of the earth will remember and turn to the Lord, for dominion belongs to him over all nations (Psalm 22:27–28).",
        "The vicarious agony of Calvary was the necessary price for universal redemption."
    ],
    "37": [
        "Psalm 45:6–7 is cited in Hebrews 1:8–9 as conclusive biblical proof of the deity of the Son: *\"About the Son he says, 'Your throne, O God, will last for ever and ever; a scepter of justice will be the scepter of your kingdom'\"*.",
        "Within the setting of royal covenant nuptials, the psalmist addresses the King as *Elohim* (\"O God\"), exalting his love of righteousness and hatred of wickedness.",
        "This sublime passage unites the true humanity of the Anointed with his eternal, uncreated divine majesty."
    ],
    "38": [
        "Psalm 72 portrays the messianic kingdom of universal justice, peace, and abundance, extending *\"from sea to sea and from the River to the ends of the earth\"* (Psalm 72:8). Solomon prayed for such a realm, yet its reality transcends mortal dynasties and belongs to the consummated Kingdom of Christ."
    ],
    "39": [
        "Jesus posed this theological riddle to the Pharisees in Matthew 22:41–46, citing Psalm 110:1: *\"The LORD says to my lord: 'Sit at my right hand'... If then David calls him 'Lord,' how can he be his son?\"*. The scribes fell silent, for the only solution is the twofold nature of the Messiah: David's Son according to human descent, and David's Lord according to eternal deity."
    ],
    "40": [
        "The Epistle to the Hebrews (chapters 5 through 7) anchors the finality of Christ's high priesthood in Psalm 110:4: *\"The LORD has sworn and will not change his mind: 'You are a priest forever, in the order of Melchizedek'\"*.",
        "Melchizedek appears in Genesis 14 without recorded genealogy or end of days, uniting in his person the royal dignity of Salem (King of Righteousness and Peace) with the priesthood of the Most High God.",
        "Christ descended not from Levi, but from Judah; his priesthood is grounded not in temporary human ancestry, but upon the power of an indestructible life, ever living to intercede for his people."
    ],
    "41": [
        "King Ahaz, besieged by Syria and Israel, refused to ask for a sign under the guise of false piety. God thereupon gave a cosmic sign to the house of David: *\"The virgin will conceive and give birth to a son, and will call him Immanuel\"* (Isaiah 7:14).",
        "The Hebrew term *'almah* denotes an unmarried young maiden, and the Greek Septuagint (LXX, 3rd century B.C.) translated it with rigorous precision as *parthenos* (a virgin).",
        "Matthew 1:22–23 identifies this prophecy as fulfilled in the virginal conception of Jesus through the Holy Spirit.",
        "The name *Immanuel* summarizes the mystery of the Incarnation: the infinite God condescending to dwell with his creation in human flesh."
    ],
    "42": [
        "Isaiah 9:6–7 crowns the prophecy of the royal birth by unveiling the divine names of the Messiah: *\"Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace\"*. These are not mere poetic exaggerations; they declare the divine majesty of the Son who sits upon David's throne forever."
    ],
    "43": [
        "In Isaiah 53:10–11, the promise that the Servant will *\"see his offspring\"* and *\"prolong his days\"* after rendering his life an offering for sin demands nothing less than bodily resurrection from the dead.",
        "The Righteous Servant not only dies as a substitutionary sacrifice for the transgressions of his people, but lives to justify the many by bearing their iniquities.",
        "This is the core of apostolic preaching: that Christ died for our sins according to the Scriptures, was buried, and rose on the third day (1 Corinthians 15:3–4)."
    ],
    "44": [
        "Daniel in Babylon received two monumental messianic revelations:",
        "In Daniel 7:13–14, he sees *\"one like a son of man, coming with the clouds of heaven\"* to the Ancient of Days, receiving everlasting dominion and the worship of every nation.",
        "In Daniel 9:24–26, the angel Gabriel reveals the Seventy Weeks: the decreed period to finish transgression, atone for wickedness, and bring in everlasting righteousness, foretelling that after sixty-two weeks *\"the Anointed One will be put to death\"*.",
        "Daniel thus harmonizes both aspects of messianic redemption: the suffering Servant who is cut off in sacrifice, and the glorious Sovereign who reigns over all creation."
    ],
    "45": [
        "Jesus confirmed the typological character of Jonah in Matthew 12:39–40: *\"For as Jonah was three days and three nights in the belly of a huge fish, so the Son of Man will be three days and three nights in the heart of the earth\"*.",
        "Jonah's deliverance from the depths and his subsequent preaching to the Gentiles of Nineveh prefigured Christ's resurrection on the third day and the widespread proclamation of the Gospel to all nations."
    ],
    "46": [
        "Micah 5:2 designates Bethlehem Ephrathah—David's humble birthplace—as the appointed town from which the Ruler of Israel would emerge.",
        "Yet the prophet adds that his origins are *\"from of old, from ancient times\"* (*mîmê 'ôlām*), testifying to the Messiah's eternal pre-existence before his birth in time.",
        "This prophecy guided the chief priests in directing the Magi to Bethlehem (Matthew 2:4–6)."
    ],
    "47": [
        "Haggai 2:6–9 foretells that the glory of the Second Temple would far exceed the former splendor of Solomon's house.",
        "Though lacking Solomon's gold and the visible cloud of the *Shekinah*, the Second Temple possessed a far greater glory: the *\"Desire of all nations\"*—Jesus Christ himself—walked its courts and taught the words of eternal life.",
        "Hebrews 12:26–28 applies this prophecy to the unshakable Kingdom of Christ."
    ],
    "48": [
        "Matthew 27:3–10 records the literal fulfillment of the thirty pieces of silver as the price of Judas Iscariot's betrayal and the purchase of the potter's field, directly connecting with Zechariah 11:12–13."
    ],
    "49": [
        "Zechariah 12:10 contains a sublime christological revelation where Yahweh himself declares: *\"They will look on me, the one they have pierced\"*.",
        "The historical fulfillment took place upon Calvary when the Roman soldier pierced Jesus' side with a spear (John 19:37).",
        "From that wound flowed blood and water, opening the *\"fountain... to cleanse them from sin and impurity\"* (Zechariah 13:1).",
        "This prophecy looks forward to the final day when all shall behold the pierced Redeemer in glory (Revelation 1:7)."
    ],
    "50": [
        "Malachi 3:1 and 4:5–6 concludes the Old Testament canon by pointing to the prophetic forerunner (*\"my messenger\"* / *\"Elijah the prophet\"*) and the sudden coming of the Lord to his Temple (*\"the messenger of the covenant\"*).",
        "Jesus expressly confirmed in Matthew 11:10–14 and Mark 1:2 that John the Baptist was the promised Elijah who prepared the way in the wilderness.",
        "Thus the Old Testament closes looking expectant toward the dawn of the new covenant in Jesus Christ, the Lamb of God."
    ]
}

with open('translations/emmaus_sermon/endnotes_batch_3_es.json', 'w', encoding='utf-8') as f:
    json.dump(ENDNOTES_36_50_ES, f, ensure_ascii=False, indent=2)
with open('translations/emmaus_sermon/endnotes_batch_3_en.json', 'w', encoding='utf-8') as f:
    json.dump(ENDNOTES_36_50_EN, f, ensure_ascii=False, indent=2)

print("Endnotes Batch 3 (Notes 36-50) successfully generated for ES and EN.")
