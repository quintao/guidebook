import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import React from 'react';

// Import translations
import enTranslations from './en.json';
import frTranslations from './fr.json';

// Lazy load expo-localization to avoid native module errors in Expo Go
let getLocalesCache: (() => any[]) | null = null;
async function getLocalesAsync(): Promise<any[]> {
  if (getLocalesCache) {
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

// Get the best language based on device locale (async to support dynamic imports)
async function detectLanguage(): Promise<Language> {
  try {
    const locales = await getLocalesAsync();
    const firstLocale = locales[0];
    
    if (firstLocale) {
      const languageCode = firstLocale.languageCode?.toLowerCase();
      if (languageCode === 'fr') {
        return 'fr';
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

// Export the context for direct use if needed
export { LanguageContext };

export default { LanguageProvider, useLanguage };
