import React from "react";

const Sorteio = () => {
  const [text, setText] = React.useState("");
  const [result, setResult] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const sortear = async () => {
    setLoading(true);
    setResult(null);
    try {
      const response = await fetch(
        "https://api-nodejs-fyho.onrender.com/api/sorteio",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        }
      );

      const data = await response.json();
      setResult(data.result || "Erro no sorteio! Verifique os nomes.");
    } catch (error) {
      console.error("Erro ao sortear:", error);
      setResult("Erro de conexão com o servidor");
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto flex flex-col items-center dark:text-indigo-300">
      {/* Card */}
      <div className="w-full bg-white dark:bg-gray-900 shadow-lg p-6 rounded-xl flex flex-col gap-6">
        {/* Título */}
        <h1 className="text-2xl font-bold text-center">Sorteio</h1>

        {/* Texto explicativo */}
        <p className="text-center text-sm opacity-80">
          Digite as palavras a serem sorteadas separadas por vírgula ou espaço.
        </p>

        {/* Textarea */}
        <textarea
          className="border px-3 py-3 rounded-lg w-full resize-none min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white dark:bg-gray-800 dark:focus:ring-indigo-500"
          placeholder="Exemplo: Ana, João, Pedro"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Botão */}
        <button
          className="bg-blue-500 font-semibold text-white px-6 py-3 rounded-lg transition hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed"
          onClick={sortear}
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Sorteando...
            </div>
          ) : (
            "Sortear"
          )}
        </button>

        {/* Resultado */}
        {result !== null && (
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
            <p className="text-lg font-semibold">Resultado:</p>
            <p className="mt-1 text-xl font-bold">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sorteio;
