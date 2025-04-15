import React, { useState, useRef, useEffect } from 'react';
import { Article } from '../../../types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stories.css';

interface StoriesProps {
  stories: Article[];
}

const Stories: React.FC<StoriesProps> = ({
  stories
}) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const maxIndex = Math.max(0, stories.length - 6); // Show 6 items at once

  const handlePrev = () => {
    setCurrentItemIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? 0 : newIndex;
    });
  };

  const handleNext = () => {
    setCurrentItemIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex > maxIndex ? maxIndex : newIndex;
    });
  };

  useEffect(() => {
    if (trackRef.current) {
      const storyWidth = 180; // Width of each story card + margin
      trackRef.current.style.transform = `translateX(-${currentItemIndex * storyWidth}px)`;
    }
  }, [currentItemIndex]);

  return (
    <section className="stories">
      <header className="stories__header">
        <div className="stories__title-wrapper">
          <h2 className="stories__title">STORIE/IDEE</h2>
          <p className="stories__subtitle">Da leggere con calma, e da pensarci su</p>
        </div>
        <div className="stories__controls">
          <button 
            className="stories__control stories__control--prev" 
            onClick={handlePrev} 
            disabled={currentItemIndex === 0}
            aria-label="Previous stories"
          >
            <span className="stories__arrow stories__arrow--left" aria-hidden="true"></span>
          </button>
          <button 
            className="stories__control stories__control--next" 
            onClick={handleNext} 
            disabled={currentItemIndex >= maxIndex}
            aria-label="Next stories"
          >
            <span className="stories__arrow stories__arrow--right" aria-hidden="true"></span>
          </button>
        </div>
      </header>
      
      <div className="stories__container">
        <div 
          className="stories__track" 
          ref={trackRef}
          role="list"
          aria-live="polite"
        >
          {stories.map((story) => (
            <article key={story.id} className="stories__card" role="listitem">
              <figure className="stories__figure">
                <img 
                  src={story.imageUrl} 
                  alt="" 
                  className="stories__image"
                  aria-hidden="true" 
                />
              </figure>
              <h3 className="stories__card-title">
                <a href="#" className="stories__link">{story.title}</a>
              </h3>
              <p className="stories__excerpt">{story.summary}</p>
              {story.author && <address className="stories__author">di {story.author}</address>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;