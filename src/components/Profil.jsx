export default function Profil({ member }) {
  if (!member) {
    return null;
  }

  return (
    <div className="profil">
      <img src={member.foto} alt={member.isim} />
      <div className="profil-bilgiler">
        <h2>{member.isim}</h2>
        <p className="kod-adi">{member.kodAdi}</p>
        {member.rol && <p className="rol">{member.rol}</p>}
      </div>
    </div>
  );
}
