// src/App.jsx
import React from "react";

function App() {
  const services = [
    { name: "Regra de 3", description: "Calcule proporções facilmente" },
  ];

  return (
    <div className="bg-[#E3FDFD] min-h-screen">
      {/* Header */}
      <header className="bg-[#CBF1F5] p-1 text-left">
        <h1 className="text-3xl font-bold ml-8">ProjetoSemNome </h1>
        <h2 className="text-p13 font-semibold mb-4 ml-8">Ferramentas Online</h2>
      </header>

      <main className="p-6 ml-50">Calculadoras</main>
      <ul className="p-6 ml-50 mt-1">
        <li
          className="bg-blue-500 text-white px-4 py-2 rounded inline-block cursor-pointer"
          onClick={() =>
            window.open(
              "https://colorhunt.co/palette/e3fdfdcbf1f5a6e3e971c9ce",
              "_blank"
            )
          }
        >
          Regra de 3<p> Calcule proporções facilmente</p>
        </li>
      </ul>
    </div>
  );
}

export default App;
