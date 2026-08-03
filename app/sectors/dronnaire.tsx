export default {
    overview: {
        name: { fr: "Dronnaire", en: "Dronnaire" },
        short_description: {
            fr: "Petit secteur avec de la cornieule",
            en: "Small sector on rauhwacke rock"
        },
        main_activities: {
            fr: "Escalade Sportive",
            en: "Sport climbing"
        },
        rock: {
            fr: "Cornieule",
            en: "Rauhwacke / Cornieule"
        },
        grades: "5a-7a+",
        orientation: "S",
        altitude: "1800m",
        latitude: 46.199008,
        longitude: 6.827668,
    },
    detailed_info: {
        parking: {
            android: "https://maps.app.goo.gl/bAcKmjrQnVgCxirFA",
            ios: "-"
        },
        access: {
            fr: "Monthey - Val-d'Illiez - Les Crosets - Vaillime - col des Portes du Soleil. Continuer jusqu'à l'alpage de la Dronnaire (parking un peu plus loin). 10 minutes à pied. Accès possible également depuis Morgins par le vallon de They et la buvette de la Tovassière. Parking à la buvette. 15 minutes de marche. Falaise au bord de la route carrossable.",
            en: "Monthey - Val-d'Illiez - Les Crosets - Vaillime - Portes du Soleil pass. Continue until the Dronnaire alpine pasture (parking a little further). 10-minute walk. Access is also possible from Morgins via the They valley and the Tovassière mountain inn. Parking at the inn. 15-minute walk. Cliff located alongside the dirt road."
        },
        restaurants: {
            fr: "Buvette de la Tovassière et Buvette et Cantine de They.",
            en: "Buvette de la Tovassière and Buvette et Cantine de They."
        },
        long_description: {
            fr: "Bien entendu, à la lecture du topo, le potentiel de ce petit site est bien maigre. Mais vous aurez le rare bonheur de grimper sur un rocher particulier que l'on ne rencontre pas dans les nombreux sites du Chablais: de la cornieule avec des trous plus ou moins gros et des plats. Et tout ça dans du dévers. À combiner avec le site du col des Portes du Soleil si vous avez la journée. \n\n**Équipement**: Gilbert Perrin et Frank Berrut",
            en: "Of course, looking at the guidebook, the potential of this small crag seems modest. However, you'll have the rare pleasure of climbing on a unique rock type not found in the other Chablais crags: cornieule (rauhwacke) featuring various sized pockets and slopers—all on overhanging rock. Best combined with the Col des Portes du Soleil crag if you have the whole day.\n\n**Bolting**: Gilbert Perrin and Frank Berrut"
        },
    },
    sector_pictures: [
        {
            path: require("@/assets/images/dronnaire/overview.jpg"),
            description: {
                fr: "Aperçu général",
                en: "General overview"
            }
        },
    ],
    routes: [
    {
        id: "dronnaire_1",
        name: "Project",
        grade: "?",
        stars: 1,
    },
    {
        id: "dronnaire_2",
        name: "Le friend salvateur",
        grade: "7a+",
        stars: 3,
        tips: {
            fr: "7a+ avec le rétablissement !",
            en: "7a+ including the mantle finish!"
        },
    },
    {
        id: "dronnaire_3",
        name: "Au voleur",
        grade: "6c+",
        stars: 2,
    },
    {
        id: "dronnaire_4",
        name: "Prise de tête",
        grade: "6b",
        stars: 3,
    },
    {
        id: "dronnaire_5",
        name: "Dolce vita",
        grade: "5a",
        stars: 1,
    },
    {
        id: "dronnaire_6",
        name: "Tuf ! Tuf !",
        grade: "5c",
        stars: 2,
    },
    {
        id: "dronnaire_7",
        name: "Le tufeau",
        grade: "6a+",
        stars: 2,
    },
    {
        id: "dronnaire_8",
        name: "Tartuffe",
        grade: "5c",
        stars: 1,
    },
  ]
};