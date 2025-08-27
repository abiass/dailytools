// src/pages/Regra3.jsx

import { useState } from "react";

function Regra3() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = async () => {
    const response = await fetch("http://localhost:3000/regra3", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ a: Number(a), b: Number(b), c: Number(c) }),
    });

    const data = await response.json();
    setResultado(data.resultado);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Regra de 3</h2>

      <input
        type="number"
        placeholder="A"
        value={a}
        onChange={(e) => setA(e.target.value)}
        className="border p-2 m-2"
      />
      <input
        type="number"
        placeholder="B"
        value={b}
        onChange={(e) => setB(e.target.value)}
        className="border p-2 m-2"
      />
      <input
        type="number"
        placeholder="C"
        value={c}
        onChange={(e) => setC(e.target.value)}
        className="border p-2 m-2"
      />

      <button
        onClick={calcular}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Calcular
      </button>

      {resultado !== null && (
        <p className="mt-4 text-xl font-semibold">Resultado: {resultado}</p>
      )}
    </div>
  );
}

export default Regra3;
