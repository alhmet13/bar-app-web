import React from 'react';
import { teamMembers } from './data/teamData';
import { PersonCard } from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="app-container">
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
