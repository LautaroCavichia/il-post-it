// src/components/layout/Header.tsx
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-left">
          <button className="menu-toggle">
            <span className="menu-icon"></span>
          </button>
          <div className="header-links">
            <a href="#" className="header-link">Newsletter</a>
            <a href="#" className="header-link">Podcast</a>
          </div>
        </div>
        
        <div className="logo-container">
          <a href="/" className="logo-link">
            <img src="./logo.png" alt="Il Post" className="site-logo" />
          </a>
        </div>
        
        <div className="header-right">
          <div className="search-container">
            <button className="search-button">
              <span className="search-icon"></span>
              Cerca
            </button>
          </div>
          <div className="action-links">
            <a href="#" className="action-link">Shop</a>
            <a href="#" className="action-link">Regala</a>
            <a href="#" className="action-link highlight">Abbonati</a>
            <button className="user-button">
              <span className="user-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;