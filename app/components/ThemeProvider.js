'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('spurgeon_theme');
      if (savedTheme) {
        setTheme(savedTheme);
      }
    } catch (e) {
      console.error("Error reading from localStorage", e);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage and apply body class when changed
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem('spurgeon_theme', theme);
    } catch (e) {
      console.error("Error writing to localStorage", e);
    }

    // Apply to body
    document.body.classList.remove('theme-clear', 'theme-sepia');
    if (theme !== 'dark') {
      document.body.classList.add(`theme-${theme}`);
    }
  }, [theme, isLoaded]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isLoaded }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
