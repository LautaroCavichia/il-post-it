import React from 'react';

import './Virgolette.css';

const Virgolette: React.FC = () => {
    return (
      <div className="virgolette-container">
        <div className="virgolette-header">
          <span>Virgolette</span>
        </div>
        <div className="virgolette-content">
          <h2 className="virgolette-quote">«Lorem ipsum dolor sit amet»</h2>
          <p className="virgolette-attribution">
            Consectetur adipiscing elit sed do eiusmod tempor
            <br />
            incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>
    );
  };
  
  export default Virgolette;