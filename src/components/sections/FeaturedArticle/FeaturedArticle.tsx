import React from 'react';
import { Article } from '../../../types';
import './FeaturedArticle.css';

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <article className="featured-article">
      <div className="featured-article__wrapper">
        <section className="featured-article__content" aria-labelledby="featured-article-title">
          <header className="featured-article__header">
            <span className="featured-article__tag" aria-label="Live">LIVE</span>
            <h1 id="featured-article-title" className="featured-article__title">{article.title}</h1>
          </header>

          <p className="featured-article__summary">{article.summary}</p>

          <section className="featured-article__updates">
            <h2 className="featured-article__updates-title">Gli ultimi aggiornamenti</h2>
            <ul className="featured-article__updates-list">
              <li className="featured-article__updates-item">
                <span className="featured-article__bullet" aria-hidden="true"></span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              </li>
              <li className="featured-article__updates-item">
                <span className="featured-article__bullet" aria-hidden="true"></span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ipsa.</span>
              </li>
            </ul>
          </section>
        </section>

        <figure className="featured-article__image">
          <img src={article.imageUrl} alt={article.title} />
        </figure>
      </div>
    </article>
  );
};

export default FeaturedArticle;