import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

// Tipos do contexto
export type View = 'portfolio' | 'cv';
export type Language = 'pt' | 'en';

interface AppContextType {
  view: View;
  setView: (view: View) => void;
  language: Language;
  setLanguage: (language: Language) => void;
  toggleView: () => void;
  toggleLanguage: () => void;
}

// Criar contexto
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [view, setView] = useState<View>('portfolio');
  const [language, setLanguage] = useState<Language>('pt');

  const toggleView = () => {
    setView((prev) => (prev === 'portfolio' ? 'cv' : 'portfolio'));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const value: AppContextType = {
    view,
    setView,
    language,
    setLanguage,
    toggleView,
    toggleLanguage,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Hook para usar o contexto
export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp deve ser usado dentro de um AppProvider');
  }
  return context;
};
