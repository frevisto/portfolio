import React from 'react';
import { useApp } from '../context/AppContext';
import { theme } from '../styles/theme';

// Componente Controller - alternador entre Portfolio e CV
export const Controller: React.FC = () => {
  const { view, language, toggleView } = useApp();

  const handleClick = () => {
    toggleView();
    window.scrollTo({ top: 0, behavior: "smooth" });
    };

  // Ícones simples em SVG
  const portfolioIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6-3 6 3v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" />
      <path d="M9 5v0a3 3 0 0 1 6 0v0" />
    </svg>
  );

  const cvIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <polyline points="13 2 13 9 20 9" />
      <line x1="9" y1="14" x2="15" y2="14" />
      <line x1="9" y1="18" x2="15" y2="18" />
    </svg>
  );

  return (
    <>
    <button
      onClick={handleClick}
      title={view === 'portfolio' ? (language === 'pt' ? 'Ir para CV' : 'Switch to Resumé') : (language === 'pt' ? 'Ir para Portfolio' : 'Switch to Portfolio')}
      style={{
        padding: theme.spacing.md,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: theme.colors.warning,
        transition: `transform ${theme.transitions.normal}`,
        fontSize: '1rem',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {view === 'portfolio' ? portfolioIcon : cvIcon}
    </button>
      {view === 'portfolio' ? (language === 'pt' ? 'Portfólio' : 'Portfolio') : (language === 'pt' ? 'Currículo' : 'Resumé')}
  
  </>
  );
};
