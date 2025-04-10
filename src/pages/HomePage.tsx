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

  const customArticle = {
    ...featuredArticles[0],
    title: "Anche l'Unione Europea imporrà nuovi dazi contro gli Stati Uniti",
    summary: "Dopo quelli della Cina, in una serie di ritorsioni piuttosto preoccupanti: tutte le notizie su questa giornata turbolenta, man mano che arrivano"
  };

  return (
    <div className="homepage">
      <Header />
      <MainNavigation />
      <NewsTicker items={newsItems} />
      <main className="main-content">
        <div className="my-container">
          <div className="row">
          <FeaturedArticle article={customArticle} />
            <div className="col-md-8">
              <div className="secondary-articles">
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