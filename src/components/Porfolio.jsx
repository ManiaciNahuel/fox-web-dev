import React from 'react';
import '../styles/porfolio.scss';


const projects = [
  {
    title: 'Farmacia Central',
    description: 'Ecommerce con sistema de stock en tiempo real',
    image: '/assets/farmacia.png',
    url: 'https://farmaciacentral.com'
  },
  {
    title: 'Logística Pro',
    description: 'Panel administrativo para monitoreo de envíos',
    image: '/assets/logistica.png',
    url: 'https://logisticapro.com'
  },
  // Podés seguir sumando acá
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section portfolio-section">
      <h2>Proyectos Realizados</h2>
      <div className="portfolio-grid">
        {projects.map((proj, index) => (
          <div key={index} className="portfolio-card">
            <img src={proj.image} alt={proj.title} />
            <div className="card-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              {proj.url && (
                <a href={proj.url} target="_blank" rel="noopener noreferrer">Ver sitio</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
