// Configuração global de tema e estilos
export const theme = {
  colors: {
    primary: '#eb8f2577',
    secondary: '#3a55ed78',
    dark: '#203224',
    darker: '#c1c7d3ed',
    light: '#f3f4f6',
    lighter: '#ffffff',
    accent: '#697397',
    text: '#374151',
    border: '#e5e7eb',
    success: '#10b981',
    warning: '#a46c0a',
    error: '#ef4444',
  },
  fonts: {
    primary: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    mono: 'SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  breakpoints: {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
  },
  transitions: {
    fast: '0.15s ease-in-out',
    normal: '0.2s ease-in-out',
    slow: '0.3s ease-in-out',
  },
  
};

export type Theme = typeof theme;

/*
// Configuração global de tema e estilos
export const theme = {
  colors: {
    primary: '#eb8f2577',
    secondary: '#3a55ed78',
    dark: '#1f2937',
    darker: '#111827',
    light: '#f3f4f6',
    lighter: '#ffffff',
    accent: '#697397',
    text: '#374151',
    border: '#e5e7eb',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  },
  fonts: {
    primary: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    mono: 'SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  breakpoints: {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
  },
  transitions: {
    fast: '0.15s ease-in-out',
    normal: '0.2s ease-in-out',
    slow: '0.3s ease-in-out',
  },
};

export type Theme = typeof theme;
*/