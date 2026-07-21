import React from 'react';
import './PersonCard.css';

export const PersonCard = ({ person }) => {
  return (
    <article className="person-card">
      <div className="person-photo-container">
        <img 
          src={person.photo} 
          alt="" 
          className="person-photo" 
          loading="lazy"
        />
      </div>
    </article>
  );
};

export default PersonCard;
