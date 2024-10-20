import React, {createContext, useState, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LightTheme} from '../../themes/light';
import {DarkTheme} from '../../themes/dark';
import {Theme} from '../../themes/theme';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export const ThemeProvider = ({children}: {children: ReactNode}) => {
  const [theme, setTheme] = useState(LightTheme);

  const toggleTheme = async () => {
    const newTheme = theme.dark ? LightTheme : DarkTheme;
    setTheme(newTheme);

    try {
      await AsyncStorage.setItem('theme', newTheme.dark ? 'dark' : 'light');
    } catch (e) {
      console.error('Error saving theme to AsyncStorage:', e);
    }
  };

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if (savedTheme === 'dark') {
          setTheme(DarkTheme);
        }
      } catch (e) {
        console.error('Error loading theme from AsyncStorage:', e);
      }
    };

    loadTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
