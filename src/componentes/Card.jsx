import { imagenes } from "../shared/images";

export const Card = ({ trabajo }) => {
  const trabajoImg = imagenes[trabajo.id];
  const tecnologias = trabajo.tecnologias.map(
    (tecnologia) => imagenes[tecnologia]
  );
  return (
    <div className="card" key={trabajo.id}>
      <div className="imagen">
        <img src={trabajoImg} alt={`${trabajo.id} image`} />
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
