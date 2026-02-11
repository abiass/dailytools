import { useState } from "react";

const CharacterRemove = () => {
  const [text, setText] = useState("");
  const [resultado, setResultado] = useState("");
  const [loading, setLoading] = useState(false);

  const remove = async () => {
    setLoading(true);
    setResultado(null);
    try {
      const response = await fetch(
        "https://api-nodejs-fyho.onrender.com/api/removeChars",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        }
      );

      const data = await response.json();

      if (data.resultado) {
        setResultado(data.resultado);
      } else {
        setResultado("Erro na remoção");
      }
    } catch (error) {
      console.error("Erro ao remover:", error);
      setResultado("Erro de conexão com o servidor");
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto flex flex-col items-center  dark:text-indigo-300">
      <div className="w-full bg-white dark:bg-gray-900 shadow-lg p-6 rounded-xl flex flex-col gap-6">
        {/* Título */}

        <h1 className="text-2xl font-bold mb-6 text-center ">
          Remover caracteres especiais de textos
        </h1>

        <div className="w-full flex flex-col items-center gap-4 sm:gap-2 ">
          {/* Texto de entrada */}
          <textarea
            className="border px-3 py-2 rounded w-full sm:w-96 resize min-h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white dark:bg-gray-800 dark:focus:ring-indigo-500"
            placeholder="Digite aqui o texto para remover caracteres especiais."
            rows="3"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {/* Botão */}
          <button
            onClick={remove}
            type="button"
            className="bg-blue-500 text-bold text-white px-4 py-2 rounded w-full sm:w-auto transition cursor-pointer hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Removendo...
              </div>
            ) : (
              "Remover"
            )}
          </button>

          {/* Resultado */}

          <textarea
            className="border px-3 py-2 rounded w-full sm:w-96 resize min-h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white dark:bg-gray-800 dark:focus:ring-indigo-500"
            placeholder="Resultado sem caracteres especiais."
            rows="3"
            readOnly
            value={resultado}
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterRemove;
