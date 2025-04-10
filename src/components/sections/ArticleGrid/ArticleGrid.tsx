// src/components/sections/ArticleGrid.tsx
import React from 'react';
import { Article, ArticleLayoutType } from '../../../types';
import './ArticleGrid.css';
import ArticleCard from '../../common/ArticleCard/ArticleCard';

interface ArticleGridProps {
  articles: Article[];
  layout?: ArticleLayoutType;
}

const ArticleGrid: React.FC<ArticleGridProps> = ({ 
  articles,
  layout = 'grid'
}) => {
  // Determine which variant to use for article cards based on layout
  const getVariant = (index: number) => {
    if (layout === 'featured' && index === 0) return 'featured';
    if (layout === 'list') return 'compact';
    return 'default';
  };

  return (
    <div className={`article-grid article-grid-${layout}`}>
      {articles.map((article, index) => (
        <div key={article.id} className="article-grid-item">
          <ArticleCard 
            article={article} 
            variant={getVariant(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default ArticleGrid;