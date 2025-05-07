
const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

const mainColorViolette = '#523b50';
const mainColorGreen ='#1e8385';
const secondaryColorViolette = '#76646c';
const secondaryColorGreen ='#5c6c6c';
const tertiaryColorNeutral = '#e6d6cf';

const themes = {
    blueish: {
        text: 'black',
        appBackground: 'white',
        link: '#636262',
        tint: tintColorLight,
        icon: '#687076',
        tabIconDefault: '#687076',
        tabIconSelected: mainColorViolette,
        pageTitle: 'black',
        textInsideButton: "white",
        mainColorGreen: mainColorGreen,
        mainColorGreenWithOpacity: "rgba(30, 131, 133, 0.5)",
        mainColorViolette: mainColorViolette,
        secondaryColorViolette: secondaryColorViolette,
        secondaryColorGreen: secondaryColorGreen,
        tertiaryColorNeutral: tertiaryColorNeutral
    },
    modern: {
        text: 'black',
        appBackground: tertiaryColorNeutral,
        link: '#636262',
        tint: tintColorLight,
        icon: '#687076',
        tabIconDefault: '#687076',
        tabIconSelected: mainColorViolette,
        pageTitle: 'black',
        textInsideButton: "white",
        mainColorGreen: mainColorGreen,
        mainColorGreenWithOpacity: "rgba(30, 131, 133, 0.4)",
        mainColorViolette: mainColorViolette,
        secondaryColorViolette: secondaryColorViolette,
        secondaryColorGreen: secondaryColorGreen,
        tertiaryColorNeutral: tertiaryColorNeutral        
    },
}

const default_theme = themes.blueish

export default default_theme