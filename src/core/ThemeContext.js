import React from "react";
import THEME from "./THEME";
import merge from "../style-functions/mergeObjects";
const ThemeContext = React.createContext(THEME);

const ThemeProvider = ({ theme, children }) => {
  const customTheme = merge(THEME, theme);

  return (
    <ThemeContext.Provider value={customTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
