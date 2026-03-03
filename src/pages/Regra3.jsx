// src/components/Regra3.jsx
import React, { useState } from "react";
import { ArrowRight, Loader, CheckCircle } from "lucide-react";

function Regra3() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const calcular = async () => {
    setLoading(true);
    setResultado(null);
    setError(null);

    if (!a || !b || !c) {
      setError("Preencha todos os campos!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://api-nodejs-fyho.onrender.com/api/regra3",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ a, b, c }),
        },
      );

      const data = await response.json();

      if (data.resultado) {
        setResultado(data.resultado);
      } else {
        setError("Erro no cálculo. Verifique os valores inseridos.");
      }
    } catch (error) {
      console.error("Erro ao calcular:", error);
      setError("Erro de conexão com o servidor");
    }
    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      calcular();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Regra de 3
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Calcule proporções e relações matemáticas facilmente
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-blue-100 dark:border-gray-700">
          {/* Gradient Header */}
          <div className="h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

          {/* Content */}
          <div className="p-8 md:p-10">
            {/* Primeira Proporção */}
            <div className="mb-10">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                Primeira Proporção: A está para B
              </label>

              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <div className="flex-1 w-full">
                  <input
                    className="w-full px-5 py-3 border-2 border-blue-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all"
                    type="number"
                    placeholder="Valor de A"
                    value={a}
                    onChange={(e) => setA(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </div>

                <ArrowRight
                  className="text-blue-500 hidden md:block"
                  size={32}
                />
                <div className="md:hidden text-blue-500 text-2xl font-light">
                  ↓
                </div>

                <div className="flex-1 w-full">
                  <input
                    className="w-full px-5 py-3 border-2 border-blue-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all"
                    type="number"
                    placeholder="Valor de B"
                    value={b}
                    onChange={(e) => setB(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </div>
              </div>
            </div>

            {/* Divisor */}
            <div className="h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent dark:via-gray-600 mb-10"></div>

            {/* Segunda Proporção */}
            <div className="mb-10">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
                Segunda Proporção: C está para ?
              </label>

              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <div className="flex-1 w-full">
                  <input
                    className="w-full px-5 py-3 border-2 border-indigo-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-800 transition-all"
                    type="number"
                    placeholder="Valor de C"
                    value={c}
                    onChange={(e) => setC(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </div>

                <ArrowRight
                  className="text-indigo-500 hidden md:block"
                  size={32}
                />
                <div className="md:hidden text-indigo-500 text-2xl font-light">
                  ↓
                </div>

                <div className="flex-1 w-full">
                  <div className="w-full px-5 py-3 border-2 border-indigo-300 dark:border-gray-600 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center min-h-[3rem]">
                    {resultado !== null ? (
                      <div className="text-center">
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                          Resultado
                        </p>
                        <p className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                          {typeof resultado === "number"
                            ? resultado.toFixed(2)
                            : resultado}
                        </p>
                      </div>
                    ) : (
                      <p className="text-gray-400 dark:text-gray-500">
                        resultado
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg text-red-700 dark:text-red-200 text-sm flex items-start gap-2">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            {/* Success Message */}
            {resultado !== null && !error && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg text-green-700 dark:text-green-200 text-sm flex items-start gap-2">
                <CheckCircle size={20} />
                <span>Cálculo realizado com sucesso!</span>
              </div>
            )}

            {/* Button */}
            <button
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 rounded-xl transition-all duration-200 transform hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:shadow-none flex items-center justify-center gap-2"
              onClick={calcular}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  Calculando...
                </>
              ) : (
                <>
                  <CheckCircle size={20} />
                  Calcular X
                </>
              )}
            </button>
          </div>
        </div>

        {/* Formula Info */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-blue-100 dark:border-gray-700">
          <h3 className="font-bold text-gray-900 dark:text-white mb-3">
            Como funciona:
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Regra de 3 é um método matemático para encontrar um valor
            desconhecido em uma proporção. Se{" "}
            <span className="font-mono bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
              A
            </span>{" "}
            está para{" "}
            <span className="font-mono bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
              B
            </span>
            , assim como{" "}
            <span className="font-mono bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
              C
            </span>{" "}
            está para{" "}
            <span className="font-mono bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
              X
            </span>
            , então:{" "}
            <span className="font-mono bg-indigo-100 dark:bg-indigo-900 px-2 py-1 rounded">
              X = (B × C) ÷ A
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Regra3;
