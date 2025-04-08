// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import DesarrolloWeb from './pages/DesarrolloWeb';
import Automatizacion from './pages/Automatizacion';
import PowerBI from './pages/PowerBI';
import './styles/main.scss';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <div className="scroll-container">
              <Hero />
              <About />
              <Services />
              <Contact />
            </div>
          }
        />

        {/* Páginas individuales de servicios */}
        <Route path="/servicios/desarrollo-web" element={<DesarrolloWeb />} />
        <Route path="/servicios/automatizacion" element={<Automatizacion />} />
        <Route path="/servicios/power-bi" element={<PowerBI />} />
      </Routes>
    </>
  );
}

export default App;
