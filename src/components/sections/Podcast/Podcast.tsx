import React from 'react';
import { Podcast } from '../../../types';
import './Podcast.css';



interface PodcastListProps {
  podcasts: Podcast[];
}

const PodcastItem: React.FC<{ podcast: Podcast; featured?: boolean }> = ({ podcast, featured = false }) => {
    if (featured) {
      return (
        <div className="podcast-item podcast-item-featured">
          <div className="podcast-date">{podcast.date}</div>
          <div className="podcast-content-featured">
            {podcast.imageUrl && (
              <div className="podcast-image-featured">
                <img src={podcast.imageUrl} alt={podcast.title} />
              </div>
            )}
            <div className="podcast-info-featured">
              <h3 className="podcast-title">{podcast.title}</h3>
              <div className="podcast-duration">{podcast.duration} min</div>
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div className="podcast-item">
        <div className="podcast-date">{podcast.date}</div>
        <div className="podcast-content">
          <div className="podcast-info">
            <h3 className="podcast-title">{podcast.title}</h3>
            <div className="podcast-duration">{podcast.duration} min</div>
          </div>
          {podcast.imageUrl && (
            <div className="podcast-image">
              <img src={podcast.imageUrl} alt={podcast.title} />
            </div>
          )}
        </div>
      </div>
    );
  };

const PodcastList: React.FC<PodcastListProps> = ({ podcasts }) => {
  return (
    <div className="podcast-container">
      <div className="podcast-header">
        <h2>PODCAST</h2>
        <div className="view-all">
          <span>Vedi tutti</span>
          <span className="arrow">›</span>
        </div>
      </div>
      <div className="featured-podcast">
        {podcasts[0] && (
          <PodcastItem podcast={podcasts[0]} featured={true}/>
        )}
        </div>
      <div className="podcast-list">
        {podcasts.map((podcast) => (
          <PodcastItem key={podcast.id} podcast={podcast} />
        ))}
      </div>
    </div>
  );
};

export default PodcastList;