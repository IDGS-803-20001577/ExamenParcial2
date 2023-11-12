import React from 'react';
import './StartRating.css'; // Importa tu archivo CSS personalizado

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={`star ${index < Math.round(rating) ? 'filled' : ''}`}>&#9733;</span>
  ));

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
