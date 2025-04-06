// src/components/Hero.jsx
import React from 'react';
import '../styles/main.scss';
import FoxScene from './FoxScene';
import '../styles/hero.scss';

const Hero = () => {
  return (
    <section id="hero" className="section hero-section">
      <div className="hero-canvas">
        <FoxScene />
      </div>
      <div className="hero-content">
        <h1>Fox Web Development</h1>
        <p>Soluciones modernas, confiables y distintas.</p>
      </div>
    </section>
  );
};

export default Hero;
