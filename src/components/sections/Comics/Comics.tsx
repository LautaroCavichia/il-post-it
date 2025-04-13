// src/components/sections/Comics.tsx
import React, { useState } from 'react';
import { Article } from '../../../types';
import './Comics.css';

interface ComicsProps {
  comics: Article[];
  title?: string;
}

const Comics: React.FC<ComicsProps> = ({
  comics,
  title = "PEANUTS"
}) => {
  const [page, setPage] = useState(0);
  const comicsPerPage = 1;
  const maxPages = Math.ceil(comics.length / comicsPerPage);

  const nextPage = () => {
    setPage((prev) => (prev + 1) % maxPages);
  };

  const prevPage = () => {
    setPage((prev) => (prev === 0 ? maxPages - 1 : prev - 1));
  };

  const getCurrentComic = () => {
    return comics[page];
  };

  const comic = getCurrentComic();

  return (
    <section className="comics-section">
      <div className="comics-header">
        <h3 className="comics-title">{title}</h3>
        <div className="comics-controls">
          <button className="comics-control prev" onClick={prevPage}>
            <span className="arrow-left"></span>
          </button>
          <button className="comics-control next" onClick={nextPage}>
            <span className="arrow-right"></span>
          </button>
        </div>
      </div>
      <div className="comics-content">
        <div className="comic-strip">
          <img src={comic?.imageUrl} alt={comic?.title} className="comic-image" />
        </div>
        <div className="more-comics">
          <div className="more-comics-button">
            <span>LE ALTRE STRISCE</span>
            <button className="more-button">
              <span className="arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comics;