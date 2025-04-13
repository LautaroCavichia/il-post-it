// src/components/sections/Stories.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Article } from '../../../types';
import './Stories.css';

interface StoriesProps {
  stories: Article[];
}

const Stories: React.FC<StoriesProps> = ({
  stories
}) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  
  const handlePrev = () => {
    setCurrentItemIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? 0 : newIndex;
    });
  };
  
  const handleNext = () => {
    setCurrentItemIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      const maxIndex = Math.max(0, stories.length - 6); // Show 6 items at once
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
    <section className="stories-section">
      <div className="stories-header">
        <div className="stories-title-container">
          <h3 className="stories-title">STORIE/IDEE</h3>
          <div className="stories-subtitle">Da leggere con calma, e da pensarci su</div>
        </div>
        <div className="stories-controls">
          {currentItemIndex > 0 && (
            <button className="stories-control prev" onClick={handlePrev}>
              <span className="arrow-left"></span>
            </button>
          )}
          <button className="stories-control next" onClick={handleNext}>
            <span className="arrow-right"></span>
          </button>
        </div>
      </div>
      <div className="stories-container">
        <div className="stories-track" ref={trackRef}>
          {stories.map((story) => (
            <div key={story.id} className="story-card">
              <div className="story-image">
                <img src={story.imageUrl} alt={story.title} />
              </div>
              <h4 className="story-title">{story.title}</h4>
              <p className="story-excerpt">{story.summary}</p>
              {story.author && <div className="story-author">di {story.author}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;