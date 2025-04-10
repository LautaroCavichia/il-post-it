// src/components/sections/FeaturedArticle.tsx
import React from 'react';
import { Article } from '../../../types';
import './FeaturedArticle.css';

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <div className="featured-article">
      <div className="featured-tag">LIVE</div>
      <h1 className="featured-title">{article.title}</h1>
      <div className="featured-summary">{article.summary}</div>
      <div className="featured-image">
        <img src={article.imageUrl} alt={article.title} />
      </div>
    </div>
  );
};

export default FeaturedArticle;