import React from "react";

export const Card = ({ trabajo }) => {
  const trabajoImg = `src/assets/${trabajo.id}.png`;
  const tecnologias = trabajo.tecnologias.map(
    (tecnologia) => `src/assets/${tecnologia}.png`
  );

  return (
    <div className="card">
      <div className="imagen">
        <img src={trabajoImg} alt="aaaaaa" />
      </div>
      <div className="work-info">
        <h1>{trabajo.nombre}</h1>
        <p>{trabajo.informacion}</p>
        <h2>Tecnologias</h2>
        <section className="tecnologias">
          {tecnologias.map((tech) => (
            <img key={tech} src={tech} />
          ))}
        </section>
      </div>
    </div>
  );
};
