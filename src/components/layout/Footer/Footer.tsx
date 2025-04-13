// src/components/layout/Footer.tsx
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
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/logo-s.png" alt="Il Post" className="footer-logo-image" />
        </div>
        
        <div className="footer-links">
          <a href="/chi-siamo" className="footer-link">Chi Siamo</a>
          <a href="/privacy" className="footer-link">Privacy</a>
          <a href="/preferenze" className="footer-link">Gestisci le preferenze</a>
          <a href="/condizioni" className="footer-link">Condizioni d'uso</a>
          <a href="/pubblicita" className="footer-link">Pubblicità</a>
        </div>
        
        <div className="footer-info">
          <span className="footer-copyright">
            Il Post è una testata registrata presso il Tribunale di Milano, 419 del 28 settembre 2009 - ISSN 2610-9980
          </span>
        </div>
        
        <div className="footer-subscribe">
          <button className="subscribe-button">{subscribeButtonText}</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;