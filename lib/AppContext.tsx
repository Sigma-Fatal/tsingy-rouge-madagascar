"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "FR" | "EN" | "MG";
type Theme = "light" | "dark";

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("FR");
  const [theme, setTheme] = useState<Theme>("light");

  // Appliquer la classe 'dark' au document HTML
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <AppContext.Provider value={{ lang, setLang, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
}