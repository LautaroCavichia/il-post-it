import React from 'react';
import './Virgolette.css';

const Virgolette: React.FC = () => {
  return (
    <section className="virgolette">
      <header className="virgolette__header">
        <h2 className="virgolette__heading">Virgolette</h2>
      </header>
      
      <blockquote className="virgolette__content">
        <h3 className="virgolette__quote">«Lorem ipsum dolor sit amet»</h3>
        <footer className="virgolette__attribution">
          <cite>Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</cite>
        </footer>
      </blockquote>
    </section>
  );
};

export default Virgolette;