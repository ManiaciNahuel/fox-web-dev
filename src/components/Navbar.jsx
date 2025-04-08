import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);


  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={handleLinkClick}>
          🦊 <span>Fox Web Dev</span>
        </Link>

        <div className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          <>
            <a href="#about" onClick={handleLinkClick}>Nosotros</a>
            <a href="#services" onClick={handleLinkClick}>Servicios</a>
            <a href="#contact" onClick={handleLinkClick}>Contacto</a>
          </>

        </div>

        <div className="navbar__toggle" onClick={handleToggle}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
