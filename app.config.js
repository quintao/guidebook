const googleMapsApiKey = process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY;

export default {
  expo: {
    name: "Guidebook",
    slug: "guidebook",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.quintao.guidebook",
      config: {
        googleMapsApiKey,
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        monochromeImage: "./assets/images/adaptive-icon-monochrome.png",
        backgroundColor: "#ffffff",
      },
      splash: {
        image: "./assets/images/splash-icon.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
      package: "com.quintao.guidebook",
      config: {
        googleMaps: {
          apiKey: googleMapsApiKey,
        },
      },
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
      "expo-font",
      "expo-web-browser",
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {},
      eas: {
        projectId: "8fb41c07-0105-46d0-aff2-8b297affa229",
      },
      googleMapsApiKey,
    },
    owner: "quintao",
  },
};
