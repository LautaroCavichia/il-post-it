// src/components/common/ArticleCard/ArticleCard.tsx
import React from 'react';
import { Article } from '../../../types';
import './ArticleCard.css';
import { getMockAlt } from '../../../data/mockDataGenerator';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'sidebar';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  article, 
  variant = 'default' 
}) => {
  const isSidebar = variant === 'sidebar';
  
  return (
    <article 
      className={`article-card ${isSidebar ? 'article-card--sidebar' : ''}`}
      aria-labelledby={`article-title-${article.id}`}
    >
      <div className="article-card__text">
        <h3 
          id={`article-title-${article.id}`}
          className={`article-card__title ${isSidebar ? 'article-card__title--sidebar' : ''}`}
        >
          <a 
            href={`/article/${article.id}`}
            className="article-card__link"
          >
            {article.title}
          </a>
        </h3>
        {!isSidebar && (
          <p className="article-card__summary">{article.summary}</p>
        )}
      </div>
      <figure className="article-card__image-container">
        <img 
          src={article.imageUrl} 
          alt={getMockAlt(article.title)}
          className="article-card__image"
        />
      </figure>
    </article>
  );
};

export default ArticleCard;