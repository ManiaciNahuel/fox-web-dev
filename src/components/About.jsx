import React, { useRef, useEffect, useState } from 'react';
import FoxDisplay from './FoxDisplay';
import '../styles/about.scss';

const About = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={`section about-section ${visible ? 'visible' : ''}`}>
      <div className="about-wrapper">
        <div className="about-content">
          <h2>¿Quiénes somos?</h2>
          <p>
            En <strong>Fox Web Development</strong>, creamos experiencias digitales que combinan diseño, tecnología y soluciones a medida.
          </p>
          <p>
            Desarrollamos webs desde cero, backend y frontend. Nos adaptamos a tus procesos, implementamos sistemas, automatizamos tareas con Python y armamos reportes potentes con Power BI.
          </p>
          <p>
            Nos gusta estar cerca. Acompañamos a cada cliente desde el arranque hasta el resultado final. <em>¡Así trabajamos!</em>
          </p>
        </div>

        <div className="fox-sentado">
          <FoxDisplay />
        </div>
      </div>
    </section>
  );
};

export default About;
