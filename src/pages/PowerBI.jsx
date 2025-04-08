import React from 'react';
import ServicioTemplate from '../components/ServicioTemplate';

const PowerBI = () => {
  return (
    <ServicioTemplate
      titulo="Informes Power BI"
      subtitulo="Tus datos, claros y visuales"
      descripcion="Tomar decisiones con datos nunca fue tan fácil. Creamos dashboards visuales que resumen tus métricas más importantes."
      imagen="/assets/powerbi.png"
      secciones={[
        {
          titulo: "Paneles interactivos",
          texto: "Mirá tus resultados en tiempo real, filtrá, compará y analizá al instante."
        },
        {
          titulo: "Hecho a tu medida",
          texto: "Cada informe se arma según tu necesidad. No más planillas infinitas."
        },
        {
          titulo: "Actualización automática",
          texto: "Conectamos tus datos para que los reportes estén siempre al día."
        }
      ]}
    />
  );
};

export default PowerBI;
