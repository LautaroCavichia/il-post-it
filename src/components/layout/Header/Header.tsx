// src/components/layout/Header/Header.tsx
import React, { useState, useEffect } from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`header-wrapper ${isScrolled ? 'sticky' : ''}`}>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
        <div className="header__container">
          {/* Left: Menu + Navigation */}
          <div className="header__section header__section--left">
            <button
              className="header__menu-toggle"
              type="button"
              aria-label="Toggle navigation menu"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars" aria-hidden="true"></i>
            </button>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <a href="#" className="header__nav-link">Newsletter</a>
                </li>
                <li className="header__nav-item">
                  <a href="#" className="header__nav-link">Podcast</a>
                </li>
                <li className="header__nav-item">
                  <a href="#" className="header__nav-link">
                    <i className="fas fa-search" aria-hidden="true"></i>
                    <span>Cerca</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Center: Logo */}
          <div className="header__logo">
            <a href="/" className="header__logo-link" aria-label="Il Post home page">
              <img src="./logo.png" alt="Il Post" className="header__logo-image" />
            </a>
          </div>

          {/* Right: Action Buttons */}
          <div className="header__section header__section--right">
            <nav className="header__actions">
              <ul className="header__actions-list">
                <li className="header__actions-item">
                  <a href="#" className="header__action-link header__action-link--plain">Shop</a>
                </li>
                <li className="header__actions-item">
                  <a href="#" className="header__action-link header__action-link--plain">Regala</a>
                </li>
                <li className="header__actions-item">
                  <a href="#" className="header__action-link header__action-link--highlight">Abbonati</a>
                </li>
                <li>
                  <button
                    className="header__user-button"
                    type="button"
                    aria-label="User account"
                  >
                    <i className="fas fa-user" aria-hidden="true"></i>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-menu__nav">
            <ul className="mobile-menu__list">
              <li className="mobile-menu__item">
                <a href="#" className="mobile-menu__link">Newsletter</a>
              </li>
              <li className="mobile-menu__item">
                <a href="#" className="mobile-menu__link">Podcast</a>
              </li>
              <li className="mobile-menu__item">
                <a href="#" className="mobile-menu__link">Shop</a>
              </li>
              <li className="mobile-menu__item">
                <a href="#" className="mobile-menu__link">Regala</a>
              </li>
              <li className="mobile-menu__item">
                <a href="#" className="mobile-menu__link">Cerca</a>
              </li>
              <li className="mobile-menu__item">
                <a href="#" className="mobile-menu__link mobile-menu__link--highlight">Abbonati</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;