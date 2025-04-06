// src/components/ServiceCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/serviceCard.scss';

const ServiceCard = ({ image, title, description, link }) => {
  return (
    <div className="service-card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link} className="service-button">Ver más</Link>
      </div>
    </div>
  );
};

export default ServiceCard;
