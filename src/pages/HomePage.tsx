import React from 'react';
import { Article, NewsItem } from '../types';
import { generateMockArticles, generateMockPhotos, generateMockPodcasts, generateNewsItems } from '../data/mockDataGenerator';
import Header from '../components/layout/Header/Header';
import MainNavigation from '../components/layout/MainNavigation/MainNavigation';
import Bits from '../components/sections/NewsTicker/NewsTicker';
import FeaturedArticle from '../components/sections/FeaturedArticle/FeaturedArticle';
import ArticleGrid from '../components/sections/ArticleGrid/ArticleGrid';
import Sidebar from '../components/sections/Sidebar/Sidebar';
import './HomePage.css';
import PodcastList from '../components/sections/Podcast/Podcast';
import Virgolette from '../components/sections/Virgolette/Virgolette';
import Blogs from '../components/sections/Blogs/Blogs';
import Stories from '../components/sections/Stories/Stories';
import Comics from '../components/sections/Comics/Comics';
import OtherStories from '../components/sections/OtherStories/OtherStories';
import Photographs from '../components/sections/Photographs/Photographs';
import Footer from '../components/layout/Footer/Footer';

const HomePage: React.FC = () => {
  const featuredArticle = generateMockArticles(1)[0];
  const mockArticles = generateMockArticles(5);
  const mockArticles2 = generateMockArticles(5);
  const mockComics = generateMockArticles(1);
  const mockComics2 = generateMockArticles(1);
  const storiesArticles = generateMockArticles(10);
  const newsItems = generateNewsItems(8);
  const sidebarArticles = generateMockArticles(8);
  const flashNews = generateMockArticles(8);
  const podcastEpisodes = generateMockPodcasts(3);
  const photographs = generateMockPhotos(7);


  return (
    <div className="homepage">
      <Header />
      <MainNavigation />
      <main className="main-content">
        <div className="my-container">
          <Bits items={newsItems} />
          <div className="row">
            <FeaturedArticle article={featuredArticle} />
            <div className="col-lg-8">
              <div className="secondary-articles">
                <ArticleGrid articles={mockArticles} />
              </div>
              <Virgolette />
              <div className="secondary-articles">
                <ArticleGrid articles={mockArticles2} />
              </div>
            </div>

            {/* Desktop sidebar layout */}
            <div className="col-lg-4 d-none d-lg-block">
              <Sidebar
                highlightedArticles={sidebarArticles}
                flashNews={flashNews}
              />
              <PodcastList
                podcasts={podcastEpisodes}
              />
              <Blogs
                highlightedBlogs={sidebarArticles}
              />
            </div>

            {/* Mobile sidebar layout (2x2 grid) */}
            <div className="col-12 d-block d-lg-none">
              <div className="row sidebar-mobile-grid">
                <div className="col-6">
                  <Sidebar
                    highlightedArticles={sidebarArticles}
                    flashNews={flashNews}
                  />
                </div>
                <div className="col-6">
                  <PodcastList
                    podcasts={podcastEpisodes}
                  />
                </div>
              </div>
            </div>

            <Stories
              stories={storiesArticles}
            />
            <Comics
              comics={mockComics}
              title='PEANUTS'
              subtitle='LE ALTRE STRISCE'
            />
            <Comics
              comics={mockComics2}
              title="LE PRIME PAGINE DI OGGI"
              subtitle='TUTTE'
            />
            <OtherStories
              stories={storiesArticles}
              title="ALTRE STORIE"
            />
            <Photographs
              photos={photographs}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;