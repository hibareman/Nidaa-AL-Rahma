import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

const languageMeta = {
  ar: {
    label: "العربية",
    dir: "rtl",
  },
  en: {
    label: "English",
    dir: "ltr",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("nidaa-language") || "ar";
  });

  useEffect(() => {
    const safeLanguage = languageMeta[language] ? language : "ar";

    document.documentElement.lang = safeLanguage;
    document.documentElement.dir = languageMeta[safeLanguage].dir;
    localStorage.setItem("nidaa-language", safeLanguage);
  }, [language]);

  const value = useMemo(() => {
    const safeLanguage = languageMeta[language] ? language : "ar";
    const direction = languageMeta[safeLanguage].dir;

    return {
      language: safeLanguage,
      direction,
      isArabic: safeLanguage === "ar",
      setLanguage,
      toggleLanguage: () => setLanguage(safeLanguage === "ar" ? "en" : "ar"),
      languageLabel: languageMeta[safeLanguage].label,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
