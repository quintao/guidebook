export default {
    overview: {
        name: { fr: "Portes du Soleil", en: "Portes du Soleil" },
        short_description: {
            fr: "Secteur d'escalade sportive au col des Portes du Soleil",
            en: "Sport climbing sector at the Portes du Soleil pass"
        },
        parking: "",
        main_activities: {
            fr: "Escalade Sportive",
            en: "Sport climbing"
        },
        rock: {
            fr: "Calcaire",
            en: "Limestone"
        },
        grades: "4b-8a+",
        orientation: "S",
        altitude: "1950m", // Corrected typo from '1950mm'
        latitude: 46.194290,
        longitude: 6.831176,
    },
    detailed_info: {
        parking: {
            android: "https://maps.app.goo.gl/uo5UpXVhVA2oajmu6",
            ios: "-"
        },
        access: {
            fr: "Monthey - Val-d'Illiez - Les Crosets - Vaillime - col des Portes du Soleil. Parking au col (route carrossable).\n\nLa falaise se trouve à 2 minutes de la voiture à pied.",
            en: "Monthey - Val-d'Illiez - Les Crosets - Vaillime - Portes du Soleil pass. Parking at the pass (drivable dirt road).\n\nThe cliff is a 2-minute walk from the car."
        },
        restaurants: {
            fr: "Plusieurs options de restauration aux Crosets et Champoussin, et aussi à l'alpage de Tovassière, direction Morgins.",
            en: "Several dining options in Les Crosets and Champoussin, as well as at the Tovassière alpine pasture towards Morgins."
        },
        long_description: {
            fr: "**Qui ne connaît pas les Portes du Soleil ?**\n\nSi nombreux sont ceux qui y tracent de grandes courbes à ski l'hiver, rares sont ceux qui savent qu’un col porte ce nom et soupçonnent l’existence d’une falaise perchée à 1950 m. d’altitude au-dessus des Crosets. Orientée plein sud, elle propose une escalade ensoleillée et variée, en condition de mai à octobre, voire toute l’année (avec une approche à ski), et un point de vue superbe sur les Dents du Midi et le massif des Ruans.\n\nParcourue dès les années 70 par Gilbert Perrin, elle est désormais équipée selon les standards actuels (2003-2006). De nouvelles voies, d’une hauteur de 20 à 35 mètres, ont ainsi vu le jour, avec de petits dévers sympas, parfaits pour celles et ceux qui débutent dans ce type de profil. Même si le rocher est globalement très bon, le port du casque est conseillé. Les “Portes du Soleil” plairont à ceux qui concilient escalade plaisir et pique-nique ainsi qu’aux grimpeurs amateurs de grands espaces.\n\n**Équipement**: Gilbert Perrin et Frank Berrut",
            en: "**Who hasn't heard of the Portes du Soleil?**\n\nWhile many carve big turns on skis here in winter, few know that a mountain pass bears this name or suspect the existence of a cliff perched at 1,950m altitude above Les Crosets. Facing south, it offers sunny and varied climbing, in good condition from May to October—or even year-round with a ski approach—and a superb viewpoint over the Dents du Midi and the Ruans massif.\n\nFirst climbed in the 70s by Gilbert Perrin, it has now been bolted to modern standards (2003-2006). New routes ranging from 20 to 35 meters long have been opened, featuring nice small overhangs perfect for those starting out on this type of steep profile. Even though the rock is overall very good, wearing a helmet is recommended. 'Portes du Soleil' will appeal to those who enjoy combining fun climbing with a picnic, as well as climbers who love wide-open spaces.\n\n**Bolting**: Gilbert Perrin and Frank Berrut"
        },
    },
    sector_pictures: [
        {
            path: require("@/assets/images/portesdusoleil/topo.png"),
            description: {
                fr: "Secteur gauche",
                en: "Left sector"
            }
        },
        {
            path: require("@/assets/images/portesdusoleil/topo2.png"),
            description: {
                fr: "Secteur droite",
                en: "Right sector"
            }
        },
        {
            path: require("@/assets/images/portesdusoleil/vue.jpg"),
            description: {
                fr: "Vue des Dents du Midi",
                en: "View of Dents du Midi"
            }
        },        
    ],
    routes: [
    {
        id: "pds_1",
        name: "Le délire de Sophie",
        grade: "5c",
        stars: 2,
    },
    {
        id: "pds_2",
        name: "C'est pas sorcier",
        grade: "5b",
        stars: 2,
    },
    {
        id: "pds_3",
        name: "La dalle à Gilbert",
        grade: "6a+",
        stars: 3,
        tips: {
            fr: "Trop beau, trop court !",
            en: "Super nice, too short!"
        },
    },
    {
        id: "pds_4",
        name: "Joceline",
        grade: "5b",
        stars: 2,
    },
    {
        id: "pds_5",
        name: "L'écaille",
        grade: "6a+",
        stars: 1,
    },
    {
        id: "pds_6",
        name: "Bienvenue",
        grade: "4b",
        stars: 1,
    },
    {
        id: "pds_7",
        name: "Les pitons nostalgiques",
        grade: "5c, 6b",
        stars: 2,
        tips: {
            fr: "Crux juste après le relais intermédiaire",
            en: "Crux right after the mid-anchor"
        },
    },
    {
        id: "pds_8",
        name: "Les 3 surplombs",
        grade: "5c+, 5c+",
        stars: 2,
    },
    {
        id: "pds_9",
        name: "La voie des Belges",
        grade: "5a, 5c",
        stars: 2,
    },
    {
        id: "pds_10",
        name: "Voyage au bout de la nuit",
        grade: "6a",
        stars: 2,
        tips: {
            fr: "Un long voyage justement",
            en: "A long journey indeed"
        },
    },
    {
        id: "pds_11",
        name: "La voie des dames",
        grade: "5a, 5b",
        stars: 2,
        tips: {
            fr: "La plus ancienne",
            en: "The oldest one"
        },
    },
    {
        id: "pds_12",
        name: "Douce violence",
        grade: "6a+",
        stars: 2,
        tips: {
            fr: "Un pas un peu dur après 7-8 mètres",
            en: "A tricky move after 7-8 meters"
        },
    },
    {
        id: "pds_13",
        name: "Trait de lune",
        grade: "7a+",
        stars: 2,
    },
    {
        id: "pds_14",
        name: "Scex dru",
        grade: "7a",
        stars: 3,
        tips: {
            fr: "Joli mur soutenu",
            en: "Nice sustained wall"
        },
    },
    {
        id: "pds_15",
        name: "Génération nouvelle",
        grade: "7a+",
        stars: 2,
    },
    {
        id: "pds_16",
        name: "Le pied à l'étrier",
        grade: "8a+",
        stars: 2,
        tips: {
            fr: "Court mais gros dévers",
            en: "Short but heavy overhang"
        },
    },
    {
        id: "pds_17",
        name: "Lueur d'automne",
        grade: "6b+",
        stars: 2,
    },
    {
        id: "pds_18",
        name: "Popeye",
        grade: "6b+",
        stars: 3,
        tips: {
            fr: "La plus sympa dans les petits dévers",
            en: "The nicest one among the small overhangs"
        },
        pictures: [
            {
                path: require("@/assets/images/portesdusoleil/popeye.jpg"),
                description: {
                    fr: "Fred dans le crux",
                    en: "Fred in the crux"
                },
            }
        ]
    },
    {
        id: "pds_19",
        name: "Les marmottes sifflent",
        grade: "6c+",
        stars: 3,
        tips: {
            fr: "Bien physique !",
            en: "Very physical!"
        },
        pictures: [
            {
                path: require("@/assets/images/portesdusoleil/marmottes.jpg"),
                description: {
                    fr: "Fred dans le départ",
                    en: "Fred at the start"
                },
            }
        ]
    },
    {
        id: "pds_20",
        name: "Regarde le ciel",
        grade: "6c",
        stars: 2,
        tips: {
            fr: "Un peu de fissure",
            en: "Some crack climbing"
        },
    },
    {
        id: "pds_21",
        name: "Lifting",
        grade: "6c",
        stars: 1,
        tips: {
            fr: "La toute dernière !",
            en: "The very last one!"
        },
    },
  ]
};