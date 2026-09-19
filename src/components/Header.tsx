import React from 'react';
import { Controller } from './Controller';
import { Translator } from './Translator';
import { theme } from '../styles/theme';

// Componente Header fixo
export const Header: React.FC = () => {
        
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '70px',
        background: `linear-gradient(to right, ${theme.colors.darker}, ${theme.colors.dark})`,
        color: theme.colors.lighter,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: theme.spacing['2xl'],
        paddingRight: theme.spacing['2xl'],
        boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1)`,
      }}
    >
      {/* Título/Logo à esquerda */}
      <div
        style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            background: `linear-gradient(135deg, ${theme.colors.warning} 0%, ${theme.colors.secondary} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: theme.fonts.primary,
            display:'inline-block'
        }}
      >


      <Controller />
      
      </div>

      {/* Controles no centro/direita */}
      <div
        style={{
          display: 'flex',
          gap: theme.spacing.md,
          alignItems: 'center',
        }}
      >
        
        <Translator />
      </div>
    </header>
  );
};
