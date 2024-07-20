import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { DARK_THEME,LIGHT_THEME } from "../constants/themeConstants";

// this state will be used to provide and consume theme related state across components 
export const ThemeContext = createContext({});

// Component that will manage theme 
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(window.localStorage.getItem("themeMode")); 
    window.localStorage.setItem("themeMode", theme); // storing in the local storage
  
    // Toggle theme to set the theme 
    const toggleTheme = () => {
      setTheme((prevTheme) =>
        prevTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
      );
      window.localStorage.setItem("themeMode", theme);
    };
  
    return (
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  };
  // Defines the expexted type of children
  ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };