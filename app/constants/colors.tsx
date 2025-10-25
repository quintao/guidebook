
const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

const mainColorViolette = '#523b50';
const mainColorGreen ='#1e8385';
const secondaryColorViolette = '#76646c';
const secondaryColorGreen ='#bbdfdfff';
const tertiaryColorNeutral = '#e6d6cf';

const themes = {
    blueish: {
        text: '#3d3c3cff',
        appBackground: 'white',
        link: '#636262',
        tint: tintColorLight,
        icon: '#687076',
        tabIconDefault: '#687076',
        tabIconSelected: mainColorViolette,
        pageTitle: 'black',
        textInsideButton: "white",
        mainColorGreen: mainColorGreen,
        mainColorGreenWithOpacity: "rgba(29, 123, 124, 0.5)",
        mainColorViolette: mainColorViolette,
        secondaryColorViolette: secondaryColorViolette,
        secondaryColorGreen: secondaryColorGreen,
        tertiaryColorNeutral: tertiaryColorNeutral,
        clickableIcons: "rgba(2, 40, 41, 0.5)"
    }
}

const default_theme = themes.blueish

export default default_theme