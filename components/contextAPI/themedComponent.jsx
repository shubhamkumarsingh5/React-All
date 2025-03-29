import React, { useContext, useEffect } from "react";
import { themeContext } from "./themeProvider";

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(themeContext);

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#333";
  }, [theme]);

  return (
    <div className={theme == "dark" ? "dark-background" : "light-background"}>
      <p>please click on the button to change the theme</p>

      <p>Current theme: {theme}</p>

      <button className="themeButton" onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
};

export default ThemedComponent;
