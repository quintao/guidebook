export default {
    overview: {
        name: "Galeries Defago",
        short_description: "Les Galeries Defago !",
        main_activities: "Escalade Sportive",
        rock: "Calcaire",
        grades: "6a-7b",
        orientation: "NW",
        altitude: "1000mm",
        latitude: 46.170625,
        longitude: 6.876629,
    },
    detailed_info: {
        parking: {
            android: "https://maps.app.goo.gl/99fgdzvkXDCSWatKA",
            ios: "-"
        },
        access: "**Accès par le bas**:\n route Monthey - Val-d'Illiez. 300 m. après l'église de Val-d'Illiez, prendre à gauche vers Play et suivre les indications Via Ferrata jusqu'au pont Sous Sex (913 m.). Parking Via Ferrata (rive gauche de la Vièze). Le traverser et suivre rive droite de la Vièze une route carrossable, dépasser le Chalet Rosalie et 300 m. plus loin, prendre une sente démantelant entre 2 blocs et s'élevant dans la forêt jusqu'au pied de la falaise (cairns). 15-20 minutes de marche.\n\n**Accès par le haut**:\n du parking de la cantine des Rives (Champéry-Grand Paradis-les Rives), suivre le sentier descendant des Galeries Défago. Après 6-7 min. repérer un banc et quelques mètres plus loin le départ des 2 grands rappels. (à choix : 30 m. + 55 m ou 37 m. + 50 m.) menant au pied de la paroi. Le premier rappel est celui de « Sous les feux de la rampe ».\n\n**Retour:** à pied ou en 2 rappels.",
        restaurants: "Buvette Rosalie et Cantine des Rives.",
        long_description: "Falaise imposante, elle est avant tout un but de promenade pour tous ceux qui désirent avoir une vue imprenable sur Champéry puisqu'une galerie la parcourt sur toute sa longueur. L'ambiance et la fraîcheur y sont garanties. À faire lors des chaudes journées d'été et lors d'une météo incertaine. Durant les années 2006, 2008, les voies ont été rééquipées et/ou ouvertes à l'aide du spot Fixe de 10 mm. Un énorme travail de nettoyage a été nécessaire. Ne postez donc pas trop s'il reste de la poussière! Ayez conscience que le terrain ne sera jamais complètement aseptisé et que les 2 longues voies, en particulier, demandent un peu d'expérience et ne doivent pas être prises à la légère.\n\n**Important:** toutes les voies sont praticables par temps de pluie. Quelques plats mouillent s'il pleut fort et que le vent s'en mêle... Après de gros orages, des résurgences apparaissent et peinent à sécher.  \n\n**Équipement:** Berrut Frank / Perrin Gilbert / Daetwyler Thomas.",
    },    
    sector_pictures: [
        {
            path: require("@/assets/images/defago/topo.png"),
            description: "Les voies du secteur"
        },
        {
            path: require("@/assets/images/defago/rappel.jpg"),
            description: "Localisation du rappel dans la galerie"
        },
        {
            path: require("@/assets/images/defago/rappel2.jpg"),
            description: "Depart du rappel"
        },        
    ],
    routes: [
    {
        id: "defago_1",
        name: "Sous les feux de la rampe",
        grade: "7a",
        stars: 3,
        tips: "**6b+ obligatoire.**\n\nSortie possible (conseillée !) après les 2 premières longueurs de « Plein gaz » grâce à un câble ou top-rope pour se finir ! Jolis mouvements dans un mur raide continu."
    },
    {
        id: "defago_2",
        name: "Plein gaz",
        grade: "7b",
        stars: 2,
        tips: "**6c obligatoire.**\n\nVoie d'artif complétée et rééquipée pour du libre, elle est nettement plus dure que « 35 ans plus tard ». Malgré un équipement moderne, elle reste plutôt engagée, en particulier la dernière longueur. À partir de L2, il est possible de rejoindre à l'aide d'un câble la longueur en 7a de « Sous les feux de la rampe ». La voie en devient plus homogène et plus intéressante. À déguster ! Fatigue ! \n\n**L1:** trois parties distinctes. Crux dans la deuxième. 30 m. 6b \n\n**L2:** traversée à gauche, délitée mais facile, puis mur compact. Rétablissement puis mur sous le relais. 25 m. 6c.\n\n**L3:** départ facile (2ème spit caché), puis grosse continuité dans un dévers qui s'accentue. Sortie très athlétique. 30 m. 7b (à confirmer).\n\n**L4:** de la galerie, fissure facile puis physique. Pas nettement plus durs sous le relais. 25 m. 7a"
    },
    {
        id: "defago_3",
        name: "Dernière minute",
        grade: "6b",
        stars: 2,
        tips: "Voie de 20m avec le meme depart que « Plein gaz »; 2 derniers spits à gauche de « On ne bouge pas ! »."
    },
    {
        id: "defago_4",
        name: "On ne bouge pas",
        grade: "6a",
        stars: 1,
        tips: "Voie de 20m avec le meme depart que « Plein gaz »."        
    },
    {
        id: "defago_5",
        name: "A l'abri !",
        grade: "6c/+",
        stars: 2,
        tips: "Voie de 25m"        
    },
    {
        id: "defago_6",
        name: "Champ de mine",
        grade: "6b",
        stars: 1,
        tips: "Voie de 25m"
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
        tips: "Voies 7. et 8. peuvent servir de variante de départ pour « 35 ans plus tard »."
    },   
    {
        id: "defago_9",
        name: "35 ans plus tard",
        grade: "6c+",
        stars: 3,
        tips: "**6a obligatoire.**\n\nOuverte en 1972 par Gilbert Perrin et Jean-Paul Es-Borrat à grands renforts de pitons et coins de bois, cette voie a été entièrement rééquipée et nettoyée afin d'être parcourue en libre. Bien que très bien équipée, elle reste assez engagée, avec des traversées, une retraite en rappel restant difficile. Voie variée, raide, en bon rocher, aux longueurs courtes respectant les relais d'origine. 12 dégaines. Casque.\n\n**L1:** après un petit pas déséquilibrant, petit dévers sur grosses prises. 20 m. 6a\n\n**L2:** crux (2 pas) au départ puis facile. Relais bien à droite. 20 m. 6b\n\n**L3:** oblique à droite puis mur raide soutenu (crux de la voie : pas de bloc). 20 m. 6c+\n\n**L4:** très courte longueur --f issure-dièdre sur quelques mètres, petit crochet à gauche, puis rampe à droite. 15 m. 6a+\n\n**L5:** belle fissure continue aux bords arrondis. 20 m. 6c\n\n**L6:** depuis la galerie. Départ souvent mouillé. 30 m. 6a+",
        pictures: [
            {
                path: require("@/assets/images/defago/35_ans_l2.jpg"),
                description: "Crux de L2",
            }
        ]        
    },       
  ]
};