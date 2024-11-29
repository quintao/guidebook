
const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

const mainColorViolette = '#523b50';
const mainColorGreen ='#465f59';
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
        mainColorGreen: mainColorGreen,
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
        mainColorGreen: mainColorGreen,
        mainColorViolette: mainColorViolette,
        secondaryColorViolette: secondaryColorViolette,
        secondaryColorGreen: secondaryColorGreen,
        tertiaryColorNeutral: tertiaryColorNeutral        
    }
}


const default_theme = themes.blueish

export default default_theme