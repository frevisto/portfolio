import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Portfolio } from './pages/Portfolio';
import { CV } from './pages/CV';
import { useApp } from './context/AppContext';
import { theme } from './styles/theme';

// Componente principal da aplicação
const AppContent: React.FC = () => {
  const { view } = useApp();

  return (
    <div
      style={{
        fontFamily: theme.fonts.primary,
        color: theme.colors.text,
        background: theme.colors.light,
      }}
    >
      <Header />

      {/* Renderiza a página baseado no estado global */}
      <main>
        {view === 'portfolio' ? <Portfolio /> : <CV />}
      </main>
    </div>
  );
};

// Componente App com Router
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;
