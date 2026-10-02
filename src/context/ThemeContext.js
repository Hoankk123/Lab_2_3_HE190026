import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#121212"; 
      document.body.style.color = "#d4d4d4";           
      document.body.style.transition = "all 0.3s ease";
    } else {
      document.body.style.backgroundColor = "#f9f9f9"; 
      document.body.style.color = "#333333";           
      document.body.style.transition = "all 0.3s ease";
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}