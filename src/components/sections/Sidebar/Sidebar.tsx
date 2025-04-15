import React, { useState, useEffect } from 'react';
import { Article } from '../../../types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.css';
import { getMockAlt } from '../../../data/mockDataGenerator';

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
  const [highlightedTransitioning, setHighlightedTransitioning] = useState(false);
  const [flashTransitioning, setFlashTransitioning] = useState(false);
  
  const articlesPerPage = 3;
  const maxHighlightedPages = Math.ceil(highlightedArticles.length / articlesPerPage);
  const maxFlashPages = Math.ceil(flashNews.length / articlesPerPage);

  const nextHighlighted = () => {
    setHighlightedTransitioning(true);
    setTimeout(() => {
      setHighlightedPage((prev) => (prev + 1) % maxHighlightedPages);
      setTimeout(() => {
        setHighlightedTransitioning(false);
      }, 50);
    }, 300);
  };

  const prevHighlighted = () => {
    setHighlightedTransitioning(true);
    setTimeout(() => {
      setHighlightedPage((prev) => (prev === 0 ? maxHighlightedPages - 1 : prev - 1));
      setTimeout(() => {
        setHighlightedTransitioning(false);
      }, 50);
    }, 300);
  };

  const nextFlash = () => {
    setFlashTransitioning(true);
    setTimeout(() => {
      setFlashPage((prev) => (prev + 1) % maxFlashPages);
      setTimeout(() => {
        setFlashTransitioning(false);
      }, 50);
    }, 300);
  };

  const prevFlash = () => {
    setFlashTransitioning(true);
    setTimeout(() => {
      setFlashPage((prev) => (prev === 0 ? maxFlashPages - 1 : prev - 1));
      setTimeout(() => {
        setFlashTransitioning(false);
      }, 50);
    }, 300);
  };

  const getPageArticles = (articles: Article[], page: number) => {
    const start = page * articlesPerPage;
    const end = start + articlesPerPage;
    return articles.slice(start, end);
  };

  return (
    <aside className="sidebar">
      <section className="sidebar__section sidebar__section--highlighted">
        <header className="sidebar__header">
          <h2 className="sidebar__title">IN EVIDENZA</h2>
          <div className="sidebar__controls">
            <button 
              className="sidebar__control sidebar__control--prev" 
              onClick={prevHighlighted}
              aria-label="Previous highlighted articles"
            >
              <span className="sidebar__arrow sidebar__arrow--left" aria-hidden="true"></span>
            </button>
            <button 
              className="sidebar__control sidebar__control--next" 
              onClick={nextHighlighted}
              aria-label="Next highlighted articles"
            >
              <span className="sidebar__arrow sidebar__arrow--right" aria-hidden="true"></span>
            </button>
          </div>
        </header>
        <div className={`sidebar__content ${highlightedTransitioning ? 'sidebar__content--transitioning' : ''}`}>
          {getPageArticles(highlightedArticles, highlightedPage).map((article) => (
            <article key={article.id} className="sidebar__article">
              <div className="sidebar__article-text">
                <h3 className="sidebar__article-title">
                  <a href="#" className="sidebar__article-link">{article.title}</a>
                </h3>
              </div>
              <figure className="sidebar__article-figure">
                <img 
                  src={article.imageUrl} 
                  alt={getMockAlt(article.title)}
                  className="sidebar__article-image"
                />
              </figure>
            </article>
          ))}
        </div>
      </section>
      
      <section className="sidebar__section sidebar__section--flashes">
        <header className="sidebar__header">
          <h2 className="sidebar__title">FLASHES</h2>
          <div className="sidebar__controls">
            <button 
              className="sidebar__control sidebar__control--prev" 
              onClick={prevFlash}
              aria-label="Previous flash news"
            >
              <span className="sidebar__arrow sidebar__arrow--left" aria-hidden="true"></span>
            </button>
            <button 
              className="sidebar__control sidebar__control--next" 
              onClick={nextFlash}
              aria-label="Next flash news"
            >
              <span className="sidebar__arrow sidebar__arrow--right" aria-hidden="true"></span>
            </button>
          </div>
        </header>
        <div className={`sidebar__content ${flashTransitioning ? 'sidebar__content--transitioning' : ''}`}>
          {getPageArticles(flashNews, flashPage).map((article) => (
            <article key={article.id} className="sidebar__article">
              <div className="sidebar__article-text">
                <h3 className="sidebar__article-title">
                  <a href="#" className="sidebar__article-link">{article.title}</a>
                </h3>
              </div>
              <figure className="sidebar__article-figure">
                <img 
                  src={article.imageUrl} 
                  alt={getMockAlt(article.title)}
                  className="sidebar__article-image"
                />
              </figure>
            </article>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;