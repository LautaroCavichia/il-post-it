// src/components/sections/Photographs.tsx
import React from 'react';
import './Photographs.css';
import { Photo } from '../../../types';


interface PhotographsProps {
  photos: Photo[];
  title?: string;
}

const Photographs: React.FC<PhotographsProps> = ({
  photos,
  title = "Photographs"
}) => {
  // Check if we have photos for the layout
  if (photos.length < 3) {
    console.warn('Photographs component requires at least 3 photos');
  }
  
  const displayPhotos = photos.slice(0, 3);

  return (
    <section className="Photographs-section">
      <div className="Photographs-header">
        <h3 className="Photographs-title">{title}</h3>
      </div>
      
      <div className="Photographs-content">
        {displayPhotos.map((photo) => (
          <div key={photo.id} className="Photographs-item">
            <div className="foto-image-container">
              <img src={photo.imageUrl} alt={photo.title} className="foto-image" />
              <div className="foto-more">
                <div className="foto-more-icon">
                  <span className="camera-icon">📷</span>
                </div>
                <span className="foto-more-text">LE ALTRE FOTO</span>
                <div className="foto-arrow">
                  <span className="arrow-right"></span>
                </div>
              </div>
            </div>
            <div className="foto-caption">
              <h4 className="foto-title">{photo.title}</h4>
              <p className="foto-description">{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photographs;