import React from 'react';
import '../styles/servicioTemplate.scss';

const ServicioTemplate = ({ titulo, subtitulo, descripcion, imagen, secciones }) => {
  return (
    <section className="servicio-template section">
      <h2>{titulo}</h2>
      <p className="sub">{subtitulo}</p>
      <div className="intro">
        <img src={imagen} alt={titulo} className="imagen-principal" />
        <p className="descripcion">{descripcion}</p>
      </div>

      <div className="bloques">
        {secciones?.map((bloque, i) => (
          <div className="bloque" key={i}>
            <h3>{bloque.titulo}</h3>
            <p>{bloque.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicioTemplate;
