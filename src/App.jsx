import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importar páginas
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

// Importar componentes de layout
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import ConsentBanner from './components/common/ConsentBanner';

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/proyectos" element={<ProjectsPage />} />
            <Route path="/equipo" element={<TeamPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/privacidad" element={<PrivacyPage />} />
            <Route path="/terminos" element={<TermsPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <ConsentBanner />
      </div>
    </Router>
  );
};

export default App;
