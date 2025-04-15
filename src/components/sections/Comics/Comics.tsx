// src/components/sections/Comics/Comics.tsx
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
  const [currentPage, setCurrentPage] = useState(0);
  const comicsPerPage = 1;
  const maxPages = Math.ceil(comics.length / comicsPerPage);
  
  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % maxPages);
  };
  
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev === 0 ? maxPages - 1 : prev - 1));
  };
  
  const currentComic = comics[currentPage];
  
  return (
    <section className="comics" aria-labelledby="comics-heading">
      <header className="comics__header">
        <h2 id="comics-heading" className="comics__title">{title}</h2>
      </header>
      
      <div className="comics__content">
        <div className="comics__strip">
          {currentComic && (
            <figure className="comics__figure">
              <img 
                src={currentComic.imageUrl} 
                alt={`Comic strip: ${currentComic.title}`} 
                className="comics__image" 
              />
              <figcaption className="visually-hidden">{currentComic.title}</figcaption>
            </figure>
          )}
        </div>
        
        <div className="comics__more">
          <div className="comics__more-content">
            <span className="comics__more-text">LE ALTRE STRISCE</span>
            <button 
              className="comics__more-button" 
              type="button"
              aria-label="View all comic strips"
            >
              <span className="comics__arrow comics__arrow--right" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="comics__pagination" aria-live="polite">
        <span className="visually-hidden">
          Comic {currentPage + 1} of {maxPages}
        </span>
      </div>
    </section>
  );
};

export default Comics;