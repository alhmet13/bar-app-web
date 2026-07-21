import Profil from "../components/Profil";
import { barMembers } from "../ekip";
import "../styles/App.css";
import liderImg from "../assets/ekipfoto/leader.jpeg";

export default function AnaSayfa() {
  return (
    <main>
      <h1 id="baslik">Big Ass Restaruant | BAR</h1>
      <section id="profiller">
        <div id="lider">
          <img src={liderImg} />
          <div id="lider-bilgiler">
            <h1>Enes</h1>
            <p>yazcam</p>
          </div>
        </div>
        <div id="uye">
          {barMembers.map((member) => (
            <Profil key={member.id} member={member} />
          ))}
        </div>
      </section>
    </main>
  );
}
