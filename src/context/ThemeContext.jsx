import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("nidaa-theme") || "light";
  });

  useEffect(() => {
    const safeTheme = theme === "dark" ? "dark" : "light";

    document.documentElement.classList.toggle("dark", safeTheme === "dark");
    document.documentElement.dataset.theme = safeTheme;
    localStorage.setItem("nidaa-theme", safeTheme);
  }, [theme]);

  const value = useMemo(() => {
    const safeTheme = theme === "dark" ? "dark" : "light";

    return {
      theme: safeTheme,
      isDark: safeTheme === "dark",
      setTheme,
      toggleTheme: () => setTheme(safeTheme === "dark" ? "light" : "dark"),
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
