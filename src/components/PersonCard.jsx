import React from 'react';
import './PersonCard.css';

export const PersonCard = ({ person }) => {
  const { name, nickname, description, photo, role } = person;

  return (
    <article className="person-card">
      {/* 1. Fotoğraf (En Üstte) */}
      <div className="person-photo-wrapper">
        <img 
          src={photo} 
          alt={name} 
          className="person-photo" 
          loading="lazy"
        />
        <span className="person-role-badge">{role}</span>
      </div>

      {/* 2. İsim (Fotoğrafın Altında) */}
      <h3 className="person-name">{name}</h3>

      {/* 3. Lakap (İsmin Altında, Silik/Soluk Yazı) */}
      <span className="person-nickname">{nickname}</span>

      {/* 4. Kısa Açıklama (En Altta) */}
      <p className="person-description">{description}</p>
    </article>
  );
};

export default PersonCard;
