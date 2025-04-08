import React from 'react';
import ServicioTemplate from '../components/ServicioTemplate';

const Automatizacion = () => {
  return (
    <ServicioTemplate
      titulo="Automatización de tareas"
      subtitulo="Menos esfuerzo, más resultados"
      descripcion="Creamos herramientas que eliminan pasos repetitivos. Ya sea cruzar Excel, generar reportes o enviar info, lo automatizamos para vos."
      imagen="/assets/asesoria.png"
      secciones={[
        {
          titulo: "Programas a medida",
          texto: "Diseñamos ejecutables simples que se adaptan al flujo de tu negocio."
        },
        {
          titulo: "Automatización inteligente",
          texto: "Desde copiar y pegar hasta procesar cientos de datos, tu compu puede hacerlo sola."
        },
        {
          titulo: "Integración con Excel y bases de datos",
          texto: "Tu info se transforma sin errores y en segundos."
        }
      ]}
    />
  );
};

export default Automatizacion;
