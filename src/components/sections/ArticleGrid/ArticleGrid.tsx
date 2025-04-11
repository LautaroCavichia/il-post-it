// src/components/sections/ArticleGrid.tsx
import React from 'react';
import { Article } from '../../../types';
import './ArticleGrid.css';
import ArticleCard from '../../common/ArticleCard/ArticleCard';

interface ArticleGridProps {
  articles: Article[];
}

const ArticleGrid: React.FC<ArticleGridProps> = ({ articles }) => {
  return (
    <div className="article-grid">
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleGrid;