import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  //^ Effect para detectar el scroll de la pag
  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0 && !scrolled) {
        setScrolled(true);
      } else if (scrollTop === 0 && scrolled) {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="links">
        <Link
          to="/"
          rel="Enlace a homepage"
          className={active === "/" ? "active" : "null"}
        >
          Inicio
        </Link>
        <Link
          to="/about"
          rel="Enlace a acerca de"
          className={active === "/about" ? "active" : "null"}
        >
          Acerca
        </Link>
        <Link
          to="/works"
          rel="noopener noreferrer"
          className={active === "/works" ? "active" : "null"}
        >
          Trabajos
        </Link>
        <Link
          to="/contact"
          rel="noopener noreferrer"
          className={active === "/contact" ? "active" : "null"}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
