// src/components/Regra3.jsx
import React, { useState } from "react";

function Regra3() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    if (a && b && c) {
      setResultado((b * c) / a);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      {/* Título */}
      <h1 className="text-2xl font-bold mb-6 text-center">Regra de 3</h1>

      {/* Primeira linha */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mb-4">
        <input
          className="border px-2 py-1 rounded w-full sm:w-28 mb-2 sm:mb-0"
          type="number"
          placeholder="A"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <div className="bg-blue-100 px-4 py-1 rounded text-center w-full sm:w-auto">
          Está para
        </div>
        <input
          className="border px-2 py-1 rounded w-full sm:w-28 mt-2 sm:mt-0"
          type="number"
          placeholder="B"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>

      {/* Texto central */}
      <div className="text-center bg-yellow-100 px-4 py-2 rounded mb-4">
        Assim como
      </div>

      {/* Segunda linha */}
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mb-4">
        <input
          className="border px-2 py-1 rounded w-full sm:w-28 mb-2 sm:mb-0"
          type="number"
          placeholder="C"
          value={c}
          onChange={(e) => setC(e.target.value)}
        />
        <div className="bg-blue-100 px-4 py-1 rounded text-center w-full sm:w-auto">
          Está para
        </div>
        <span className="bg-green-100 px-6 py-2 rounded-full text-center mb-2 sm:mb-0">
          X
        </span>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto"
          onClick={calcular}
        >
          Calcular
        </button>
      </div>

      {/* Resultado */}
      {resultado !== null && (
        <p className="mt-4 text-lg text-center">
          Resultado: <strong>{resultado}</strong>
        </p>
      )}
    </div>
  );
}

export default Regra3;
