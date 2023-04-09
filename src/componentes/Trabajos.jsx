import { trabajos } from "../trabajos/trabajos";
import { Card } from "./Card";

export const Trabajos = () => {
  return (
    <div className="trabajos">
      <h1>Trabajos</h1>
      {trabajos.map((trabajo) => (
        <Card key={trabajo.id} trabajo={trabajo} />
      ))}
    </div>
  );
};
