import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import React from 'react';

// Import translations
import enTranslations from './en.json';
import frTranslations from './fr.json';

// Lazy load expo-localization to avoid native module errors in Expo Go
let getLocalesCache: (() => any[]) | null = null;
async function getLocalesAsync(): Promise<any[]> {
  if (getLocalesCache) {
    console.log("cache worked.")
    return getLocalesCache();
  }
  try {
    const { getLocales } = await import('expo-localization');
    getLocalesCache = getLocales;
    return getLocales();
  } catch (e) {
    console.debug('expo-localization not available');
    return [];
  }
}

export type Language = 'en' | 'fr';
const supportedLanguages = ["en", "fr"]

// Type for translation keys
// This is a type-safe way to access nested translation strings
type Translations = typeof enTranslations;

export type TranslationKey = {
  [K in keyof Translations]: Translations[K] extends Record<string, unknown> 
    ? { [SubK in keyof Translations[K]]: `${string & K}.${string & SubK}` }
    : `${string & K}`
}[keyof Translations];

// Define the context type
interface LanguageContextType {
  language: Language;
  t: (key: string, fallback?: string) => string;
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function isSupportedLanguageCode(languageCode: string) : boolean {
  return supportedLanguages.includes(languageCode)
}

// Get the best language based on device locale (async to support dynamic imports)
async function detectLanguage(): Promise<Language> {
  try {
    const locales = await getLocalesAsync();
    const firstLocale = locales[0];
    
    if (firstLocale) {
      const languageCode = firstLocale.languageCode?.toLowerCase();
      if (isSupportedLanguageCode(languageCode)) {
        return languageCode
      }
    }
    
    // Fallback: try navigator.language (works on web)
    if (typeof navigator !== 'undefined' && navigator.language) {
      if (navigator.language.startsWith('fr')) {
        return 'fr';
      }
    }
  } catch (error) {
    console.debug('Failed to get device locales', error);
  }
  
  // Default to French (since the app is primarily in French)
  return 'fr';
}

// Synchronous fallback for immediate use (before async detection completes)
function getLanguageSync(): Language {
  if (typeof navigator !== 'undefined' && navigator.language) {
    if (navigator.language.startsWith('fr')) {
      return 'fr';
    }
  }
  return 'fr';
}

// Translation hook
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Get translation function
export function getTranslation(lang: Language, key: string, fallback?: string): string {
  const translations = lang === 'en' ? enTranslations : frTranslations;
  
  // Split the key by dots for nested access
  const keys = key.split('.');
  let value: any = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return fallback || key;
    }
  }
  
  return typeof value === 'string' ? value : fallback || key;
}

// Provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(getLanguageSync());
  const [isLoaded, setIsLoaded] = useState(false);

  // Detect device language on mount
  useEffect(() => {
    const detectDeviceLanguage = async () => {
      try {
        const detectedLanguage = await detectLanguage();
        setLanguage(detectedLanguage);
      } catch (error) {
        console.debug('Using sync fallback for language detection');
      } finally {
        setIsLoaded(true);
      }
    };
    detectDeviceLanguage();
  }, []);

  // Translation function
  const t = (key: string, fallback?: string): string => {
    return getTranslation(language, key, fallback);
  };

  // Wait until language is loaded to avoid flickering
  if (!isLoaded) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Helper to extract localized text from a field
// Field can be: string, {fr: string, en: string}, or undefined
export function getLocalizedText(field: any, language: Language): string {
  if (!field) {
    return "";
  }
  
  if (typeof field === 'string') {
    return field;
  }
  
  if (typeof field === 'object' && field[language]) {
    return field[language];
  }
  
  // Fallback to French if English is missing
  if (typeof field === 'object' && field.fr) {
    return field.fr;
  }
  
  return "";
}

// Helper to deeply localize a sector object
export function localizeSector(sector: any, language: Language): any {
  if (!sector) return sector;
  
  // Create a deep copy to avoid mutating the original
  const localized = JSON.parse(JSON.stringify(sector));
  
  // Localize overview fields
  if (localized.overview) {
    localized.overview.name = getLocalizedText(localized.overview.name, language);
    localized.overview.short_description = getLocalizedText(localized.overview.short_description, language);
    localized.overview.main_activities = getLocalizedText(localized.overview.main_activities, language)
    localized.overview.rock = getLocalizedText(localized.overview.rock, language)
  }
  
  // Localize detailed_info fields
  if (localized.detailed_info) {
    localized.detailed_info.access = getLocalizedText(localized.detailed_info.access, language);
    localized.detailed_info.restaurants = getLocalizedText(localized.detailed_info.restaurants, language);
    localized.detailed_info.long_description = getLocalizedText(localized.detailed_info.long_description, language);
  }
  
  // Localize sector pictures descriptions
  if (localized.sector_pictures) {
    localized.sector_pictures = localized.sector_pictures.map((pic: any) => ({
      ...pic,
      description: getLocalizedText(pic.description, language)
    }));
  }
  
  // Localize routes
  if (localized.routes) {
    localized.routes = localized.routes.map((route: any) => {
      const localizedRoute = { ...route };
      localizedRoute.name = getLocalizedText(route.name, language);
      localizedRoute.tips = getLocalizedText(route.tips, language);
      localizedRoute.requiped = getLocalizedText(route.requiped, language);
      localizedRoute.setter = getLocalizedText(route.setter, language);
      
      // Localize route pictures
      if (route.pictures) {
        localizedRoute.pictures = route.pictures.map((pic: any) => ({
          ...pic,
          description: getLocalizedText(pic.description, language)
        }));
      }
      
      return localizedRoute;
    });
  }
  
  return localized;
}

// Export the context for direct use if needed
export { LanguageContext };

export default { LanguageProvider, useLanguage, getLocalizedText, localizeSector };
