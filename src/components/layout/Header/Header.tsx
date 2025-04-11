// src/components/layout/Header.tsx
import React from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header: React.FC = () => {
  return (
    <div className='header-container'>
      <header className="site-header">
        <div className="container">
          {/* Left: Menu + Links */}
          <div className="header-left">
            <button className="menu-toggle">
              <i className="fas fa-bars"></i>
            </button>

            <div className="header-links">
              <a href="#" className="header-link">Newsletter</a>
              <a href="#" className="header-link">Podcast</a>
              <a href="#" className="header-link">
                <i className="fas fa-search"></i> Cerca
              </a>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="logo-container">
            <a href="/" className="logo-link">
              <img src="./logo.png" alt="Il Post" className="site-logo" />
            </a>
          </div>

          {/* Right: Action Buttons */}
          <div className="header-right">
            <div className="action-links">
              <a href="#" className="action-link highlight none">Shop</a>
              <a href="#" className="action-link highlight none">Regala</a>
              <a href="#" className="action-link highlight">Abbonati</a>
              <button className="user-button">
                <i className="fas fa-user"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;