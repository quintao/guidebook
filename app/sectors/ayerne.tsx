export default {
    overview: {
        name: { fr: "Pic d'Ayerne", en: "Ayerne Peak" },
        short_description: { fr: "Petit secteur de escalade sportive en dessus de Champéry avec 14 voies.",
            en: "Small sport climbing sector above Champéry with 14 routes." },
        main_activities: {
            fr: "Escalade Sportive",
            en: "Sport climbing"
        },
        rock: {
            fr: "Calcaire",
            en: "Limestone"
        },
        orientation: "SE",
        altitude: "1420m",
        grades: "5a-7c",
        latitude: 46.170945,
        longitude: 6.854820,
    },
    detailed_info: {
        parking: {
            android: "https://maps.app.goo.gl/587kgdY9vnGCSK4N9",
            ios: "https://maps.apple.com/?address=1874%20Champ%C3%A9ry,%20Switzerland&auid=5694405625275478406&ll=46.174556,6.853629&lsp=7618&q=Dropped%20Pin&_ext=EiYpJICbxYsQR0AxU3U0szspG0A5k+ANaVQYR0BBD5JP2fqjG0BQDA%3D%3D"
        },
        access: {
            fr: "Depuis Champéry, prendre la direction de la Cantine de Sur Cou. De la cantine, suivre une route carrossable sur 1,2 km et parquer à son terminus (pylône du téléphérique). Puis suivre le sentier d'abord à plat sur 200 mètres puis descendre dans la forêt. Après 5 minutes de descente, suivre les cairns. La falaise se trouve à gauche du chemin pédestre, après une petite remontée (50 mètres). 15 minutes depuis le parking.",
            en: "From Champéry, take the direction towards the Cantine de Sur Cou. From the cantine, follow a drivable road for 1.2 km and park at its terminus (cable car pylon). Then follow the trail, first flat for 200 meters, then descend into the forest. After 5 minutes of descent, follow the cairns. The cliff is located to the left of the pedestrian path, after a small ascent (50 meters). 15 minutes from the parking lot."
        },
        restaurants: {
            fr: "La cantine de Sur Cou toute proche est une très bonne adresse pour déguster les plats typiques de la région.",
            en: "The Cantine de Sur Cou nearby is an excellent place to enjoy typical regional dishes."
        },
        long_description: {
            fr: "Le Pic d'Ayerne séduira les grimpeurs amateurs de solitude et de calme. Son pied se perd dans a forêt, mais après quelques mètres d'escalade l'horizon se dégage sur les Dent-du-Midi en arrière-plan.\n\nAu sommet de 'Classico', vous vous tiendrez sur un véritable pic avec une vue magnifique ! Falaise discrète, elle mérite un détour, et même plus d'un si vous vous tentez 'Wild One' 7c qui ne se laissera pas facilement dompter !\n\n**Equipement**: Bernard Liegme, Frank Berrut",
            en: "Ayerne Peak will appeal to climbers who enjoy solitude and tranquility. Its base is lost in the forest, but after a few meters of climbing, the horizon opens up to the Dent-du-Midi in the background.\n\nAt the summit of 'Classico', you'll stand on a true peak with a magnificent view! A discreet cliff, it deserves a detour, and even more than one if you try 'Wild One' 7c, which won't be easily tamed!\n\n**Equipment**: Bernard Liegme, Frank Berrut"
        },
    },
    sector_pictures: [
        {
            path: require("@/assets/images/ayerne/topo.jpg"),
            description: { fr: "Apercu general", en: "General overview" }
        },
    ],
    routes: [
        {
            id: "ayerne_1",
            name: "Pif Paf",
            grade: "6c",
            stars: 1,
            tips: {
               fr: "Pas de bloc au depart",
               en: "Boulder move at the start"
            },
            requiped: "",
        },
        {
            id: "ayerne_2",
            name: "Tik Tok",
            grade: "6a+",
            stars: 1,
            tips: {},
            requiped: "",
        },
        {
            id: "ayerne_3",
            name: "J'ai la dalle",
            grade: "5b+",
            stars: 2,
        },
        {
            id: "ayerne_4",
            name: "Le téléphérique",
            grade: "5c",
            stars: 2,
        },
        {
            id: "ayerne_5",
            name: "Agate",
            grade: "6a",
            stars: 1,
        },
        {
            id: "ayerne_6",
            name: "Haribo",
            grade: "6c+",
            stars: 2,
            tips: {
                fr: "Magnifique dülfer",
                en: "Layback climbing"
            },
        },
        {
            id: "ayerne_7",
            name: "Classico",
            grade: "6a",
            stars: 3,
            pictures: [
                {
                    path: require("@/assets/images/ayerne/fissure.jpg"),
                    description: {
                        fr: "Camille dans le crux",
                        en: "Camille in the crux"
                    }
                }
            ]            
        },
        {
            id: "ayerne_8",
            name: "Le mur des lamentations",
            grade: "6b+",
            stars: 2,
            tips: {
                fr: "Rejoint Haribo après le 4ème spit",
                en: "Links with Haribo at the 4th clip"
            }
        },
        {
            id: "ayerne_9",
            name: "Le mur des lamentations direct",
            grade: "7a",
            stars: 3,
        },
        {
            id: "ayerne_10",
            name: "Bon voyage",
            grade: "6a+",
            stars: 2,
        },
        {
            id: "ayerne_11",
            name: "Pestouille",
            grade: "5c",
            stars: 1,
        },
        {
            id: "ayerne_12",
            name: "Stringer",
            grade: "5a",
            stars: 1,
        },
        {
            id: "ayerne_13",
            name: "Farouche",
            grade: "7c",
            stars: 2,
            tips: {
                fr: "Doigts d'acier",
                en: "Steel fingers required"
            }
        },
        {
            id: "ayerne_14",
            name: "Quntus",
            grade: "7b",
            stars: 2,
        },
        {
            id: "ayerne_15",
            name: "Le philosophe",
            grade: "5c",
            stars: 1,
        },
    ]
};
