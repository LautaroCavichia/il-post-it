// src/components/sections/NewsTicker/NewsTicker.tsx
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
    <section className="news-ticker" aria-label="Breaking News">
      <div className="news-ticker__container">
        <header className="news-ticker__header">
          <div className="news-ticker__label">BITS</div>
          <div className="news-ticker__controls">
            {items.length > 1 && (
              <button 
                className="news-ticker__control news-ticker__control--prev" 
                onClick={handlePrev} 
                aria-label="Previous news item"
                type="button"
              >
                <span className="news-ticker__arrow news-ticker__arrow--left" aria-hidden="true"></span>
              </button>
            )}
            <button 
              className="news-ticker__control news-ticker__control--next" 
              onClick={handleNext} 
              aria-label="Next news item"
              type="button"
            >
              <span className="news-ticker__arrow news-ticker__arrow--right" aria-hidden="true"></span>
            </button>
          </div>
        </header>
        
        <div className="news-ticker__content">
          <div 
            className="news-ticker__track" 
            ref={trackRef}
            aria-live="polite"
          >
            {items.map((item, index) => (
              <div 
                key={item.id} 
                className="news-ticker__item"
                aria-hidden={index !== currentItemIndex}
              >
                <div className="news-ticker__item-content">
                  <time className="news-ticker__timestamp" dateTime={item.timestamp}>
                    {item.timestamp}
                  </time>
                  <span className="news-ticker__text">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsTicker;