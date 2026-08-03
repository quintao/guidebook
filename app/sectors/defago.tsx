export default {
    overview: {
        name: { fr: "Galeries Défago", en: "Galeries Défago" },
        short_description: {
            fr: "Les Galeries Défago !",
            en: "The Galeries Défago!"
        },
        main_activities: {
            fr: "Escalade Sportive",
            en: "Sport climbing"
        },
        rock: {
            fr: "Calcaire",
            en: "Limestone"
        },
        grades: "6a-7b",
        orientation: "NW",
        altitude: "1000m",
        latitude: 46.170625,
        longitude: 6.876629,
    },
    detailed_info: {
        parking: {
            android: "https://maps.app.goo.gl/99fgdzvkXDCSWatKA",
            ios: "-"
        },
        access: {
            fr: "**Accès par le bas**:\n route Monthey - Val-d'Illiez. 300 m. après l'église de Val-d'Illiez, prendre à gauche vers Play et suivre les indications Via Ferrata jusqu'au pont Sous Sex (913 m.). Parking Via Ferrata (rive gauche de la Vièze). Le traverser et suivre rive droite de la Vièze une route carrossable, dépasser le Chalet Rosalie et 300 m. plus loin, prendre une sente démantelant entre 2 blocs et s'élevant dans la forêt jusqu'au pied de la falaise (cairns). 15-20 minutes de marche.\n\n**Accès par le haut**:\n du parking de la cantine des Rives (Champéry-Grand Paradis-les Rives), suivre le sentier descendant des Galeries Défago. Après 6-7 min. repérer un banc et quelques mètres plus loin le départ des 2 grands rappels. (à choix : 30 m. + 55 m ou 37 m. + 50 m.) menant au pied de la paroi. Le premier rappel est celui de « Sous les feux de la rampe ».\n\n**Retour:** à pied ou en 2 rappels.",
            en: "**Access from the bottom**:\n Monthey - Val-d'Illiez road. 300 m after the Val-d'Illiez church, turn left towards Play and follow the Via Ferrata signs to the Sous Sex bridge (913 m). Via Ferrata parking (left bank of the Vièze). Cross it and follow an unpaved road along the right bank of the Vièze, pass Chalet Rosalie, and 300 m further, take a trail breaking off between 2 boulders and rising through the forest to the base of the cliff (cairns). 15-20 minutes walk.\n\n**Access from the top**:\n From the parking area of Cantine des Rives (Champéry-Grand Paradis-les Rives), follow the trail descending from Galeries Défago. After 6-7 min, spot a bench and a few meters further the start of the 2 long abseils (choice of: 30 m + 55 m or 37 m + 50 m) leading to the base of the wall. The first abseil is 'Sous les feux de la rampe'.\n\n**Return:** On foot or via 2 rappels."
        },
        restaurants: {
            fr: "Buvette Rosalie et Cantine des Rives.",
            en: "Buvette Rosalie and Cantine des Rives."
        },
        long_description: {
            fr: "Falaise imposante, elle est avant tout un but de promenade pour tous ceux qui désirent avoir une vue imprenable sur Champéry puisqu'une galerie la parcourt sur toute sa longueur. L'ambiance et la fraîcheur y sont garanties. À faire lors des chaudes journées d'été et lors d'une météo incertaine. Durant les années 2006, 2008, les voies ont été rééquipées et/ou ouvertes à l'aide du spot Fixe de 10 mm. Un énorme travail de nettoyage a été nécessaire. Ne postez donc pas trop s'il reste de la poussière! Ayez conscience que le terrain ne sera jamais complètement aseptisé et que les 2 longues voies, en particulier, demandent un peu d'expérience et ne doivent pas être prises à la légère.\n\n**Important:** toutes les voies sont praticables par temps de pluie. Quelques plats mouillent s'il pleut fort et que le vent s'en mêle... Après de gros orages, des résurgences apparaissent et peinent à sécher.  \n\n**Équipement:** Berrut Frank / Perrin Gilbert / Daetwyler Thomas.",
            en: "An imposing cliff, it is primarily a walking destination for anyone wishing to get an unobstructed view over Champéry, as a gallery runs along its entire length. Atmosphere and cool air are guaranteed. Best enjoyed on hot summer days or when the weather is uncertain. In 2006 and 2008, the routes were re-bolted and/or opened using 10mm Fixe expansion bolts. A massive cleaning effort was required. Don't complain too much if there's still a bit of dust! Keep in mind that the terrain will never be fully sanitized and that the 2 long multi-pitch routes in particular require some experience and shouldn't be taken lightly.\n\n**Important:** All routes can be climbed in rainy weather. A few slopers get wet if it rains heavily with wind... After severe storms, seepage appears and takes a long time to dry out.\n\n**Bolting:** Berrut Frank / Perrin Gilbert / Daetwyler Thomas."
        },
    },    
    sector_pictures: [
        {
            path: require("@/assets/images/defago/topo.png"),
            description: {
                fr: "Les voies du secteur",
                en: "Routes overview"
            }
        },
        {
            path: require("@/assets/images/defago/rappel.jpg"),
            description: {
                fr: "Localisation du rappel dans la galerie",
                en: "Location of the abseil in the gallery"
            }
        },
        {
            path: require("@/assets/images/defago/rappel2.jpg"),
            description: {
                fr: "Départ du rappel",
                en: "Start of the abseil"
            }
        },        
    ],
    routes: [
    {
        id: "defago_1",
        name: "Sous les feux de la rampe",
        grade: "7a",
        stars: 3,
        tips: {
            fr: "**6b+ obligatoire.**\n\nSortie possible (conseillée !) après les 2 premières longueurs de « Plein gaz » grâce à un câble ou top-rope pour se finir ! Jolis mouvements dans un mur raide continu.",
            en: "**Mandatory 6b+.**\n\nPossible (and recommended!) exit after the first 2 pitches of 'Plein gaz' thanks to a cable, or top-rope to finish yourself off! Nice moves on a continuous steep wall."
        }
    },
    {
        id: "defago_2",
        name: "Plein gaz",
        grade: "7b",
        stars: 2,
        tips: {
            fr: "**6c obligatoire.**\n\nVoie d'artif complétée et rééquipée pour du libre, elle est nettement plus dure que « 35 ans plus tard ». Malgré un équipement moderne, elle reste plutôt engagée, en particulier la dernière longueur. À partir de L2, il est possible de rejoindre à l'aide d'un câble la longueur en 7a de « Sous les feux de la rampe ». La voie en devient plus homogène et plus intéressante. À déguster ! Fatigue ! \n\n**L1:** trois parties distinctes. Crux dans la deuxième. 30 m. 6b \n\n**L2:** traversée à gauche, délitée mais facile, puis mur compact. Rétablissement puis mur sous le relais. 25 m. 6c.\n\n**L3:** départ facile (2ème spit caché), puis grosse continuité dans un dévers qui s'accentue. Sortie très athlétique. 30 m. 7b (à confirmer).\n\n**L4:** de la galerie, fissure facile puis physique. Pas nettement plus durs sous le relais. 25 m. 7a",
            en: "**Mandatory 6c.**\n\nFormer aid route completed and re-bolted for free climbing, it is significantly harder than '35 ans plus tard'. Despite modern bolts, it remains quite committed, especially the final pitch. From Pitch 2, a cable allows you to join the 7a pitch of 'Sous les feux de la rampe'. This makes the route more homogeneous and interesting. Enjoy! Exhausting!\n\n**P1:** Three distinct sections. Crux in the second. 30 m. 6b\n\n**P2:** Leftward traverse, loose rock but easy, then compact wall. Mantle then wall below the anchor. 25 m. 6c.\n\n**P3:** Easy start (hidden 2nd bolt), then major endurance on an increasing overhang. Very physical exit. 30 m. 7b (to be confirmed).\n\n**P4:** From the gallery, easy then physical crack. Crux moves significantly harder below the anchor. 25 m. 7a"
        }
    },
    {
        id: "defago_3",
        name: "Dernière minute",
        grade: "6b",
        stars: 2,
        tips: {
            fr: "Voie de 20m avec le même départ que « Plein gaz »; 2 derniers spits à gauche de « On ne bouge pas ! ».",
            en: "20m route sharing the same start as 'Plein gaz'; last 2 bolts to the left of 'On ne bouge pas!'."
        }
    },
    {
        id: "defago_4",
        name: "On ne bouge pas",
        grade: "6a",
        stars: 1,
        tips: {
            fr: "Voie de 20m avec le même départ que « Plein gaz ».",
            en: "20m route sharing the same start as 'Plein gaz'."
        }
    },
    {
        id: "defago_5",
        name: "A l'abri !",
        grade: "6c/+",
        stars: 2,
        tips: {
            fr: "Voie de 25m",
            en: "25m route"
        }
    },
    {
        id: "defago_6",
        name: "Champ de mine",
        grade: "6b",
        stars: 1,
        tips: {
            fr: "Voie de 25m",
            en: "25m route"
        }
    }, 
    {
        id: "defago_7",
        name: "Mine de rien",
        grade: "6b",
        stars: 2,
    },   
    {
        id: "defago_8",
        name: "Pied de biche",
        grade: "6b/c",
        stars: 1,
        tips: {
            fr: "Voies 7. et 8. peuvent servir de variante de départ pour « 35 ans plus tard ».",
            en: "Routes 7 and 8 can serve as start variations for '35 ans plus tard'."
        }
    },   
    {
        id: "defago_9",
        name: "35 ans plus tard",
        grade: "6c+",
        stars: 3,
        tips: {
            fr: "**6a obligatoire.**\n\nOuverte en 1972 par Gilbert Perrin et Jean-Paul Es-Borrat à grands renforts de pitons et coins de bois, cette voie a été entièrement rééquipée et nettoyée afin d'être parcourue en libre. Bien que très bien équipée, elle reste assez engagée, avec des traversées, une retraite en rappel restant difficile. Voie variée, raide, en bon rocher, aux longueurs courtes respectant les relais d'origine. 12 dégaines. Casque.\n\n**L1:** après un petit pas déséquilibrant, petit dévers sur grosses prises. 20 m. 6a\n\n**L2:** crux (2 pas) au départ puis facile. Relais bien à droite. 20 m. 6b\n\n**L3:** oblique à droite puis mur raide soutenu (crux de la voie : pas de bloc). 20 m. 6c+\n\n**L4:** très courte longueur -- fissure-dièdre sur quelques mètres, petit crochet à gauche, puis rampe à droite. 15 m. 6a+\n\n**L5:** belle fissure continue aux bords arrondis. 20 m. 6c\n\n**L6:** depuis la galerie. Départ souvent mouillé. 30 m. 6a+",
            en: "**Mandatory 6a.**\n\nFirst climbed in 1972 by Gilbert Perrin and Jean-Paul Es-Borrat using many pitons and wooden wedges, this route was entirely re-bolted and cleaned to be free climbed. Although very well protected, it remains quite committed due to traverses making retreat by abseil difficult. Varied, steep route on good rock with short pitches respecting the original belays. 12 quickdraws. Helmet required.\n\n**P1:** After a tricky balance move, small overhang on big holds. 20 m. 6a\n\n**P2:** Crux (2 moves) right at the start, then easy. Anchor well to the right. 20 m. 6b\n\n**P3:** Diagonals to the right, then sustained steep wall (route's crux: bouldery move). 20 m. 6c+\n\n**P4:** Very short pitch -- crack-corner for a few meters, small hook to the left, then ramp to the right. 15 m. 6a+\n\n**P5:** Beautiful continuous crack with rounded edges. 20 m. 6c\n\n**P6:** From the gallery. Start often wet. 30 m. 6a+"
        },
        pictures: [
            {
                path: require("@/assets/images/defago/35_ans_l2.jpg"),
                description: {
                    fr: "Crux de L2",
                    en: "Crux of Pitch 2"
                },
            }
        ]        
    },       
  ]
};