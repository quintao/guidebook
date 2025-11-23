export default {
    overview: {
        name: "Portes du Soleil",
        short_description: "Secteur de escalade sportive au col des Portes du Soleil",
        parking: "",
        main_activities: "Escalade Sportive",
        rock: "Calcaire",
        grades: "4b-8a+",
        orientation: "S",
        altitude: "1950mm",
        latitude: 46.194290,
        longitude: 6.831176,
    },
    detailed_info: {
        parking: {
            android: "https://maps.app.goo.gl/uo5UpXVhVA2oajmu6",
            ios: "-"
        },
        access: "Monthey - Val-d'Illiez - Les Crosets - Vaillime - col des Portes du Soleil. Parking au col (route carrossable).\n\nLa falaise se trouve à 2 minutes de la voiture à pied.",
        restaurants: "Plusieurs options de restauration aux Crosets et Champoussin, et aussi a l'alpage de Touvassiere, direction Morgins.",
        long_description: "**Qui ne connaît pas les Portes du Soleil** ?\n\nSi nombreux sont ceux qui y tracent de grandes courbes à ski l'hiver, rares sont ceux qui savent qu’un col porte ce nom et soupçonnent l’existence d’une falaise perchée à 1950 m. d’altitude au-dessus des Crosets. Orientée plein sud, elle propose une escalade ensoleillée et variée, en condition de mai à octobre, voire toute l’année (avec une approche à ski), et un point de vue superbe sur les Dents du Midi et le massif des Ruans.\n\nParcourue dès les années 70 par Gilbert Perrin, elle est désormais équipée selon les standards actuels (2003-2006). De nouvelles voies, d’une hauteur de 20 à 35 mètres, ont ainsi vu le jour, avec de petits dévers sympas, parfaits pour celles et ceux qui débutent dans ce type de profil. Même si le rocher est globalement très bon, le port du casque est conseillé. Les “Portes du Soleil” plairont à ceux qui concilient escalade plaisir et pique-nique ainsi qu’aux grimpeurs amateurs de grands espaces.\n\n**Equipement**: Gilbert Perrin et Frank Berrut",
    },
    sector_pictures: [
        {
            path: require("@/assets/images/portesdusoleil/topo.png"),
            description: "Secteur gauche"
        },
                {
            path: require("@/assets/images/portesdusoleil/topo2.png"),
            description: "Secteur droite"
        },
        {
            path: require("@/assets/images/portesdusoleil/vue.jpg"),
            description: "Vue des Dents du Midi"
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
        tips: "Trop beau, trop court !",
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
        tips: "Crux juste après le relais intermédiaire",
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
        tips: "Un long voyage justement",
    },
    {
        id: "pds_11",
        name: "La voie des dames",
        grade: "5a, 5b",
        stars: 2,
        tips: "La plus ancienne",
    },
    {
        id: "pds_12",
        name: "Douce violence",
        grade: "6a+",
        stars: 2,
        tips: "Un pas un peu dur après 7-8 mètres",
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
        tips: "Joli mur soutenu",
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
        tips: "Court mais gros dévers",
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
        tips: "La plus sympa dans les petits dévers",
        pictures: [
            {
                path: require("@/assets/images/portesdusoleil/popeye.jpg"),
                description: "Fred dans le crux",
            }
        ]
    },
    {
        id: "pds_19",
        name: "Les marmottes sifflent",
        grade: "6c+",
        stars: 3,
        tips: "Bien physique !",
        pictures: [
            {
                path: require("@/assets/images/portesdusoleil/marmottes.jpg"),
                description: "Fred dans le depart",
            }
        ]
    },
    {
        id: "pds_20",
        name: "Regarde le ciel",
        grade: "6c",
        stars: 2,
        tips: "Un peu de fissure",
    },
    {
        id: "pds_21",
        name: "Lifting",
        grade: "6c",
        stars: 1,
        tips: "La toute dernière !",
    },
  ]
};