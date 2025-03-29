import React, { createContext, useState } from "react";

const themeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    console.log("clicked");
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    console.log(theme);
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};
export { ThemeProvider, themeContext };
