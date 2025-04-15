// src/components/sections/OtherStories.tsx
import React from 'react';
import { Article } from '../../../types';
import './OtherStories.css';

interface OtherStoriesProps {
  stories: Article[];
  title?: string;
}

const OtherStories: React.FC<OtherStoriesProps> = ({
  stories,
  title = "ALTRE STORIE"
}) => {
  // Check if we have enough stories for the layout
  if (stories.length < 8) {
    console.warn('OtherStories component requires at least 8 stories');
  }

  // Get the first story for the featured spot (with image)
  const featuredStory = stories[0] || null;

  // Get the rest of the stories for the right columns
  const rightColumnStories = stories.slice(1, 8) || [];

  return (
    <section className="other-stories">
      <div className="other-stories__header">
        <h3 className="other-stories__title">{title}</h3>
      </div>

      <div className="other-stories__content">
        <div className="other-stories__featured">
          {featuredStory && (
            <>
              <h4 className="other-stories__featured-title">{featuredStory.title}</h4>
              <p className="other-stories__featured-excerpt">{featuredStory.summary}</p>
              <div className="other-stories__featured-image">
                <img src={featuredStory.imageUrl} alt={featuredStory.title} />
              </div>
            </>
          )}
        </div>

        <div className="other-stories__list">
          <div className="other-stories__column">
            {rightColumnStories.slice(0, 3).map((story) => (
              <div key={story.id} className="other-stories__item">
                <h4 className="other-stories__item-title">{story.title}</h4>
                <p className="other-stories__item-excerpt">{story.summary}</p>
              </div>
            ))}
          </div>

          <div className="other-stories__column">
            {rightColumnStories.slice(3, 7).map((story, index) => (
              <div key={story.id} className="other-stories__item">
                <h4 className="other-stories__item-title">{story.title}</h4>
                {index < 3 && (
                  <p className="other-stories__item-excerpt">{story.summary}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherStories;