import { createContext, useState } from "react";

export const ThemeChanger = createContext();

const ThemeProvider = ({ children }) => {
    const [theme , setTheme] = useState("light")
       function themeToggler(){
        setTheme(theme == "light" ? "dark" : "light")
      }
 
  return <ThemeChanger.Provider value={{theme  , themeToggler}}>{children}</ThemeChanger.Provider>;
};
export default ThemeProvider;
