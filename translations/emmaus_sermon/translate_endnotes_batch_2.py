# -*- coding: utf-8 -*-
import json
import os

ENDNOTES_16_35_ES = {
    "16": [
        "La Epístola a los Hebreos constituye la exégesis inspirada y definitiva del Tabernáculo y del Día de la Expiación (*Yom Kipur*). El Mesías es el antitipo glorioso de toda la liturgia levítica: Él es el Sumo Sacerdote según el orden de Melquisedec, el Tabernáculo no hecho de manos, el sacrificio perfecto y la sangre del nuevo pacto eterno que franqueó el velo (Hebreos 9:11-12)."
    ],
    "17": [
        "En la cumbre del monte Nebo, Moisés contempló la Tierra Prometida sabiendo que su ministerio tocaba a su fin. No obstante, su mayor legado profético residía en el anuncio de Aquel que completaría la salvación.",
        "Moisés declaró solemnemente: *«El Señor tu Dios levantará para ti, de en medio de tus hermanos, un profeta como yo. A él deberás escuchar»* (Deuteronomio 18:15). Van Groningen destaca que el término hebreo *nabí* implica a un mediador que recibe directamente las palabras de Yahweh y las proclama con autoridad soberana.",
        "Jesucristo es el Profeta definitivo: Moisés entregó la ley, pero la gracia y la verdad vinieron por medio de Jesucristo (Juan 1:17; Hechos 3:22-23)."
    ],
    "18": [
        "La serpiente de bronce (Números 21:8-9) es señalada por Jesús en Juan 3:14-15 como tipología directa de su crucifixión: *«Como levantó Moisés la serpiente en el desierto, así también tiene que ser levantado el Hijo del hombre»*.",
        "La mordedura mortal de las serpientes abrasadoras ilustra el veneno del pecado inoculado en el alma humana por la serpiente antigua.",
        "La solución divina no consistió en elaborar antídotos humanos, sino en mirar con fe al emblema levantado en lo alto del madero.",
        "El que miraba a la serpiente de bronce vivía. De igual manera, todo pecador herido que contempla con fe al Crucificado recibe vida eterna inmediata.",
        "Cristo no fue pecador, pero fue hecho pecado por nosotros (2 Corintios 5:21), llevando en su propio cuerpo la maldición para desarmar el poder de la muerte.",
        "La salvación no es por obras de justicia que hayamos hecho, sino por la sola mirada de fe a la cruz.",
        "La tipología enseña con nitidez que el juicio y la salvación se encontraron en el Calvario."
    ],
    "19": [
        "El oráculo profético de Balaam (Números 24:17) revela la soberanía absoluta de Dios sobre reyes y adivinos paganos.",
        "Balaam fue contratado por Balac para maldecir a Israel, pero el Espíritu de Dios tomó su boca y proclamó bendición sobre el pueblo de la promesa.",
        "Su visión escatológica divisó: *«Una estrella saldrá de Jacob; un cetro surgirá de Israel...»*. La estrella simboliza el resplandor celestial y el cetro la realeza imperecedera.",
        "Esta profecía inspiró a los sabios de Oriente siglos más tarde a seguir la estrella hasta Belén (Mateo 2:1-2).",
        "Cristo se proclama en el Apocalipsis como *«la raíz y la descendencia de David, la brillante estrella de la mañana»* (Apocalipsis 22:16)."
    ],
    "20": [
        "El nombre hebreo *Yehoshúa* (יְהוֹשֻׁעַ) —abreviado como *Yeshúa* (יֵשׁוּעַ) en el período posterior al exilio— significa literalmente *«Yahweh es salvación»* o *«El Señor salva»*.",
        "Es exactamente el mismo nombre que el ángel Gabriel ordenó a José y a María poner al Salvador: *«Y le pondrás por nombre Jesús, porque él salvará a su pueblo de sus pecados»* (Mateo 1:21).",
        "Así, el libertador que condujo a Israel a la Tierra Prometida portaba proféticamente el nombre de Aquel que introduciría a los redimidos en el reposo eterno de Dios (Hebreos 4:8-9)."
    ],
    "21": [
        "La aparición del *«Comandante del ejército del Señor»* a Josué cerca de Jericó (Josué 5:13-15) es una teofanía (o cristofanía) de singular trascendencia.",
        "El guerrero celestial no toma partido humano (*«¡De ninguna manera!»*), sino que asume el mando supremo de la batalla santa de Dios.",
        "La orden de quitarse las sandalias porque el suelo que pisa es sagrado vincula directamente esta revelación con la zarza ardiente de Moisés (Éxodo 3:5), manifestando la presencia del Dios vivo."
    ],
    "22": [
        "El período de los Jueces puso al descubierto la insuficiencia de liberadores meramente temporales y locales. Cada caudillo moría y el pueblo recaía en la anarquía espiritual, evidenciando la necesidad imperiosa de un Rey eterno y justo."
    ],
    "23": [
        "El libro de los Jueces subraya repetidamente: *«En aquella época no había rey en Israel; cada uno hacía lo que le parecía mejor»* (Jueces 17:6; 21:25). Esta carencia preparó el terreno teológico para la revelación del Rey prometido según el corazón de Dios."
    ],
    "24": [
        "El cántico de Ana (1 Samuel 2:1-10) es considerado por la erudición bíblica como una de las piezas proféticas más deslumbrantes del Antiguo Testamento.",
        "Van Groningen destaca que Ana contempla el triunfo del Reino de Dios y celebra la exaltación de los humildes y el juicio de los soberbios.",
        "Al culminar su himno proclamando que el Señor *«exaltará el poderío de su ungido»* (*Meshijó*), Ana se convierte en la primera voz bíblica en emplear el término «Mesías» en un sentido monárquico y redentor universal."
    ],
    "25": [
        "La designación *Meshijó* («su Ungido») en 1 Samuel 2:10 anticipa la unción de David y proyecta su cumplimiento escatológico sobre el Rey de reyes.",
        "Existe una correspondencia armónica entre el cántico de Ana y el *Magníficat* de María (Lucas 1:46-55): ambas celebran el poder de Dios que levanta al desvalido y cumple fielmente sus promesas de pacto.",
        "Ambos cánticos reflejan la teología de la gracia soberana que desafía las pretensiones de los poderosos de este mundo."
    ],
    "26": [
        "Samuel ocupa una posición irrepetible en la historia de Israel al reunir simultáneamente en su ministerio los tres oficios teocráticos ordenados por Dios: profeta, sacerdote y juez (1 Samuel 3; 7; 16).",
        "Como profeta, consolidó la palabra del Señor ante toda la nación (1 Samuel 3:20); como juez, administró justicia con integridad ejemplar (1 Samuel 7:15-17); y como sacerdote, intercedió y ofreció sacrificios ante el altar de Dios.",
        "En esta triple investidura, Samuel prefiguró a Cristo Jesús, en quien los oficios de Profeta supremo, Sumo Sacerdote eterno y Rey de justicia convergen en plenitud divina (Hebreos 1:1-3)."
    ],
    "27": [
        "La intachable integridad de Samuel como juez avergonzó la corrupción humana y dejó un modelo de liderazgo pastoral que sirvió de cimiento ético para la monarquía davídica.",
        "Su perseverancia en la intercesión fue tan célebre que las Escrituras lo sitúan junto a Moisés como intercesor supremo ante el trono divino (Jeremías 15:1; Salmo 99:6).",
        "Fue Samuel el instrumento escogido para ungir a David en Belén, dando paso a la dinastía que albergaría al Mesías prometido.",
        "Todo su ministerio apuntó hacia el advenimiento de Aquel que juzgará al mundo con rectitud y paz eterna."
    ],
    "28": [
        "Saúl fue el primer rey ungido (*Mashíaj*) de Israel, ungido por Samuel para liderar la heredad de Dios (1 Samuel 10:1).",
        "No obstante, su reinado evidenció de manera dolorosa que la investidura exterior y los dones naturales no pueden suplir la falta de un corazón obediente y rendido a Dios.",
        "Van Groningen analiza el fracaso de Saúl como un prototipo negativo: muestra todo lo que un líder mesiánico jamás debe ser (desobediente, impaciente y soberbio)."
    ],
    "29": [
        "La caída de Saúl se consumó en dos actos de rebelión: usurpar el oficio sacerdotal en Guilgal (1 Samuel 13) y desobedecer la orden divina respecto a Amalec bajo pretextos religiosos (1 Samuel 15).",
        "La solemne sentencia de Samuel resume un principio espiritual eterno: *«El obedecer vale más que el sacrificio»* (1 Samuel 15:22).",
        "El rechazo de Saúl no abortó el propósito divino; al contrario, preparó el camino para levantar a David, el pastor según el corazón de Dios.",
        "Este contraste subraya que el verdadero Salvador debía caracterizarse por una obediencia perfecta: *«He aquí que vengo, oh Dios, para hacer tu voluntad»* (Hebreos 10:7)."
    ],
    "30": [
        "La elección de David en Belén (1 Samuel 16) desafía los criterios humanos de grandeza.",
        "Mientras sus hermanos corpulentos desfilaban ante Samuel, Dios recordó: *«La gente se fija en las apariencias, pero el Señor se fija en el corazón»* (1 Samuel 16:7). El menor, el pastor que cuidaba las ovejas, era el elegido para pastorear a Israel.",
        "Van Groningen subraya que en la unción David es llamado *nagid* (príncipe o líder designado), preservando la primacía de que el verdadero Rey soberano de Israel es Yahweh."
    ],
    "31": [
        "El cántico final de David (2 Samuel 23:1-5) es un oráculo profético en el que se define como el ungido del Dios de Jacob y vislumbra al Soberano venidero cuya justicia será como la luz del amanecer y la lluvia que fecunda la tierra.",
        "David confiesa la validez inquebrantable del pacto eterno que Dios estableció con su dinastía.",
        "Aunque su propia casa terrenal conoció flaquezas, la fe de David descansaba en el Rey impecable que nacería de su simiente."
    ],
    "32": [
        "Las genealogías de los Evangelios confirman que Jesús es legalmente heredero del trono de David a través de José (Mateo 1) y biológicamente descendiente de David a través de María (Lucas 3), armonizando las exigencias legales y proféticas de la realeza mesiánica."
    ],
    "33": [
        "El Pacto Davídico (2 Samuel 7:12-16) constituye el epicentro de la revelación mesiánica en el Antiguo Testamento. Van Groningen afirma que este pacto es la pieza angular que articula todas las esperanzas de redención en la persona de un Rey imperecedero cuya casa, reino y trono permanecerán *«para siempre»*."
    ],
    "34": [
        "El pacto con David retoma y profundiza las promesas hechas a Abraham: la bendición a todas las naciones se canalizará a través del Reino eterno del Hijo de David.",
        "La promesa divina: *«Yo seré para él un padre, y él será para mí un hijo»* (2 Samuel 7:14) trasciende a Salomón y halla su cumplimiento pleno en la resurrección y entronización de Cristo (Hechos 13:32-33; Hebreos 1:5).",
        "Cuando David ora en 2 Samuel 7:18-19, se maravilla de que Dios haya hablado del futuro distante de su casa, reconociendo el alcance cósmico de la promesa.",
        "La destrucción de la monarquía terrenal en el exilio no anuló el pacto: guardó la promesa hasta la venida de Jesús.",
        "Cristo reina hoy sobre el trono eterno y su Reino no tendrá fin (Lucas 1:32-33)."
    ],
    "35": [
        "El Salmo 2:7 (*«Tú eres mi hijo; hoy mismo te he engendrado»*) es citado expresamente en Hechos 13:33 y Hebreos 1:5 como cumplido en la resurrección y exaltación de Cristo a la diestra del Padre."
    ]
}

ENDNOTES_16_35_EN = {
    "16": [
        "The Epistle to the Hebrews provides the definitive, inspired exegesis of the Tabernacle and the Day of Atonement (*Yom Kippur*). The Messiah is the glorious antitype of all Levitical worship: he is the High Priest in the order of Melchizedek, the true Tabernacle not made with human hands, the spotless sacrifice, and the blood of the eternal new covenant that tore the veil in two (Hebrews 9:11–12)."
    ],
    "17": [
        "Upon the heights of Mount Nebo, Moses looked out over the Promised Land, knowing his earthly ministry was at an end. Yet his greatest prophetic bequest was the announcement of the One who would bring salvation to its completion.",
        "Moses solemnly declared: *\"The LORD your God will raise up for you a prophet like me from among you, from your fellow Israelites. You must listen to him\"* (Deuteronomy 18:15). Van Groningen notes that the Hebrew term *nabi* designates an authoritative covenant mediator who receives the very words of Yahweh and proclaims them with sovereign majesty.",
        "Jesus Christ is that ultimate Prophet: the law was given through Moses, but grace and truth came through Jesus Christ (John 1:17; Acts 3:22–23)."
    ],
    "18": [
        "The bronze serpent (Numbers 21:8–9) is identified by Jesus in John 3:14–15 as a direct typological pattern of his crucifixion: *\"Just as Moses lifted up the snake in the wilderness, so the Son of Man must be lifted up\"*.",
        "The lethal venom of the desert serpents pictures the deadly toxin of sin infused into the human race by the ancient serpent.",
        "God's cure was not an earthly remedy, but a look of faith toward the emblem lifted high upon the pole.",
        "Whoever looked upon the bronze serpent lived. In the same way, every sinner who gazes in faith upon the crucified Savior receives immediate and eternal life.",
        "Christ knew no sin, yet became sin for us (2 Corinthians 5:21), bearing upon his body the curse of the tree to disarm death.",
        "Salvation is not achieved by works of human righteousness, but received by faith in the finished work of the cross.",
        "This sacred type proves that upon Calvary, divine justice and redeeming mercy met in perfection."
    ],
    "19": [
        "Balaam's oracle (Numbers 24:17) displays the sovereign power of God over earthly kings and heathen seers.",
        "Hired by Balak to curse Israel, the Spirit of God came upon Balaam, compelling him to pronounce boundless blessing over the covenant people.",
        "His prophetic gaze pierced the centuries: *\"A star will come out of Jacob; a scepter will rise out of Israel...\"*. The star symbolizes radiant heavenly majesty, and the scepter eternal royal dominion.",
        "This very prophecy led the Magi from the East to follow the star to Bethlehem centuries later (Matthew 2:1–2).",
        "Christ declares of himself in the Apocalypse: *\"I am the Root and the Offspring of David, and the bright Morning Star\"* (Revelation 22:16)."
    ],
    "20": [
        "The Hebrew name *Yehoshua* (יְהוֹשֻׁעַ)—contracted to *Yeshua* (יֵשׁוּעַ) in the post-exilic period—means literally *\"Yahweh is salvation\"* or *\"The LORD saves\"*.",
        "It is the exact name that the angel Gabriel commanded Joseph and Mary to give the holy child: *\"You are to give him the name Jesus, because he will save his people from their sins\"* (Matthew 1:21).",
        "Thus, the earthly conqueror who brought Israel into the Promised Land bore the name of Him who leads the redeemed into the everlasting Sabbath rest of God (Hebrews 4:8–9)."
    ],
    "21": [
        "The appearance of the *\"Commander of the army of the LORD\"* to Joshua near Jericho (Joshua 5:13–15) is a profound theophany (or Christophany).",
        "The celestial warrior takes no earthly side (*\"Neither!\"*), but assumes supreme command over the sacred warfare of God.",
        "The command to take off his sandals because the ground whereon he stands is holy directly echoes Moses at the burning bush (Exodus 3:5), proving the immediate presence of the living Lord."
    ],
    "22": [
        "The era of the Judges exposed the chronic inadequacy of temporary, localized deliverers. Each judge died, and the people plunged into spiritual apostasy, demonstrating the urgent necessity of an eternal, righteous King."
    ],
    "23": [
        "The book of Judges reiterates: *\"In those days Israel had no king; everyone did as they saw fit\"* (Judges 17:6; 21:25). This tragic vacuum prepared the theological framework for the revelation of the promised King after God's own heart."
    ],
    "24": [
        "Hannah's prayer of praise (1 Samuel 2:1–10) is celebrated by biblical scholars as one of the most sublime prophetic songs in the Old Testament.",
        "Van Groningen observes that Hannah beholds the triumph of Yahweh's reign, celebrating the exaltation of the humble and the judgment of the proud.",
        "In concluding with the declaration that the Lord will *\"exalt the horn of his anointed\"* (*Meshiho*), Hannah becomes the first biblical voice to employ the term \"Messiah\" in a royal, redemptive context."
    ],
    "25": [
        "The title *Meshiho* (\"his Anointed\") in 1 Samuel 2:10 anticipates David's royal anointing and reaches its eschatological fulfillment in the King of kings.",
        "There is a striking theological symmetry between Hannah's song and Mary's *Magnificat* (Luke 1:46–55): both rejoice in the sovereign God who lifts up the lowly and fulfills his covenant promises.",
        "Both hymns magnify the gospel of sovereign grace that confounds the pride of the worldly powerful."
    ],
    "26": [
        "Samuel occupies a unique position in redemptive history by uniting in his ministry all three divinely ordained theocratic offices: prophet, priest, and judge (1 Samuel 3; 7; 16).",
        "As prophet, he established the word of the Lord throughout the land (1 Samuel 3:20); as judge, he administered justice with spotless integrity (1 Samuel 7:15–17); and as priest, he interceded and offered acceptable sacrifices before God.",
        "In this threefold office, Samuel prefigured Christ Jesus, in whom the offices of supreme Prophet, eternal High Priest, and King of righteousness coalesce in divine perfection (Hebrews 1:1–3)."
    ],
    "27": [
        "Samuel's spotless integrity as a judge set an enduring pastoral standard that served as an ethical foundation for the Davidic monarchy.",
        "His power in intercession was so legendary that the Scriptures rank him alongside Moses as a supreme intercessor before the throne of God (Jeremiah 15:1; Psalm 99:6).",
        "It was Samuel whom God commissioned to anoint David in Bethlehem, inaugurating the lineage that would bear the promised Messiah.",
        "His entire ministry pointed toward the coming of Him who shall govern the world with equity and peace."
    ],
    "28": [
        "Saul was Israel's first anointed king (*Mashiach*), anointed by Samuel to shepherd the Lord's inheritance (1 Samuel 10:1).",
        "Yet his tragic reign proved that external gifting and physical stature cannot compensate for an unyielded, disobedient heart.",
        "Van Groningen analyzes Saul's failure as a negative prototype: demonstrating everything an anointed messianic leader must never be (rebellious, impatient, and self-serving)."
    ],
    "29": [
        "Saul's downfall was sealed by two acts of disobedience: presumptuously offering sacrifice at Gilgal (1 Samuel 13) and sparing Amalek under pious pretenses (1 Samuel 15).",
        "Samuel's rebuke articulates an eternal spiritual truth: *\"To obey is better than sacrifice\"* (1 Samuel 15:22).",
        "Saul's rejection did not derail God's purpose; rather, it cleared the way for David, a man after God's own heart.",
        "This contrast highlights that the true Savior would be marked by spotless obedience: *\"Here I am... I have come to do your will, my God\"* (Hebrews 10:7)."
    ],
    "30": [
        "The selection of David in Bethlehem (1 Samuel 16) shatters human standards of greatness.",
        "While his handsome brothers passed by, God reminded Samuel: *\"People look at the outward appearance, but the LORD looks at the heart\"* (1 Samuel 16:7). The youngest, keeping sheep in the field, was chosen to shepherd Israel.",
        "Van Groningen notes that at his anointing David is called *nagid* (prince or ruler designate), emphasizing that the ultimate Sovereign of Israel is Yahweh himself."
    ],
    "31": [
        "David's last words (2 Samuel 23:1–5) are a prophetic oracle wherein he identifies himself as the anointed of the God of Jacob, foreseeing the coming Ruler whose reign will be like the morning sun and life-giving rain upon the grass.",
        "David celebrates the everlasting covenant God established with his house.",
        "Though his earthly family faltered, David's faith rested in the sinless King who would proceed from his seed."
    ],
    "32": [
        "The New Testament genealogies confirm that Jesus is the legal heir to David's throne through Joseph (Matthew 1) and David's biological descendant through Mary (Luke 3), fulfilling every royal requirement of prophecy."
    ],
    "33": [
        "The Davidic Covenant (2 Samuel 7:12–16) is the centerpiece of Old Testament messianic revelation. Van Groningen affirms that this covenant forms the golden hinge of biblical hope, guaranteeing an eternal dynasty, kingdom, and throne established *\"forever\"*."
    ],
    "34": [
        "The covenant with David advances the promises made to Abraham: the universal blessing of all nations flows through the eternal reign of David's Son.",
        "The divine pledge: *\"I will be his father, and he will be my son\"* (2 Samuel 7:14) reaches beyond Solomon to its final fulfillment in the resurrection and exaltation of Jesus Christ (Acts 13:32–33; Hebrews 1:5).",
        "David's prayer of thanksgiving in 2 Samuel 7:18–19 expresses awe that God had spoken of the distant future of his house, discerning the cosmic scope of the decree.",
        "The collapse of the earthly monarchy in exile did not nullify the covenant; it guarded it until the advent of Christ.",
        "Jesus reigns today upon that eternal throne, and of his Kingdom there shall be no end (Luke 1:32–33)."
    ],
    "35": [
        "Psalm 2:7 (*\"You are my son; today I have become your father\"*) is quoted in Acts 13:33 and Hebrews 1:5 as fulfilled in the resurrection and session of Christ at the Father's right hand."
    ]
}

with open('translations/emmaus_sermon/endnotes_batch_2_es.json', 'w', encoding='utf-8') as f:
    json.dump(ENDNOTES_16_35_ES, f, ensure_ascii=False, indent=2)
with open('translations/emmaus_sermon/endnotes_batch_2_en.json', 'w', encoding='utf-8') as f:
    json.dump(ENDNOTES_16_35_EN, f, ensure_ascii=False, indent=2)

print("Endnotes Batch 2 (Notes 16-35) successfully generated for ES and EN.")
