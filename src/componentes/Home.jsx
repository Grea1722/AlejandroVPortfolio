import { Link } from "react-router-dom";
import { gmail, linkedin, whats } from "../assets";
import { isMobile } from "react-device-detect";

const phoneNumber = "+5216631180016";

export const Home = () => {
  const url = !isMobile
    ? `https://web.whatsapp.com/send?phone=${phoneNumber}&text=Hola,%20estoy%20interesado%20en%20tus%20servicios.`
    : `https://wa.me/${phoneNumber}`;

  return (
    <>
      <main className="home">
        <div className="nombre">
          <h1>ALEJANDRO</h1>
          <h2>VILLALOBOS</h2>
          <h3>Web Developer</h3>
          <div className="buttons">
            <button>
              <Link to={"/works"}>RESUME</Link>
            </button>
            <button>
              <Link to={"/contact"}>CONTACTO</Link>
            </button>
          </div>
        </div>
      </main>
      <footer className="social-links">
        <a
          href="https://www.linkedin.com/in/alejandro-solis-4b085119b/"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin icon" />
        </a>
        <a href={url} target="_blank">
          <img src={whats} alt="whatsapp logo for send message" />
        </a>
        <a href="mailto:alexstaark8@gmail.com?subject=Asunto del correo electrónico&body=Cuerpo del correo electrónico">
          <img src={gmail} alt="gmail logo for contact with email" />
        </a>
      </footer>
    </>
  );
};
