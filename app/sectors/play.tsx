export default {
    overview: {
        name: { fr: "Play", en: "Play" },
        short_description: {
            fr: "Secteur de bloc.",
            en: "Bouldering sector."
        },
        main_activities: {
            fr: "Bloc",
            en: "Bouldering"
        },
        rock: {
            fr: "Calcaire",
            en: "Limestone"
        },
        orientation: "N",
        altitude: "860m",
        grades: "3A-6C",
        latitude: 46.195407,
        longitude: 6.891769,
    },
    detailed_info: {
        parking: {
            android: "https://maps.app.goo.gl/uQJWrCy9BDi9x9Jf6",
            ios: ""
        },
        access: {
            fr: "De Val-d'Illiez, 300 mètres après l'église, quitter la route cantonale et aller en direction du stand de tir où l'on parque. La forêt se trouve devant vous et le premier bloc se trouve 20 mètres à droite du stand.",
            en: "From Val-d'Illiez, 300 meters past the church, leave the main road and head towards the shooting range where you can park. The forest is directly ahead, and the first boulder is located 20 meters to the right of the shooting range."
        },
        restaurants: {
            fr: "Restaurant du tennis, et quelques restaurants aussi au centre ville.",
            en: "Tennis club restaurant, as well as a few restaurants in the town center."
        },
        long_description: {
            fr: "Ces dernières années, quelques « blocs » ont été brossés et fléchés. Les possibilités restent limitées, l'intérêt moyen, mais ils permettent une séance rapide à 2 pas de la voiture. Ils proposent peu de passages réellement raides. Bref, une visite si vous avez peu de temps ! À éviter lors des tirs. Terrains privés ! Soyez discrets.",
            en: "In recent years, a few boulders have been brushed and marked. Potential remains limited and interest moderate, but they offer a quick session just steps from the car. Few problems are truly steep. In short, worth a visit if you are short on time! Avoid during shooting sessions. Private property—please be discrete."
        },
    },
    sector_pictures: [
        {
            path: require("@/assets/images/play/titan.jpg"),
            description: {
                fr: "Bloc titan",
                en: "Titan boulder"
            }
        },
        {
            path: require("@/assets/images/play/others.jpg"),
            description: {
                fr: "Les autres blocs du secteur",
                en: "Other boulders in the sector"
            }
        },
    ],
    routes: [
        {
            id: "play_1",
            name: "Arête de gauche",
            grade: "5A",
            stars: 1,
            tips: {
                fr: "Départ assis",
                en: "Sit start"
            },
            requiped: "",
        },
        {
            id: "play_2",
            name: "Le jeté",
            grade: "6B",
            stars: 1,
            tips: {
                fr: "Départ idem 3",
                en: "Same start as route 3"
            },
            requiped: "",
        },
        {
            id: "play_3",
            name: "Traversée gauche-droite",
            grade: "6B+",
            stars: 3,
            tips: {
                fr: "Très joli",
                en: "Very nice"
            },
            requiped: "",
        },
        {
            id: "play_4",
            name: "Traversée droite-gauche",
            grade: "6B+",
            stars: 1,
            tips: "",
            requiped: "",
        },
        {
            id: "play_5",
            name: "Traversée a.-r.",
            grade: "6C",
            stars: 2,
            tips: "",
            requiped: "",
        },
        {
            id: "play_6",
            name: "Première fissure",
            grade: "5C",
            stars: 3,
            tips: "",
            requiped: "",
        },
        {
            id: "play_7",
            name: "Deuxième fissure",
            grade: "5B",
            stars: 2,
            tips: {
                fr: "Départ idem 6",
                en: "Same start as route 6"
            },
            requiped: "",
        },
        {
            id: "play_8",
            name: "Plein centre",
            grade: "?",
            stars: 1,
            tips: {
                fr: "Projet",
                en: "Project"
            },
            requiped: "",
        },
        {
            id: "play_9",
            name: "La classique",
            grade: "5A",
            stars: 3,
            tips: "",
            requiped: "",
        },
        {
            id: "play_10",
            name: "Arête du milieu",
            grade: "4B",
            stars: 1,
            tips: {
                fr: "5B arête seule, attention **expo**.",
                en: "5B using arête only, watch out **high exposure**."
            },
            requiped: "",
        },
        {
            id: "play_11",
            name: "Plan de droite",
            grade: "5B",
            stars: 1,
            tips: "",
            requiped: "",
        },
        {
            id: "play_12",
            name: "5C bloc",
            grade: "5C",
            stars: 1,
            tips: "",
            requiped: "",
        },
        {
            id: "play_13",
            name: "3 bloc",
            grade: "3",
            stars: 1,
            tips: "",
            requiped: "",
        },
        {
            id: "play_14",
            name: "5A bloc",
            grade: "5A",
            stars: 1,
            tips: "",
            requiped: "",
        },
        {
            id: "play_15",
            name: "3 bloc",
            grade: "3",
            stars: 1,
            tips: "",
            requiped: "",
        }, 
        {
            id: "play_16",
            name: "Dalle 5A",
            grade: "5A",
            stars: 1,
            tips: "",
            requiped: "",
        },
        {
            id: "play_17",
            name: "6A+ bloc",
            grade: "6A+",
            stars: 1,
            tips: "",
            requiped: "",
        },
        {
            id: "play_18",
            name: "6B+ bloc",
            grade: "6B+",
            stars: 2,
            tips: "",
            requiped: "",
        }, 
    ]
};