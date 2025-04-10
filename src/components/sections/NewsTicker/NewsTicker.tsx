// src/components/sections/NewsTicker.tsx
import React, { useState, useRef, useEffect } from 'react';
import './NewsTicker.css';

interface NewsItem {
  id: string | number;
  timestamp: string;
  text: string;
}

interface NewsTickerProps {
  items: NewsItem[];
}

const NewsTicker: React.FC<NewsTickerProps> = ({ items }) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentItemIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? items.length - 1 : newIndex;
    });
  };

  const handleNext = () => {
    setCurrentItemIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= items.length ? 0 : newIndex;
    });
  };

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentItemIndex * 300}px)`;
    }
  }, [currentItemIndex]);

  return (
    <div className="news-ticker">
      <div className="container">
        <div className="ticker-header">
          <div className="ticker-label">BITS</div>
          <div className="ticker-controls">
            <button className="ticker-control prev" onClick={handlePrev} aria-label="Previous news">
              <span className="arrow-left"></span>
            </button>
            <button className="ticker-control next" onClick={handleNext} aria-label="Next news">
              <span className="arrow-right"></span>
            </button>
          </div>
        </div>
        <div className="ticker-container">
          <div className="ticker-track" ref={trackRef}>
            {items.map((item) => (
              <div key={item.id} className="ticker-item">
                <div className="ticker-content">
                  <span className="ticker-timestamp">{item.timestamp}</span>
                  <span className="ticker-text">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;