// src/App.jsx
import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";

function App() {
  const services = [
    { name: "Regra de 3", description: "Calcule proporções facilmente" },
  ];

  return (
    <div className="">
      {/* Header */}
      <header className="bg-[#CBF1F5] p-1 text-left">
        <Navbar />
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
          Regra de 3
        </li>
        <p className="text-[12px]"> Calcule proporções facilmente</p>
      </ul>
    </div>
  );
}

export default App;
