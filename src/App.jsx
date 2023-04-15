import "./styles/App.css";
import "./styles/Medias.css";
import { About } from "./componentes/About";
import { Home } from "./componentes/Home";
import { Navbar } from "./componentes/Navbar";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Trabajos } from "./componentes/Trabajos";
import { Contact } from "./componentes/Contact";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Trabajos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
