// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Regra3 from "./pages/Regra3";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import CharacterRemove from "./pages/CharacterRemove";
import TextFormat from "./pages/TextFormat";
import CharacterCount from "./pages/CharacterCount";
import Sorteio from "./pages/Sorteio";
import DataCount from "./pages/DataCount";
import {
  Calculator,
  Trash2,
  Type,
  LetterText,
  Dices,
  Grid3x3,
} from "lucide-react";

function Home() {
  const navigate = useNavigate();

  const tools = [
    {
      id: 1,
      title: "Regra de 3",
      description: "Calcule proporções facilmente",
      icon: Calculator,
      path: "/regra3",
      gradient: "from-blue-500 to-cyan-500",
      lightGradient: "from-blue-100 to-cyan-100",
    },
    {
      id: 2,
      title: "Remover Caracteres",
      description: "Remova caracteres especiais",
      icon: Trash2,
      path: "/characterremove",
      gradient: "from-red-500 to-pink-500",
      lightGradient: "from-red-100 to-pink-100",
    },
    {
      id: 3,
      title: "Formatador de Texto",
      description: "Caixa alta, baixa e mais",
      icon: Type,
      path: "/textformat",
      gradient: "from-purple-500 to-indigo-500",
      lightGradient: "from-purple-100 to-indigo-100",
    },
    {
      id: 4,
      title: "Contador de Caracteres",
      description: "Conte caracteres do texto",
      icon: LetterText,
      path: "/charactercount",
      gradient: "from-green-500 to-emerald-500",
      lightGradient: "from-green-100 to-emerald-100",
    },
    {
      id: 5,
      title: "Sorteio Online",
      description: "Escolha aleatória da lista",
      icon: Dices,
      path: "/sorteio",
      gradient: "from-yellow-500 to-orange-500",
      lightGradient: "from-yellow-100 to-orange-100",
    },
    {
      id: 6,
      title: "Contagem de Dados",
      description: "Análise de dados",
      icon: Grid3x3,
      path: "/DataCount",
      gradient: "from-teal-500 to-blue-500",
      lightGradient: "from-teal-100 to-blue-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <main className="flex flex-col items-center px-4 py-8 md:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            DailyTools
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
            Um conjunto de ferramentas úteis para seu dia a dia. Rápidas,
            práticas e eficientes.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={tool.id}
                  onClick={() => navigate(tool.path)}
                  className="group cursor-pointer"
                >
                  <div className="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700">
                    {/* Header com gradiente */}
                    <div
                      className={`h-24 bg-gradient-to-br ${tool.gradient} p-4 flex items-center justify-center`}
                    >
                      <IconComponent
                        size={48}
                        className="text-white opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {tool.description}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div
                      className={`h-1 bg-gradient-to-r ${tool.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Banner */}
        <div className="mt-20 w-full max-w-7xl">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ferramentas Práticas e Rápidas
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Simplifique suas tarefas diárias com nossas ferramentas
              otimizadas. Sem complicações, sem anúncios, totalmente gratuito.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

// Envolvendo com Router
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen dark:bg-gray-700">
        {/* Header fixo no topo */}
        <header>
          <Navbar />
        </header>

        {/* Conteúdo principal cresce e empurra o rodapé */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/regra3" element={<Regra3 />} />
            <Route path="/about" element={<About />} />
            <Route path="/characterremove" element={<CharacterRemove />} />
            <Route path="/textformat" element={<TextFormat />} />
            <Route path="/charactercount" element={<CharacterCount />} />
            <Route path="/sorteio" element={<Sorteio />} />
            <Route path="/DataCount" element={<DataCount />} />
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
