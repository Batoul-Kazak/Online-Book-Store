"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "de" | "ar" | "ru";
type Translations = Record<string, any>;

const DEFAULT_LANGUAGE: Language = "en";
const LANGUAGES: Language[] = ["en", "de", "ar", "ru"];

const TranslationContext = createContext<{
  lang: Language;
  t: (key: string) => string;
  setLang: (lang: Language) => void;
}>({
  lang: DEFAULT_LANGUAGE,
  t: (key) => key,
  setLang: () => { },
});

export function TranslationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<Language>(DEFAULT_LANGUAGE);
  const [translations, setTranslations] = useState<Translations>({});

  // Load translations for current language
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language | null;
    const browserLang = navigator.language.split("-")[0] as Language;
    const initialLang =
      savedLang && LANGUAGES.includes(savedLang)
        ? savedLang
        : LANGUAGES.includes(browserLang)
          ? browserLang
          : DEFAULT_LANGUAGE;

    setLangState(initialLang);
    loadTranslations(initialLang);
  }, []);

  const loadTranslations = async (language: Language) => {
    try {
      const res = await fetch(`/locales/${language}.json`);
      const data = await res.json();
      setTranslations(data);
      localStorage.setItem("lang", language);

      // Set direction for RTL languages (Arabic)
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = language;
    } catch (error) {
      console.error(`Failed to load ${language} translations`, error);
    }
  };

  const setLang = (language: Language) => {
    setLangState(language);
    loadTranslations(language);
  };

  const t = (key: string): string => {
    return (
      key.split(".").reduce((obj: any, i) => obj?.[i], translations) || key
    );
  };

  return (
    <TranslationContext.Provider value={{ lang, t, setLang }}>
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
