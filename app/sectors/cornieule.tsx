export default {
    overview: {
        name: { fr: "Pierre à Cornieule", en: "Pierre à Cornieule" },
        short_description: {
            fr: "Petit secteur idéal pour les enfants",
            en: "Small sector, ideal for children"
        },
        main_activities: {
            fr: "Escalade Sportive",
            en: "Sport climbing"
        },
        rock: {
            fr: "Cornieule",
            en: "Rauhwacke / Cornieule"
        },
        grades: "3a-5a",
        orientation: "S",
        altitude: "1920m",
        latitude: 46.195169,
        longitude: 6.846308,   
    },
    detailed_info: {
        parking: {
            android: "https://maps.app.goo.gl/kH55XQ1oNsYZHunq9",
            ios: "-"
        },
        access: {
            fr: "Monthey - Val-d'Illiez - Les Crosets - monter vers le col des Portes du Soleil. Juste avant Vaillime, prendre à droite la route carrossable menant au restaurant le Relais. Le dépasser et parquer 300 mètres plus loin. La pierre se trouve sur la gauche, 10 minutes de marche.",
            en: "Monthey - Val-d'Illiez - Les Crosets - drive up towards the Portes du Soleil pass. Just before Vaillime, turn right onto the unpaved road leading to the Relais restaurant. Drive past it and park 300 meters further. The boulder is on the left, a 10-minute walk."
        },
        restaurants: {
            fr: "A l'aller ou au retour, un arrêt au Relais panoramique et son zoo est recommandé. Les petits adoreront et pourront même enchaîner avec une balade en poney.",
            en: "On the way there or back, a stop at the Relais panoramique and its zoo is recommended. Kids will love it and can even top it off with a pony ride."
        },
        long_description: {
            fr: "Vous désirez concilier pique-nique, balade et petite escalade avec vos “bouts d’choux” pas plus haut que trois pommes? Ce site est pour vous. Cette pierre au milieu des pâturages permet aux enfants de s’initier à l'escalade, voire de grimper en tête grâce à un équipement très rapproché. \n\n**Equipement**: Gilbert Perrin et Frank Berrut",
            en: "Looking to combine a picnic, a hike, and a little climbing with your tiny toddlers? This site is for you. Set in the middle of alpine pastures, this boulder lets kids try climbing for the first time or even try lead climbing thanks to very closely spaced bolts.\n\n**Bolting**: Gilbert Perrin and Frank Berrut"
        },
    },
    sector_pictures: [
        {
            path: require("@/assets/images/cornieule/cornieule.jpg"),
            description: {
                fr: "Localisation du secteur",
                en: "Sector location"
            }
        },
        {
            path: require("@/assets/images/cornieule/topo.png"),
            description: {
                fr: "Les voies du secteur",
                en: "Routes overview"
            }
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