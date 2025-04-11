// src/components/sections/FeaturedArticle/FeaturedArticle.tsx
import React from 'react';
import { Article } from '../../../types';
import './FeaturedArticle.css';

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <div className="featured-article">
      <div className="featured-content-wrapper">
        <div className="featured-content">
          <div className="featured-tag">LIVE</div>
          <h1 className="featured-title">{article.title}</h1>
          <div className="featured-summary">{article.summary}</div>
          
          <div className="updates-section">
            <h2 className="updates-title">Gli ultimi aggiornamenti</h2>
            <ul className="updates-list">
              <li>
                <span className="bullet"></span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              </li>
              <li>
                <span className="bullet"></span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ipsa.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="featured-image">
          <img src={article.imageUrl} alt={article.title} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;