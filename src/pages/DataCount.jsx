import React, { useState } from "react";
import { Calendar, Loader } from "lucide-react";

function DataCount() {
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  const calcularDiferenca = async () => {
    if (!dataInicio || !dataFim) {
      alert("Preencha ambas as datas!");
      return;
    }

    setLoading(true);
    setResultado(null);

    try {
      const response = await fetch(
        "https://api-nodejs-fyho.onrender.com/api/datacount",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ dataInicio, dataFim }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setResultado(data);
      } else {
        alert(data.erro || "Erro ao calcular diferença de datas");
      }
    } catch (error) {
      console.error("Erro ao calcular:", error);
      alert("Erro de conexão com o servidor");
    } finally {
      setLoading(false);
    }
  };

  const limpar = () => {
    setDataInicio("");
    setDataFim("");
    setResultado(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      calcularDiferenca();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-teal-500 to-blue-500 p-4 rounded-2xl mb-4">
            <Calendar size={40} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
            Contador de Datas
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Calcule a diferença entre duas datas
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-teal-100 dark:border-gray-700">
          {/* Gradient Header */}
          <div className="h-2 bg-gradient-to-r from-teal-500 to-blue-500"></div>

          {/* Content */}
          <div className="p-8 md:p-10">
            {/* Input Section */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Data e Hora Inicial
              </label>
              <input
                type="datetime-local"
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-5 py-3 border-2 border-teal-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-800 transition-all"
              />
            </div>

            {/* Second Input */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Data e Hora Final
              </label>
              <input
                type="datetime-local"
                value={dataFim}
                onChange={(e) => setDataFim(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-5 py-3 border-2 border-blue-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all"
              />
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button
                onClick={calcularDiferenca}
                disabled={loading}
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-bold py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    Calculando...
                  </>
                ) : (
                  <>
                    <Calendar size={20} />
                    Calcular
                  </>
                )}
              </button>
              <button
                onClick={limpar}
                className="bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-700 text-white font-bold py-3 rounded-xl transition-all duration-200"
              >
                Limpar
              </button>
            </div>

            {/* Result */}
            {resultado && (
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 border-2 border-teal-200 dark:border-gray-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Diferença de Tempo
                </h3>

                {/* Time Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
                      {resultado.dias}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                      Dias
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
                      {resultado.horas}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                      Horas
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
                      {resultado.minutos}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                      Minutos
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
                      {resultado.segundos}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                      Segundos
                    </p>
                  </div>
                </div>

                {/* Total Summary */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 space-y-2 border border-teal-200 dark:border-gray-700">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Total de Dias:</strong> {resultado.totalDias} dia(s)
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Total de Horas:</strong> {resultado.totalHoras}{" "}
                    hora(s)
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Total de Minutos:</strong> {resultado.totalMinutos}{" "}
                    minuto(s)
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataCount;
