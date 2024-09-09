import React from 'react';
import './FeaturedTopics.css';

function FeaturedTopics() {
  return (
    <section className="featured-topics">
      <h2>Temas Destacados</h2>
      {/* Aquí puedes agregar los elementos destacados */}
      <div className="topic">
        <img src="https://path-to-featured-image.jpg" alt="Destacado" />
        <p>Descripción del tema destacado.</p>
      </div>
    </section>
  );
}

export default FeaturedTopics;
