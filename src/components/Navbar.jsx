import React, { useState } from 'react';
import '../styles/navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar__logo">🦊 Fox Web Dev</div>
      <div className={`navbar__links ${isOpen ? 'active' : ''}`}>
        <a href="#about">Nosotros</a>
        <a href="#services">Servicios</a>
        <a href="#contact">Contacto</a>
      </div>
      <div className="navbar__toggle" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
