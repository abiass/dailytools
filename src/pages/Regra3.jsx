// src/components/Regra3.jsx
import React, { useState } from "react";

function Regra3() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/regra3", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      if (data.resultado) {
        setResultado(data.resultado);
      } else {
        setResultado("Erro no cálculo");
      }
    } catch (error) {
      console.error("Erro ao calcular:", error);
      setResultado("Erro de conexão com o servidor");
    }
  };
  return (
    <div className="p-6 max-w-xl mx-auto flex flex-col items-center">
      {/* Título */}
      <h1 className="text-2xl font-bold mb-6 text-center">Regra de 3</h1>

      {/* Primeira linha */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 mb-4 w-full">
        <input
          className="border px-2 py-1 rounded w-full sm:w-28 mb-2 sm:mb-0"
          type="number"
          placeholder="A"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <div className="bg-blue-100 px-4 py-1 rounded text-center">
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
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 mb-4 w-full">
        <input
          className="border px-2 py-1 rounded w-full sm:w-28 mb-2 sm:mb-0"
          type="number"
          placeholder="C"
          value={c}
          onChange={(e) => setC(e.target.value)}
        />
        <div className="bg-blue-100 px-4 py-1 rounded text-center">
          Está para
        </div>
        <span className="bg-green-100 px-6 py-2 rounded-full text-center mb-2 sm:mb-0 mt-2">
          {/* Resultado */}
          {resultado !== null && (
            <p className="mt-0 text-center">
              <strong>{resultado}</strong>
            </p>
          )}
        </span>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto mt-2 sm:mt-0 transition cursor-pointer hover:bg-blue-600"
          onClick={calcular}
        >
          Calcular
        </button>
      </div>
    </div>
  );
}

export default Regra3;
