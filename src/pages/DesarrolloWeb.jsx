import React from 'react';
import ServicioTemplate from '../components/ServicioTemplate';

const DesarrolloWeb = () => {
  return (
    <ServicioTemplate
      titulo="Desarrollo Web"
      subtitulo="Mostrá lo mejor de tu negocio"
      descripcion="Creamos páginas web a medida, con diseño moderno y adaptado a cualquier dispositivo. Desde un sitio institucional hasta una plataforma conectada a base de datos."
      imagen="/assets/devweb.png"
      secciones={[
        {
          titulo: "Diseño moderno",
          texto: "Cada sitio es único. Usamos tipografías, colores y layouts pensados para vos."
        },
        {
          titulo: "Responsive",
          texto: "Tu web se verá increíble desde celulares, tablets y computadoras."
        },
        {
          titulo: "Conectividad total",
          texto: "Podemos integrar formularios, login, bases de datos y más."
        }
      ]}
    />
  );
};

export default DesarrolloWeb;
