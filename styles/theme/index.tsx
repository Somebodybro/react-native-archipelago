import React, {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
  useMemo,
} from "react";

import darkMode from "./defaultThemes/darkMode.json";
import lightMode from "./defaultThemes/lightMode.json";
import AsyncStorage from "../../utils/storageHandler";

// Colors should be added to this interface and then specified in imported files.
export interface COLORS {
  text: string;
  background: string;
  buttonDefault: string;
  buttonTextDefault: string;
  backgroundDark: string;
  shadow: string;
  errorBackground: string;
  errorText: string;
  defaultBorder: string;
  divider: string;

  chat: {
    chatText: string;
    selfPlayerName: string;
    otherPlayerName: string;
    itemFiller: string;
    itemNeverExclude: string;
    itemProgression: string;
    itemTrap: string;
    location: string;
  };
}

export interface Theme {
  name: string;
  colors: COLORS;
}

type ThemeProviderProps = object;

const ThemeContext = createContext({
  theme: lightMode,
  setTheme: (newTheme: Theme) => {},
});

export default ThemeContext;

export const defaultThemes = { darkMode, lightMode };

export const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
  const [theme, setTheme] = useState<Theme>(lightMode);
  useEffect(() => {
    // Load saved theme from storage
    const getTheme = async () => {
      try {
        const themeString = await AsyncStorage.getItem("theme");
        let savedTheme = lightMode;
        if (themeString !== null) savedTheme = JSON.parse(themeString);
        setTheme(savedTheme);
      } catch (error) {
        console.log("Error loading theme:", error);
      }
    };
    getTheme();
  }, []);

  const toggleTheme = (newTheme: Theme) => {
    console.log(newTheme);
    setTheme(newTheme);
    AsyncStorage.setItem("theme", JSON.stringify(newTheme));
  };

  return (
    <ThemeContext.Provider
      value={useMemo(() => ({ theme, setTheme: toggleTheme }), [theme])}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
