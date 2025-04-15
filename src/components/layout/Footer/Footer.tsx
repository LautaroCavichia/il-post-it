// src/components/layout/Footer/Footer.tsx
import React from 'react';
import './Footer.css';

interface FooterProps {
  // Optional props for customization
  subscribeButtonText?: string;
}

const Footer: React.FC<FooterProps> = ({
  subscribeButtonText = "Abbonati"
}) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <a href="/" aria-label="Il Post home page">
            <img src="/logo-s.png" alt="Il Post" className="footer__logo-image" />
          </a>
        </div>
        
        <div className="footer__middle">
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <a href="/chi-siamo" className="footer__nav-link">Chi Siamo</a>
              </li>
              <li className="footer__nav-item">
                <a href="/privacy" className="footer__nav-link">Privacy</a>
              </li>
              <li className="footer__nav-item">
                <a href="/preferenze" className="footer__nav-link">Gestisci le preferenze</a>
              </li>
              <li className="footer__nav-item">
                <a href="/condizioni" className="footer__nav-link">Condizioni d'uso</a>
              </li>
              <li className="footer__nav-item">
                <a href="/pubblicita" className="footer__nav-link">Pubblicità</a>
              </li>
            </ul>
          </nav>
          <div className="footer__info">
            <small className="footer__copyright">
              Il Post è una testata registrata presso il Tribunale di Milano, 419 del 28 settembre 2009 - ISSN 2610-9980
            </small>
          </div>
        </div>
        
        <div className="footer__subscribe">
          <button
            className="footer__subscribe-button"
            type="button"
            aria-label={subscribeButtonText}
          >
            {subscribeButtonText}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;