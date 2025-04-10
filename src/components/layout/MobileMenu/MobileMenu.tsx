// src/components/layout/MobileMenu.tsx
import React from 'react';
import './MobileMenu.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay">
      <div className="mobile-menu-container">
        <div className="mobile-menu-header">
          <button className="close-button" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="mobile-search">
            <input type="text" placeholder="Cerca" className="search-input" />
            <button className="search-submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>

        <div className="mobile-menu-content">
          <div className="mobile-nav-section">
            <a href="#" className="mobile-nav-item home-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              HOME
            </a>
            
            <div className="menu-columns">
              <div className="menu-column">
                <a href="#" className="mobile-nav-item">Italia</a>
                <a href="#" className="mobile-nav-item">Mondo</a>
                <a href="#" className="mobile-nav-item">Politica</a>
                <a href="#" className="mobile-nav-item">Tecnologia</a>
                <a href="#" className="mobile-nav-item">Internet</a>
                <a href="#" className="mobile-nav-item">Scienza</a>
                <a href="#" className="mobile-nav-item">Cultura</a>
                <a href="#" className="mobile-nav-item">Economia</a>
                <a href="#" className="mobile-nav-item">Sport</a>
                <a href="#" className="mobile-nav-item">Moda</a>
              </div>
              <div className="menu-column">
                <a href="#" className="mobile-nav-item">Libri</a>
                <a href="#" className="mobile-nav-item">Consumismi</a>
                <a href="#" className="mobile-nav-item">Storie/Idee</a>
                <a href="#" className="mobile-nav-item">Da Costa a Costa</a>
                <a href="#" className="mobile-nav-item">Ok Boomer!</a>
                <a href="#" className="mobile-nav-item">Media</a>
                <a href="#" className="mobile-nav-item">Europa</a>
                <a href="#" className="mobile-nav-item">Altrecose</a>
                <a href="#" className="mobile-nav-item">Cerca</a>
              </div>
            </div>
          </div>

          <div className="mobile-nav-section">
            <a href="#" className="mobile-nav-item podcast-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h-1V6c0-2.2-1.8-4-4-4S9 3.8 9 6v2H8c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"></path>
              </svg>
              PODCAST
            </a>
          </div>

          <div className="mobile-nav-section">
            <a href="#" className="mobile-nav-item newsletter-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              NEWSLETTER
            </a>
          </div>

          <div className="mobile-nav-section">
            <a href="#" className="mobile-nav-item favorites-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              I MIEI PREFERITI
            </a>
          </div>

          <div className="mobile-nav-section">
            <a href="#" className="mobile-nav-item shop-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              SHOP
            </a>
          </div>

          <div className="mobile-nav-section">
            <a href="#" className="mobile-nav-item calendar-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              CALENDARIO
            </a>
          </div>

          <div className="mobile-nav-section">
            <a href="#" className="mobile-nav-item account-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              AREA PERSONALE
            </a>
            <a href="#" className="mobile-nav-item login-link">Entra</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;