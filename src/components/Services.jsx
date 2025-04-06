// src/components/Services.jsx
import React from 'react';
import ServiceCard from './ServiceCard.jsx';
import '../styles/services.scss';

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <h2>Servicios</h2>
      <div className="services-grid">
        <ServiceCard
          image="/assets/devweb.png"
          title="Desarrollo web"
          description="Creamos páginas web que destacan tu negocio con diseño moderno y funcional. Desde sitios simples hasta sistemas complejos." 
          /* link="/servicios/desarrollo-web" */
        />
        <ServiceCard
          image="/assets/asesoria.png"
          title="Automatización de tareas"
          description="Diseñamos herramientas que simplifican procesos repetitivos. Ahorrá tiempo y evitá errores."
          /* link="/servicios/asesoria-tecnica" */
        />
        <ServiceCard
          image="/assets/powerbi.png"
          title="Informes Power BI"
          description="Convertimos tus datos en paneles visuales para decisiones rápidas y claras. Informes hechos a medida para tu negocio."
          /* link="/servicios/power-bi" */
        />
      </div>
    </section>
  );
};

export default Services;
