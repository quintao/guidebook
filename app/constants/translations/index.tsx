import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  setLanguage: (lang: Language) => Promise<void>;
  t: (key: string, fallback?: string) => string;
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Storage key for language preference
const STORAGE_KEY = '@language';

// Get the best language based on device locale (async to support dynamic imports)
export async function getDeviceLanguage(): Promise<Language> {
  try {
    const locales = await getLocalesAsync();
    // Get the first locale (most preferred)
    const firstLocale = locales[0];
    
    if (firstLocale) {
      // Use languageCode which is the ISO 639-1 code (e.g., 'fr', 'en')
      const languageCode = firstLocale.languageCode?.toLowerCase();
      
      // Check if the language is French
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
export function getDeviceLanguageSync(): Language {
  // Try navigator.language (works on web)
  if (typeof navigator !== 'undefined' && navigator.language) {
    if (navigator.language.startsWith('fr')) {
      return 'fr';
    }
  }
  // Default to French
  return 'fr';
}

// Get display name for a language (for UI)
export function getLanguageDisplayName(lang: Language): string {
  const names: Record<Language, string> = {
    en: 'English',
    fr: 'Français',
  };
  return names[lang] || lang;
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
  defaultLanguage?: Language;
}

export function LanguageProvider({ 
  children, 
  defaultLanguage 
}: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage || getDeviceLanguageSync());
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved language on mount
  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const savedLanguage = await AsyncStorage.getItem(STORAGE_KEY);
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
          setLanguageState(savedLanguage as Language);
        } else if (!defaultLanguage) {
          // No saved preference and no default provided, use device language
          const deviceLanguage = await getDeviceLanguage();
          setLanguageState(deviceLanguage);
        }
      } catch (error) {
        console.error('Failed to load language preference', error);
      } finally {
        setIsLoaded(true);
      }
    };
    loadLanguage();
  }, [defaultLanguage]);

  // Save language preference
  const setLanguage = async (lang: Language) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, lang);
      setLanguageState(lang);
    } catch (error) {
      console.error('Failed to save language preference', error);
    }
  };

  // Translation function
  const t = (key: string, fallback?: string): string => {
    return getTranslation(language, key, fallback);
  };

  // Wait until language is loaded to avoid flickering
  if (!isLoaded) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Export the context for direct use if needed
export { LanguageContext };

export default { LanguageProvider, useLanguage };
