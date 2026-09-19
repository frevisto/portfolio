import React from 'react';
import { useApp } from '../context/AppContext';
import { theme } from '../styles/theme';

// Componente Translator - alternador de idioma
export const Translator: React.FC = () => {
  const { language, toggleLanguage } = useApp();

  const handleClick = () => {
    toggleLanguage();
  };

  // Ícones para idioma
  const ptIcon = (
    <span>Pt-Br</span>
  );

  const enIcon = (
    <span>En</span>
  );

  return (
    <button
      onClick={handleClick}
      title={language === 'pt' ? 'Switch to English' : 'Trocar para Português'}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: theme.spacing.md,
        color: theme.colors.warning,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: `transform ${theme.transitions.normal}`,
        fontSize: '1.25rem',
        fontWeight: 'bold',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {language === 'pt' ? ptIcon : enIcon}
    </button>
  );
};
