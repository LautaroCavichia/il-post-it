import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Photographs.css';
import { Photo } from '../../../types';
import { getMockAlt } from '../../../data/mockDataGenerator';

interface PhotographsProps {
  photos: Photo[];
  title?: string;
}

const Photographs: React.FC<PhotographsProps> = ({
  photos,
  title = "Fotografie",
}) => {
  if (photos.length < 3) {
    console.warn('Photographs component requires at least 3 photos');
  }
  const displayPhotos = photos.slice(0, 3);

  return (
    <section className="photographs">
      <header className="photographs__header">
        <h2 className="photographs__title">{title}</h2>
      </header>
      <div className="photographs__content row">
        {displayPhotos.map((photo) => (
          <article key={photo.id} className="photographs__item">
            <figure className="photographs__figure">
              <div className="photographs__image-wrapper">
                <img
                  src={photo.imageUrl}
                  alt={getMockAlt(photo.title)}
                  className="photographs__image"
                />
                <div className="photographs__overlay">
                  <div className="photographs__overlay-content">
                    <div className="photographs__icon-wrapper">
                      <span className="photographs__camera-icon" aria-hidden="true">
                        📷
                      </span>
                    </div>
                    <span className="photographs__more-text">LE ALTRE FOTO</span>
                    <div className="photographs__arrow-wrapper" aria-hidden="true">
                      <span className="photographs__arrow"></span>
                    </div>
                  </div>
                </div>
              </div>
              <figcaption className="photographs__caption">
                <h3 className="photographs__photo-title">{photo.title}</h3>
                <p className="photographs__description">{photo.description}</p>
              </figcaption>
            </figure>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Photographs;