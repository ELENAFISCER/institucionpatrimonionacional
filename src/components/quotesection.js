import React from 'react';
import './QuoteSection.css';

function QuoteSection() {
  return (
    <section className="quote-section">
      <div className="quote-text">
        <p>
          “La independencia de la Corona, su neutralidad política y su vocación integradora
          ante las diferentes opciones ideológicas, le permiten contribuir a la estabilidad 
          de nuestro sistema político...”
        </p>
        <p><strong>S.M. el Rey Don Felipe VI</strong></p>
        <p>Madrid, 19.6.2014</p>
      </div>
      <div className="quote-image">
        <img src="https://path-to-image-of-king-and-queen.jpg" alt="Rey y Reina" />
      </div>
    </section>
  );
}

export default QuoteSection;
