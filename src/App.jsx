import React from 'react';
import { teamMembers } from './data/teamData';
import { PersonCard } from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="page-header">
        <h1 className="page-title">BIG ASS RESTAURANT</h1>
        <p className="page-description">
          BIG ASS RESTAURANT, obezlerin yemek cookladığı gelir amacı gütmeyen bir hayır kuruluşudur. 
          Kuruluşun amacı, obezlere yemek sağlamak, onların barınımını ve geçinimini sağlamaktır. 
          Kuruluşumuzun kurucusu, baş cook'u, supervisor'u Supreme Leader'ı Enes Yetim Doruğun kuruluşdan bu yana 10+ tane obezlere yardım ettiği söylenmektedir.
        </p>
      </header>

      <main className="team-section">
        <div className="team-grid">
          {teamMembers.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
