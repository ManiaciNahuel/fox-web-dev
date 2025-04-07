// src/components/ServiceCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/serviceCard.scss';

const ServiceCard = ({ image, title, description, link, className = '', index }) => {
  const delayStyle = {
    transitionDelay: `${index * 0.4}s`, // ⏱ delay de 0.2s entre cada card
  };

  return (
    <div className={`service-card ${className}`} style={delayStyle}>
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link || "#"} className="service-button">Ver más</Link>
      </div>
    </div>
  );
};


export default ServiceCard;
