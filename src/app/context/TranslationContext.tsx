// // "use client";

// // import { createContext, useContext, useEffect, useState } from "react";

// // type Language = "en" | "de" | "ar" | "ru";
// // type Translations = Record<string, any>;

// // const DEFAULT_LANGUAGE: Language = "en";
// // const LANGUAGES: Language[] = ["en", "de", "ar", "ru"];

// // const TranslationContext = createContext<{
// //   lang: Language;
// //   t: (key: string) => string;
// //   setLang: (lang: Language) => void;
// // }>({
// //   lang: DEFAULT_LANGUAGE,
// //   t: (key) => key,
// //   setLang: () => {},
// // });

// // export function TranslationProvider({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   const [lang, setLangState] = useState<Language>(DEFAULT_LANGUAGE);
// //   const [translations, setTranslations] = useState<Translations>({});

// //   useEffect(() => {
// //     const savedLang = localStorage.getItem("lang") as Language | null;
// //     const browserLang = navigator.language.split("-")[0] as Language;
// //     const initialLang =
// //       savedLang && LANGUAGES.includes(savedLang)
// //         ? savedLang
// //         : LANGUAGES.includes(browserLang)
// //         ? browserLang
// //         : DEFAULT_LANGUAGE;

// //     setLangState(initialLang);
// //     loadTranslations(initialLang);
// //   }, []);

// //   const loadTranslations = async (language: Language) => {
// //     try {
// //       const res = await fetch(`/locales/${language}.json`);
// //       const data = await res.json();
// //       setTranslations(data);
// //       localStorage.setItem("lang", language);

// //       // Set direction for RTL languages (Arabic)
// //       document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
// //       document.documentElement.lang = language;
// //     } catch (error) {
// //       console.error(`Failed to load ${language} translations`, error);
// //     }
// //   };

// //   const setLang = (language: Language) => {
// //     setLangState(language);
// //     loadTranslations(language);
// //   };

// //   const t = (key: string): string => {
// //     return (
// //       key.split(".").reduce((obj: any, i) => obj?.[i], translations) || key
// //     );
// //   };

// //   return (
// //     <TranslationContext.Provider value={{ lang, t, setLang }}>
// //       {children}
// //     </TranslationContext.Provider>
// //   );
// // }

// // export const useTranslation = () => {
// //   const context = useContext(TranslationContext);
// //   if (!context)
// //     throw new Error("useTranslation must be used within TranslationProvider");
// //   return context;
// // };

// "use client";

// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   ReactNode,
// } from "react";

// type Language = "en" | "de" | "ar" | "ru";
// const DEFAULT_LANGUAGE: Language = "en";
// const SUPPORTED_LANGUAGES: Language[] = ["en", "de", "ar", "ru"];

// type TranslationsCache = Record<string, Record<string, any>>; // { "help": { ...en data }, "navbar": { ...en data } }

// const TranslationContext = createContext<{
//   lang: Language;
//   t: (file: string, key: string) => string;
//   setLang: (lang: Language) => void;
// }>({
//   lang: DEFAULT_LANGUAGE,
//   t: (file, key) => key,
//   setLang: () => {},
// });

// export function TranslationProvider({ children }: { children: ReactNode }) {
//   const [lang, setLangState] = useState<Language>(DEFAULT_LANGUAGE);
//   const [cache, setCache] = useState<TranslationsCache>({});

//   // Initialize language from localStorage or browser
//   useEffect(() => {
//     const savedLang = localStorage.getItem("lang") as Language | null;
//     const browserLang = navigator.language.split("-")[0] as Language;
//     const initialLang =
//       savedLang && SUPPORTED_LANGUAGES.includes(savedLang)
//         ? savedLang
//         : SUPPORTED_LANGUAGES.includes(browserLang)
//         ? browserLang
//         : DEFAULT_LANGUAGE;

//     setLangState(initialLang);
//     setLang(initialLang); // triggers initial load
//   }, []);

//   const loadFile = async (file: string, language: Language) => {
//     try {
//       const res = await fetch(`/localization/${file}.json`);
//       if (!res.ok) throw new Error(`Failed to load ${file}`);
//       const allLangs = await res.json(); // { en: {...}, de: {...}, ... }
//       const data = allLangs[language] || allLangs[DEFAULT_LANGUAGE];

//       setCache((prev) => ({
//         ...prev,
//         [file]: data,
//       }));
//     } catch (error) {
//       console.error(`Error loading ${file} for ${language}:`, error);
//     }
//   };

//   const setLang = (language: Language) => {
//     setLangState(language);
//     localStorage.setItem("lang", language);

//     // Reload all cached files in new language
//     Object.keys(cache).forEach((file) => {
//       loadFile(file, language);
//     });

//     // Set RTL for Arabic
//     document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
//     document.documentElement.lang = language;
//   };

//   const t = (file: string, key: string): string => {
//     // Auto-load if not in cache
//     if (!cache[file]) {
//       loadFile(file, lang);
//       return key; // fallback until loaded
//     }

//     return key.split(".").reduce((obj: any, i) => obj?.[i], cache[file]) || key;
//   };

//   return (
//     <TranslationContext.Provider value={{ lang, t, setLang }}>
//       {children}
//     </TranslationContext.Provider>
//   );
// }

// export const useTranslation = () => {
//   const context = useContext(TranslationContext);
//   if (!context)
//     throw new Error("useTranslation must be used within TranslationProvider");
//   return context;
// };

"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Language = "en" | "de" | "ar" | "ru";
const DEFAULT_LANGUAGE: Language = "en";
const SUPPORTED_LANGUAGES: Language[] = ["en", "de", "ar", "ru"];

type TranslationsCache = Record<string, Record<string, any>>;

interface TranslationContextType {
  lang: Language;
  t: (namespace: string, key: string) => any;
  setLang: (lang: Language) => void;
  isNamespaceLoaded: (namespace: string) => boolean;
}

const TranslationContext = createContext<TranslationContextType>({
  lang: DEFAULT_LANGUAGE,
  t: (ns, key) => key,
  setLang: () => {},
  isNamespaceLoaded: () => false,
});

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(DEFAULT_LANGUAGE);
  const [cache, setCache] = useState<TranslationsCache>({});

  // Initialize language
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language | null;
    const browserLang = navigator.language.split("-")[0] as Language;
    const initialLang =
      savedLang && SUPPORTED_LANGUAGES.includes(savedLang)
        ? savedLang
        : SUPPORTED_LANGUAGES.includes(browserLang)
        ? browserLang
        : DEFAULT_LANGUAGE;

    setLangState(initialLang);
    setLang(initialLang);
    console.log("language:  " + initialLang, " ", lang, " ", cache);
  }, []);

  // Load a namespace (e.g., "contact") for current language
  const loadNamespace = async (namespace: string, language: Language) => {
    try {
      const res = await fetch(`/locales/${language}/${namespace}.json`);
      if (!res.ok) throw new Error(`Failed to load ${namespace}`);
      const data = await res.json();

      setCache((prev) => ({
        ...prev,
        [`${language}:${namespace}`]: data,
      }));
    } catch (error) {
      console.error(`Error loading ${namespace} for ${language}:`, error);
    }
  };

  const setLang = (language: Language) => {
    setLangState(language);
    localStorage.setItem("lang", language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;

    // Reload all cached namespaces in new language
    Object.keys(cache).forEach((key) => {
      const [, ns] = key.split(":");
      if (ns) loadNamespace(ns, language);
    });
  };

  const t = (namespace: string, key: string): any => {
    const cacheKey = `${lang}:${namespace}`;
    if (!cache[cacheKey]) {
      loadNamespace(namespace, lang);
      return key; // fallback
    }
    return (
      key.split(".").reduce((obj: any, i) => obj?.[i], cache[cacheKey]) || key
    );
  };

  const isNamespaceLoaded = (namespace: string) =>
    !!cache[`${lang}:${namespace}`];

  return (
    <TranslationContext.Provider
      value={{ lang, t, setLang, isNamespaceLoaded }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context)
    throw new Error("useTranslation must be used within TranslationProvider");
  return context;
};
