// src/components/common/ArticleCard.tsx
import React from 'react';
import { Article } from '../../../types';
import './ArticleCard.css';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'sidebar';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, variant = 'default' }) => {
  const isSidebar = variant === 'sidebar';

  return (
    <article className={`article-card ${isSidebar ? 'sidebar' : ''}`}>
      <div className="article-text">
        <h3 className={`article-title ${isSidebar ? 'sidebar' : ''}`}>
          <a href={`/article/${article.id}`}>{article.title}</a>
        </h3>
        {!isSidebar && (
          <p className="article-summary">{article.summary}</p>
        )}
      </div>
      <div className="article-image">
        <img src={article.imageUrl} alt={article.title} />
      </div>
    </article>
  );
};

export default ArticleCard;