export default {
    overview: {
        name: "Pic d'Ayerne",
        short_description: "Petit secteur de escalade sportive au dessous de Champéry avec 14 voies.",
        main_activities: "Escalade Sportive",
        rock: "Calcaire",
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
        access: "Depuis Champéry, prendre la direction de la Cantine de Sur Cou. De la cantine, suivre une route carrossable sur 1,2 km et parquer à son terminus (pylône du téléphérique). Puis suivre le sentier d’abord à plat sur 200 mètres puis descendre dans la forêt. Après 5 minutes de descente, suivre les cairns. La falaise se trouve à gauche du chemin pédestre, après une petite remontée (50 mètres). 15 minutes depuis le parking.",
        restaurants: "La cantine de Sur Cou toute proche est une très bonne adresse pour déguster les plats typiques de la région.",
        long_description: "Le Pic d’Ayerne séduira les grimpeurs amateurs de solitude et de calme. Son pied se perd dans a forêt, mais après quelques mètres d’escalade l’horizon se dégage sur les Dent-du-Midi en arrière-plan.\n\nAu sommet de « Classico », vous vous tiendrez sur un véritable pic avec une vue magnifique ! Falaise discrète, elle mérite un détour, et même plus d’un si vous vous tentez « Farouche » 7c qui ne se laissera pas facilement dompter !",
    },
    sector_pictures: [
        {
            path: require("@/assets/images/ayerne/topo.jpg"),
            description: "Apercu general du secteur"
        },
    ],
    routes: [
        {
            name: "Pif Paf",
            grade: "6c",
            stars: 1,
            tips: "Pas de bloc au depart",
            setter: "Frank Berrut",
            requiped: "",
        },
        {
            name: "Tik Tok",
            grade: "6a+",
            stars: 1,
            tips: "",
            setter: "Frank Berrut",
            requiped: "",
        },
        {
            name: "J'ai la dalle",
            grade: "5b+",
            stars: 2,
        },
        {
            name: "Le téléphérique",
            grade: "5c",
            stars: 2,
        },
        {
            name: "Agate",
            grade: "6a",
            stars: 1,
        },
        {
            name: "Haribo",
            grade: "6c+",
            stars: 2,
            tips: "Magnifique dülfer",
        },
        {
            name: "Classico",
            grade: "6a",
            stars: 3,
            pictures: [
                {
                    path: require("@/assets/images/ayerne/fissure.jpg"),
                    description: "Camille dans le crux",
                }
            ]            
        },
        {
            name: "Le mur des lamentations",
            grade: "6b+",
            stars: 2,
            tips: "Rejoint Haribo après le 4ème spit",
        },
        {
            name: "Le mur des lamentations direct",
            grade: "7a",
            stars: 3,
        },
        {
            name: "Bon voyage",
            grade: "6a+",
            stars: 2,
        },
        {
            name: "Pestouille",
            grade: "5c",
            stars: 1,
        },
        {
            name: "Stringer",
            grade: "5a",
            stars: 1,
        },
        {
            name: "Farouche",
            grade: "7c",
            stars: 2,
            tips: "Doigts d'acier",
        },
        {
            name: "Quntus",
            grade: "7b",
            stars: 2,
        },
        {
            name: "Le philosophe",
            grade: "5c",
            stars: 1,
        },
    ]
};