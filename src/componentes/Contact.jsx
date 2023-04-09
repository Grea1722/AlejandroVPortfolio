import React from "react";
import { gmail, linkedin, whats } from "../assets";
import { isMobile } from "react-device-detect";

const phoneNumber = "+5216631180016";

export const Contact = () => {
  const url = !isMobile
    ? `https://web.whatsapp.com/send?phone=${phoneNumber}&text=Hola,%20estoy%20interesado%20en%20tus%20servicios.`
    : `https://wa.me/${phoneNumber}`;

  return (
    <div className="contact">
      <h1>Contacto</h1>
      <section className="contact-info">
        <div className="contact-card">
          <a href="mailto:alexstaark8@gmail.com?subject=Asunto del correo electrónico&body=Cuerpo del correo electrónico">
            <img src={gmail} alt="gmail logo for contact with email" />
            <p> alexstaark8@gmail.com</p>
          </a>
        </div>
        <div className="contact-card">
          <a href={url} target="_blank">
            <img src={whats} alt="whatsapp logo for send message" />
            <p>+5216644946713</p>
          </a>
        </div>
        <div className="contact-card">
          <a
            href="https://www.linkedin.com/in/alejandro-solis-4b085119b/"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin icon" />
            <p>Linkedin</p>
          </a>
        </div>
      </section>
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
    </div>
  );
};
