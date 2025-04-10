// src/components/sections/Sidebar.tsx
import React from 'react';
import { Article } from '../../../types';
import ArticleCard from '../../common/ArticleCard/ArticleCard';
import './Sidebar.css';

interface SidebarProps {
  highlightedArticles: Article[];
  flashNews: Article[];
}

const Sidebar: React.FC<SidebarProps> = ({ 
  highlightedArticles,
  flashNews
}) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-section highlighted">
        <div className="sidebar-header">
          <h4 className="sidebar-title">IN EVIDENZA</h4>
          <div className="sidebar-controls">
            <button className="sidebar-control prev">
              <span className="arrow-left"></span>
            </button>
            <button className="sidebar-control next">
              <span className="arrow-right"></span>
            </button>
          </div>
        </div>
        
        <div className="sidebar-content">
          {highlightedArticles.map(article => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              variant="sidebar" 
            />
          ))}
        </div>
      </div>
      
      <div className="sidebar-section flashes">
        <div className="sidebar-header">
          <h4 className="sidebar-title">FLASHES</h4>
          <div className="sidebar-controls">
            <button className="sidebar-control prev">
              <span className="arrow-left"></span>
            </button>
            <button className="sidebar-control next">
              <span className="arrow-right"></span>
            </button>
          </div>
        </div>
        
        <div className="sidebar-content">
          {flashNews.map(article => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              variant="sidebar" 
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;