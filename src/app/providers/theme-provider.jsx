import { ThemeContext } from "@theme/theme-context.jsx";

import { DefaultThemeName, Themes, ThemeStorageKey, } from "@theme/themes.js";
import { useEffect, useLayoutEffect, useState } from "react";

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialTheme() {
  const savedTheme = localStorage.getItem(ThemeStorageKey);

  if (Themes.includes(savedTheme)) {
    return savedTheme;
  }

  return DefaultThemeName;
}

export default function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme);
  const [systemTheme, setSystemTheme] = useState(getSystemTheme);

  const appliedTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (event) => {
      setSystemTheme(event.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = appliedTheme;
    document.documentElement.style.colorScheme = appliedTheme;
    localStorage.setItem(ThemeStorageKey, theme);

    const favicon = document.getElementById("favicon");

    if (favicon) {
      favicon.href =
        appliedTheme === "dark"
          ? "/favicon-white.svg"
          : "/favicon-black.svg";
    }
  }, [theme, appliedTheme]);

  const setTheme = (nextTheme) => {
    if (!Themes.includes(nextTheme)) {
      return;
    }

    setThemeState(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, appliedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
