export default {
    overview: {
        name: "Pierre à Cornieule",
        short_description: "Petit secteur ideal pour les enfants",
        main_activities: "Escalade Sportive",
        rock: "Cornieule",
        grades: "3a-5a",
        orientation: "S",
        altitude: "1920mm",
        latitude: 46.195169,
        longitude: 6.846308,   
    },
    detailed_info: {
        parking: {
            android: "https://maps.app.goo.gl/kH55XQ1oNsYZHunq9",
            ios: "-"
        },
        access: "Monthey - Val-d'Illiez - Les Crosets - monter vers le col des Portes du Soleil. Juste avant Vaillime, prendre à droite la route carrossable menant au restaurant le Relais. Le dépasser et parquer 300 mètres plus loin. La pierre se trouve sur la gauche, 10 minutes de marche.",
        restaurants: "A l'aller ou au retour, un arrêt au Relais panoramique et son zoo est recommandé. Les petits adoreront et pourront même enchaîner avec une balade en poney.",
        long_description: "Vous désirez concilier pique-nique, balade et petite escalade avec vos “bouts d’choux” pas plus haut que trois pommes? Ce site est pour vous. Cette pierre au milieu des pâturages permet aux enfants de s’initier à l'escalade, voire de grimper en tête grâce à un équipement très rapproché. \n\n**Equipement**: Gilbert Perrin et Frank Berrut",
    },
    sector_pictures: [
        {
            path: require("@/assets/images/cornieule/cornieule.jpg"),
            description: "Localisation du secteur"
        },
        {
            path: require("@/assets/images/cornieule/topo.png"),
            description: "Les voies du secteur"
        },        
    ],
    routes: [
    {
        id: "cornieule_1",
        name: "Sam Sam",
        grade: "4b",
        stars: 3,
    },
    {
        id: "cornieule_2",
        name: "La licorne",
        grade: "3a",
        stars: 2,
    },
    {
        id: "cornieule_3",
        name: "Superman",
        grade: "3a",
        stars: 2,
    },
    {
        id: "cornieule_4",
        name: "Zouzous",
        grade: "3b",
        stars: 2,
    },
    {
        id: "cornieule_5",
        name: "Caillou",
        grade: "5a",
        stars: 3,
    },
  ]
};