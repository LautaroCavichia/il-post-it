// src/components/sections/NewsTicker.tsx
import React from 'react';
import { NewsItem } from '../../../types';
import './NewsTicker.css';

interface NewsTickerProps {
  items: NewsItem[];
}

const NewsTicker: React.FC<NewsTickerProps> = ({ items }) => {
  return (
    <div className="news-ticker">
      <div className="container">
        <div className="ticker-label">BITS</div>
        <div className="ticker-container">
          <div className="ticker-track">
            {items.map((item) => (
              <div key={item.id} className="ticker-item">
                <span className="ticker-timestamp">{item.timestamp}</span>
                <span className="ticker-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="ticker-controls">
          <button className="ticker-control prev">
            <span className="arrow-left"></span>
          </button>
          <button className="ticker-control next">
            <span className="arrow-right"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;