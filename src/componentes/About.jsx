import pc from "../assets/Myproject.png";
import {
  Firebase,
  MaterilUi,
  MySql,
  NodeJs,
  React,
  Redux,
  csharp,
  css,
  html,
  js,
} from "../assets";

export const About = () => {
  return (
    <main className="about">
      <div className="about-text">
        <section className="title">
          <h1>About</h1>
          <p>alexstaark8@gmail.com</p>
        </section>
        <section className="info">
          <p>
            ¡Hola! Soy Alejandro, un recién graduado en Ingenieria en desarrollo
            de Software, con una pasión por la programación web. Después de 6
            meses trabajando en proyectos de desarrollo web en una empresa de
            tecnología, me siento emocionado y motivado para seguir creciendo en
            mi carrera como desarrollador. Me especializo en el area frontend
            enfocando mi conocimiento a javascript, utilizando la libreria
            React, MaterialUi y React-Redux.
          </p>
        </section>
      </div>
      <section className="habilidades">
        <h2
          style={{
            display: "inline-block",
            width: "100%",
            textAlign: "center",
            textDecoration: "underline",
            textDecorationColor: "#e63946",
          }}
        >
          Tecnologias
        </h2>
        <div className="tech-card">
          <img src={React} alt="React logo" />
          <p>ReactJs</p>
        </div>
        <div className="tech-card">
          <img src={MaterilUi} alt="MaterialUi logo" />
          <p>MaterialUi</p>
        </div>
        <div className="tech-card">
          <img src={js} alt="Javasript Logo" />
          <p>Javascript</p>
        </div>
        <div className="tech-card">
          <img src={html} alt="Html Logo" />
          <p>HTML</p>
        </div>
        <div className="tech-card">
          <img src={css} alt="CSS logo" />
          <p>CSS</p>
        </div>
        <div className="tech-card">
          <img src={Firebase} alt="Firebase Logo" />
          <p>Firebase</p>
        </div>
        <div className="tech-card">
          <img src={MySql} alt="MySQL Logo" />
          <p>MySql</p>
        </div>
        <div className="tech-card">
          <img src={NodeJs} alt="NodeJs logo" />
          <p>NodeJs</p>
        </div>
        <div className="tech-card">
          <img src={Redux} alt="Redux Logo" />
          <p>React-Redux</p>
        </div>
        <div className="tech-card">
          <img src={csharp} alt="Csharp logo" />
          <p>C#</p>
        </div>
      </section>
    </main>
  );
};
