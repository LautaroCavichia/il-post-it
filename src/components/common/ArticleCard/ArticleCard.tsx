// src/components/common/ArticleCard.tsx
import React from 'react';
import { Article } from '../../../types';
import './ArticleCard.css';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'compact' | 'sidebar';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  article, 
  variant = 'default' 
}) => {
  return (
    <article className={`article-card article-card-${variant}`}>
      {(variant !== 'compact') && (
        <div className="article-image">
          <img src={article.imageUrl} alt={article.title} />
        </div>
      )}
      
      <div className="article-content">
        {article.category && (
          <div className="article-category">{article.category}</div>
        )}
        
        <h3 className="article-title">
          <a href={`/article/${article.id}`}>{article.title}</a>
        </h3>
        
        {(variant === 'featured' || variant === 'default') && (
          <div className="article-summary">{article.summary}</div>
        )}
        
        <div className="article-meta">
          {article.timestamp && (
            <span className="article-timestamp">{article.timestamp}</span>
          )}
          
          {article.author && (
            <span className="article-author">
              di {article.author}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;