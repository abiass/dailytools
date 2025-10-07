// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./index.css";
import Navbar from "./components/navbar";
import Regra3 from "./pages/Regra3"; // tela de cálculo
import About from "./pages/About"; // tela sobre o projeto
import ConversorTempo from "./pages/ConversorTempo"; // tela sobre o projeto
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Página inicial */}
      <main className="flex flex-col items-center mt-5 p-1 w-full max-w-xl">
        <h2 className="text-3xl font-bold mb-8 text-indigo-700 text-center">
          Ferramentas
        </h2>

        <ul className="w-full flex flex-col items-center gap-4 sm:gap-1">
          <li
            className="bg-blue-500 text-white px-6 py-3 rounded-xl cursor-pointer shadow-lg hover:bg-blue-600 transition duration-200 text-center"
            onClick={() => navigate("/regra3")}
          >
            <strong>Regra de 3</strong>
            <p>Calcule proporções facilmente</p>
          </li>

          <li
            className="bg-blue-500 text-white px-6 py-3 rounded-xl cursor-pointer shadow-lg hover:bg-blue-600 transition duration-200 text-center"
            onClick={() => navigate("/tempo")}
          >
            <strong>Conversor de Tempo</strong>
            <p>Converta dias, horas, minutos e segundos</p>
          </li>

          {/* Futuras calculadoras podem ser adicionadas aqui */}
        </ul>
      </main>
    </div>
  );
}

// Envolvendo com Router
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header fixo no topo */}
        <header className="bg-blue-600 p-1 text-left">
          <Navbar />
        </header>

        {/* Conteúdo principal cresce e empurra o rodapé */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/regra3" element={<Regra3 />} />
            <Route path="/about" element={<About />} />
            <Route path="/tempo" element={<ConversorTempo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Rodapé fixo no final */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
