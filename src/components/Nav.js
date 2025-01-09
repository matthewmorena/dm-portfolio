import React, { useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-logo">David Munera Designs</div>
      <button className="nav-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="/#/#hello">Hello</a></li>
        <li><a href="/#/#projects">Projects</a></li>
        <li><a href="/#/#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
