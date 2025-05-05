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
    // Prevent body scroll when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
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

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <button
            className="mobile-menu__close"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <i className="fas fa-times" aria-hidden="true"></i>
          </button>

          {/* Top navigation */}
          <div className="mobile-menu__top-nav">
            <a href="#" className="mobile-menu__top-nav-link mobile-menu__top-nav-item">Newsletter</a>
            <a href="#" className="mobile-menu__top-nav-link mobile-menu__top-nav-item">Podcast</a>
            <a href="#" className="mobile-menu__top-nav-link">Cerca</a>
          </div>

          {/* Search box */}
          <div className="mobile-menu__search">
            <input type="text" className="mobile-menu__search-input" placeholder="Cerca" />
            <button className="mobile-menu__search-button">
              <i className="fas fa-search" aria-hidden="true"></i>
            </button>
          </div>

          {/* Home section */}
          <div className="mobile-menu__section-header">
            <span className="mobile-menu__section-icon">
              <i className="fas fa-globe" aria-hidden="true"></i>
            </span>
            <span>HOME</span>
          </div>

          {/* Categories */}
          <div className="mobile-menu__categories">
            <a href="#" className="mobile-menu__category-link">Italia</a>
            <a href="#" className="mobile-menu__category-link">Moda</a>
            <a href="#" className="mobile-menu__category-link">Mondo</a>
            <a href="#" className="mobile-menu__category-link">Libri</a>
            <a href="#" className="mobile-menu__category-link">Politica</a>
            <a href="#" className="mobile-menu__category-link">Consumismi</a>
            <a href="#" className="mobile-menu__category-link">Tecnologia</a>
            <a href="#" className="mobile-menu__category-link">Storie/Idee</a>
            <a href="#" className="mobile-menu__category-link">Internet</a>
            <a href="#" className="mobile-menu__category-link">Da Costa a Costa</a>
            <a href="#" className="mobile-menu__category-link">Scienza</a>
            <a href="#" className="mobile-menu__category-link">Ok Boomer!</a>
            <a href="#" className="mobile-menu__category-link">Cultura</a>
            <a href="#" className="mobile-menu__category-link">Media</a>
            <a href="#" className="mobile-menu__category-link">Economia</a>
            <a href="#" className="mobile-menu__category-link">Europa</a>
            <a href="#" className="mobile-menu__category-link">Sport</a>
            <a href="#" className="mobile-menu__category-link">Altrecose</a>
          </div>

          {/* Divider */}
          <div className="mobile-menu__divider"></div>

          {/* Podcast section */}
          <div className="mobile-menu__bottom-section">
            <a href="#" className="mobile-menu__bottom-link">
              <span className="mobile-menu__section-icon">
                <i className="fas fa-microphone" aria-hidden="true"></i>
              </span>
              <span>PODCAST</span>
            </a>
          </div>

          {/* Divider */}
          <div className="mobile-menu__divider"></div>

          {/* Newsletter section */}
          <div className="mobile-menu__bottom-section">
            <a href="#" className="mobile-menu__bottom-link">
              <span className="mobile-menu__section-icon">
                <i className="fas fa-envelope" aria-hidden="true"></i>
              </span>
              <span>NEWSLETTER</span>
            </a>
          </div>

          {/* Divider */}
          <div className="mobile-menu__divider"></div>

          {/* Favorites section */}
          <div className="mobile-menu__bottom-section">
            <a href="#" className="mobile-menu__bottom-link">
              <span className="mobile-menu__section-icon">
                <i className="fas fa-bookmark" aria-hidden="true"></i>
              </span>
              <span>I MIEI PREFERITI</span>
            </a>
          </div>

          {/* Divider */}
          <div className="mobile-menu__divider"></div>

          {/* Shop section */}
          <div className="mobile-menu__bottom-section">
            <a href="#" className="mobile-menu__bottom-link">
              <span className="mobile-menu__section-icon">
                <i className="fas fa-shopping-bag" aria-hidden="true"></i>
              </span>
              <span>SHOP</span>
            </a>
          </div>

          {/* Divider */}
          <div className="mobile-menu__divider"></div>

          {/* Calendar section */}
          <div className="mobile-menu__bottom-section">
            <a href="#" className="mobile-menu__bottom-link">
              <span className="mobile-menu__section-icon">
                <i className="fas fa-calendar-alt" aria-hidden="true"></i>
              </span>
              <span>CALENDARIO</span>
            </a>
          </div>

          {/* Divider */}
          <div className="mobile-menu__divider"></div>

          {/* User section */}
          <div className="mobile-menu__bottom-section">
            <a href="#" className="mobile-menu__bottom-link">
              <span className="mobile-menu__section-icon">
                <i className="fas fa-user" aria-hidden="true"></i>
              </span>
              <span>AREA PERSONALE</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;