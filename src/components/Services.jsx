import React, { useEffect, useState, useRef } from 'react';
import ServiceCard from './ServiceCard.jsx';
import '../styles/services.scss';

const Services = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Detenemos la observación una vez visible
        }
      },
      {
        threshold: 0.3, // 30% del componente visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };

  }, []);

  return (
    <section
      id="services"
      className="section services-section"
      ref={sectionRef}
    >
      <h2>Servicios</h2>
      <div className="services-grid">
        {[
          {
            image: "/assets/devweb.png",
            title: "Desarrollo web",
            description: "Creamos páginas web que destacan tu negocio con diseño moderno y funcional. Desde sitios simples hasta sistemas complejos."
          },
          {
            image: "/assets/asesoria.png",
            title: "Automatización de tareas",
            description: "Diseñamos herramientas que simplifican procesos repetitivos. Ahorrá tiempo y evitá errores."
          },
          {
            image: "/assets/powerbi.png",
            title: "Informes Power BI",
            description: "Convertimos tus datos en paneles visuales para decisiones rápidas y claras. Informes hechos a medida para tu negocio."
          }
        ].map((card, index) => (
          <ServiceCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            className={visible ? 'visible' : ''}
            index={index} // 👈 acá lo pasamos
          />
        ))}
      </div>

    </section>
  );
};

export default Services;
