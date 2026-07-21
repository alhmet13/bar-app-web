import React from "react";
/* import { teamMembers } from "./data/teamData";
import { PersonCard } from "./components/PersonCard"; */
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* 1. KISIM: Tanıtım Bölümü (Biz kimiz, ne yapıyoruz?) */}
      <header className="hero-section">
        <div className="badge-tag">BIG ASS RESTAURANT</div>

        <h1 className="hero-title">
          <span className="highlight-text">Koca Götlüler</span>
        </h1>

        <p className="hero-description">
          Biz obeziz, yemek yemekten başka hiç bişey bilmeyiz
        </p>

        <div className="scroll-indicator">
          <span className="scroll-arrow">↓</span>
          <span className="scroll-text">Obezlere Göz Atın</span>
        </div>
      </header>

      {/* 2. KISIM: 7 Kutucuktan Oluşan Ekip Bilgisi Bölümü */}
      <main className="team-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="accent-orange">Obezler</span>
          </h2>
          <p className="section-subtitle">Gruba kaos ve eğlence katan 7 üye</p>
        </div>

        {/* 7 Kutucuklu Responsive Grid */}
        <div className="team-grid">
          {teamMembers.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </main>

      {/* Alt Bilgi (Footer) - Butonsuz */}
      <footer className="footer-section">
        <p>© 2026 BIG ASS RESTAURANT Squad. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;
