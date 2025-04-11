// src/components/sections/Sidebar.tsx
import React, { useState } from 'react';
import { Article } from '../../../types';
import './Sidebar.css';

interface SidebarProps {
  highlightedArticles: Article[];
  flashNews: Article[];
}

const Sidebar: React.FC<SidebarProps> = ({
  highlightedArticles,
  flashNews
}) => {
  const [highlightedPage, setHighlightedPage] = useState(0);
  const [flashPage, setFlashPage] = useState(0);
  
  const articlesPerPage = 3;
  const maxHighlightedPages = Math.ceil(highlightedArticles.length / articlesPerPage);
  const maxFlashPages = Math.ceil(flashNews.length / articlesPerPage);

  const nextHighlighted = () => {
    setHighlightedPage((prev) => (prev + 1) % maxHighlightedPages);
  };

  const prevHighlighted = () => {
    setHighlightedPage((prev) => (prev === 0 ? maxHighlightedPages - 1 : prev - 1));
  };

  const nextFlash = () => {
    setFlashPage((prev) => (prev + 1) % maxFlashPages);
  };

  const prevFlash = () => {
    setFlashPage((prev) => (prev === 0 ? maxFlashPages - 1 : prev - 1));
  };

  const getPageArticles = (articles: Article[], page: number) => {
    const start = page * articlesPerPage;
    const end = start + articlesPerPage;
    return articles.slice(start, end);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-section highlighted">
        <div className="sidebar-header">
          <h4 className="sidebar-title">IN EVIDENZA</h4>
          <div className="sidebar-controls">
            <button className="sidebar-control prev" onClick={prevHighlighted}>
              <span className="arrow-left"></span>
            </button>
            <button className="sidebar-control next" onClick={nextHighlighted}>
              <span className="arrow-right"></span>
            </button>
          </div>
        </div>
        <div className="sidebar-content">
          {getPageArticles(highlightedArticles, highlightedPage).map((article) => (
            <div key={article.id} className="article-card">
              <div className="article-text">
                <h3 className="article-title">{article.title}</h3>
              </div>
              <div className="article-image">
                <img src={article.imageUrl} alt={article.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="sidebar-section flashes">
        <div className="sidebar-header">
          <h4 className="sidebar-title">FLASHES</h4>
          <div className="sidebar-controls">
            <button className="sidebar-control prev" onClick={prevFlash}>
              <span className="arrow-left"></span>
            </button>
            <button className="sidebar-control next" onClick={nextFlash}>
              <span className="arrow-right"></span>
            </button>
          </div>
        </div>
        <div className="sidebar-content">
          {getPageArticles(flashNews, flashPage).map((article) => (
            <div key={article.id} className="article-card">
              <div className="article-text">
                <h3 className="article-title">{article.title}</h3>
              </div>
              <div className="article-image">
                <img src={article.imageUrl} alt={article.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;