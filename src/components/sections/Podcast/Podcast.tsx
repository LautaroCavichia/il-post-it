import React from 'react';
import { Podcast } from '../../../types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Podcast.css';
import { getMockAlt } from '../../../data/mockDataGenerator';

interface PodcastListProps {
  podcasts: Podcast[];
}

const PodcastItem: React.FC<{ podcast: Podcast; featured?: boolean }> = ({ podcast, featured = false }) => {
  if (featured) {
    return (
      <article className="podcast-item podcast-item--featured">
        <time className="podcast-item__date">{podcast.date}</time>
        <div className="podcast-item__content podcast-item__content--featured">
          {podcast.imageUrl && (
            <figure className="podcast-item__figure podcast-item__figure--featured">
              <img 
                src={podcast.imageUrl} 
                alt={getMockAlt(podcast.title)} 
                className="podcast-item__image"
              />
            </figure>
          )}
          <div className="podcast-item__info podcast-item__info--featured">
            <h3 className="podcast-item__title">{podcast.title}</h3>
            <div className="podcast-item__duration">
              <time dateTime={`PT${podcast.duration}M`}>{podcast.duration} min</time>
            </div>
          </div>
        </div>
      </article>
    );
  }
  
  return (
    <article className="podcast-item">
      <time className="podcast-item__date">{podcast.date}</time>
      <div className="podcast-item__content">
        <div className="podcast-item__info">
          <h3 className="podcast-item__title">{podcast.title}</h3>
          <div className="podcast-item__duration">
            <time dateTime={`PT${podcast.duration}M`}>{podcast.duration} min</time>
          </div>
        </div>
        {podcast.imageUrl && (
          <figure className="podcast-item__figure">
            <img 
              src={podcast.imageUrl} 
              alt={podcast.title} 
              className="podcast-item__image"
            />
          </figure>
        )}
      </div>
    </article>
  );
};

const PodcastList: React.FC<PodcastListProps> = ({ podcasts }) => {
  const featuredPodcast = podcasts[2];
  const regularPodcasts = podcasts.slice(0);

  return (
    <section className="podcast">
      <header className="podcast__header">
        <h2 className="podcast__heading">PODCAST</h2>
        <a href="#" className="podcast__view-all">
          <span>Vedi tutti</span>
          <span className="podcast__arrow" aria-hidden="true">›</span>
        </a>
      </header>
      
      {featuredPodcast && (
        <div className="podcast__featured">
          <PodcastItem podcast={featuredPodcast} featured={true} />
        </div>
      )}
      
      <div className="podcast__list">
        {regularPodcasts.map((podcast) => (
          <PodcastItem key={podcast.id} podcast={podcast} />
        ))}
      </div>
    </section>
  );
};

export default PodcastList;