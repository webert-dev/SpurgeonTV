'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const BibleSettingsContext = createContext();

export function BibleSettingsProvider({ children }) {
  const [integrationEnabled, setIntegrationEnabled] = useState(true);
  const [tooltipTranslation, setTooltipTranslation] = useState('kjv');
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedEnabled = localStorage.getItem('spurgeon_bible_integration');
      if (savedEnabled !== null) {
        setIntegrationEnabled(savedEnabled === 'true');
      }
      
      const savedTranslation = localStorage.getItem('spurgeon_bible_translation');
      if (savedTranslation) {
        setTooltipTranslation(savedTranslation);
      }
    } catch (e) {
      console.error("Error reading from localStorage", e);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage when changed
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem('spurgeon_bible_integration', integrationEnabled);
      localStorage.setItem('spurgeon_bible_translation', tooltipTranslation);
    } catch (e) {
      console.error("Error writing to localStorage", e);
    }
  }, [integrationEnabled, tooltipTranslation, isLoaded]);

  return (
    <BibleSettingsContext.Provider 
      value={{ 
        integrationEnabled, 
        setIntegrationEnabled, 
        tooltipTranslation, 
        setTooltipTranslation,
        isLoaded 
      }}
    >
      {children}
    </BibleSettingsContext.Provider>
  );
}

export function useBibleSettings() {
  const context = useContext(BibleSettingsContext);
  if (context === undefined) {
    throw new Error('useBibleSettings must be used within a BibleSettingsProvider');
  }
  return context;
}
