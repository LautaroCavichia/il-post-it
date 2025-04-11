import React from 'react';
import { Article, NewsItem } from '../types';
import { generateMockArticles, generateMockPodcasts, generateNewsItems } from '../data/mockDataGenerator';
import Header from '../components/layout/Header/Header';
import MainNavigation from '../components/layout/MainNavigation/MainNavigation';
import Bits from '../components/sections/Bits/Bits';
import FeaturedArticle from '../components/sections/FeaturedArticle/FeaturedArticle';
import ArticleGrid from '../components/sections/ArticleGrid/ArticleGrid';
import Sidebar from '../components/sections/Sidebar/Sidebar';
import './HomePage.css';
import PodcastList from '../components/sections/Podcast/Podcast';
import Virgolette from '../components/sections/Virgolette/Virgolette';

const HomePage: React.FC = () => {
  // In a real app, this would come from an API
  const featuredArticles = generateMockArticles(5);
  const newsItems = generateNewsItems(8);
  const sidebarArticles = generateMockArticles(6);
  const flashNews = generateMockArticles(6);
  const podcastEpisodes = generateMockPodcasts(5);

  const customArticle = {
    ...featuredArticles[0],
    title: "Anche l'Unione Europea imporrà nuovi dazi contro gli Stati Uniti",
    summary: "Dopo quelli della Cina, in una serie di ritorsioni piuttosto preoccupanti: tutte le notizie su questa giornata turbolenta, man mano che arrivano"
  };

  return (
    <div className="homepage">
      <Header />
      <MainNavigation />
      <Bits items={newsItems} />
      <main className="main-content">
        <div className="my-container">
          <div className="row">
          <FeaturedArticle article={customArticle} />
            <div className="col-md-8">
              <div className="secondary-articles">
                <ArticleGrid articles={featuredArticles} />
              </div>
              <Virgolette/>
              <div className="secondary-articles">
                <ArticleGrid articles={featuredArticles} />
              </div>
            </div>
            <div className="col-md-4">
              <Sidebar
                highlightedArticles={sidebarArticles}
                flashNews={flashNews}

              />
              <PodcastList
                podcasts={podcastEpisodes}
              />

            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;