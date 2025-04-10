// src/components/layout/Header.tsx
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className='header-container'>
      <header className="site-header">
        <div className="container">
          <div className="header-left">
            <button className="menu-toggle">
              <span className="menu-icon"></span>
              menu
            </button>
            <div className="header-links">
              <a href="#" className="header-link">Newsletter</a>
              <a href="#" className="header-link">Podcast</a>
              <div>
                <i className="fa-solid fa-magnifying-glass"></i>
                <a href="#" className="header-link">Cerca</a>
              </div>
            </div>
          </div>

          <div className="logo-container">
            <a href="/" className="logo-link">
              <img src="./logo.png" alt="Il Post" className="site-logo" />
            </a>
          </div>

          <div className="header-right">
            <div className="action-links">
              <a href="#" className="action-link highlight none">Shop</a>
              <a href="#" className="action-link highlight none">Regala</a>
              <a href="#" className="action-link highlight">Abbonati</a>
              <button className="user-button">
                <span className="user-icon"></span>
                User
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;