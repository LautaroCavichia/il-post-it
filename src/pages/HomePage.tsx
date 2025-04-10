import React from 'react';
import { Article, NewsItem } from '../types';
import { generateMockArticles, generateNewsItems } from '../data/mockDataGenerator';
import Header from '../components/layout/Header/Header';
import MainNavigation from '../components/layout/MainNavigation/MainNavigation';
import NewsTicker from '../components/sections/NewsTicker/NewsTicker';
import FeaturedArticle from '../components/sections/FeaturedArticle/FeaturedArticle';
import ArticleGrid from '../components/sections/ArticleGrid/ArticleGrid';
import Sidebar from '../components/sections/Sidebar/Sidebar';
import './HomePage.css';

const HomePage: React.FC = () => {
  // In a real app, this would come from an API
  const featuredArticles = generateMockArticles(5);
  const newsItems = generateNewsItems(8);
  const sidebarArticles = generateMockArticles(4);
  const flashNews = generateMockArticles(3);

  return (
    <div className="homepage">
      <Header />
      <MainNavigation />
      <NewsTicker items={newsItems} />
      
      <main className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <FeaturedArticle article={featuredArticles[0]} />
              
              <div className="live-section">
                <h2>LIVE</h2>
                <ArticleGrid articles={featuredArticles.slice(1, 4)} />
              </div>
              
              <div className="updates-section">
                <h3>Gli ultimi aggiornamenti</h3>
                <ArticleGrid articles={featuredArticles.slice(2, 5)} layout="list" />
              </div>
              
              <div className="secondary-articles">
                {/* Section for additional articles */}
                <ArticleGrid articles={featuredArticles} layout="columns" />
              </div>
            </div>
            
            <div className="col-md-4">
              <Sidebar 
                highlightedArticles={sidebarArticles} 
                flashNews={flashNews} 
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;