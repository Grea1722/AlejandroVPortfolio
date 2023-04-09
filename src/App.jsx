import "./styles/App.css";
import "./styles/Medias.css";
import { About } from "./componentes/About";
import { Home } from "./componentes/Home";
import { Navbar } from "./componentes/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Trabajos } from "./componentes/Trabajos";
import { Contact } from "./componentes/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/works" Component={Trabajos} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
