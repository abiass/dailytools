import { useState } from "react";

const CharacterRemove = () => {
  const [text, setText] = useState("");
  const [resultado, setResultado] = useState("");

  const remove = async () => {
    try {
      const response = await fetch(
        "https://api-nodejs-fyho.onrender.com/api/removeChars",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }), // deve ser "texto", igual no backend
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
  };

  return (
    <div className="p-6 max-w-xl mx-auto flex flex-col items-center">
      {/* Título */}
      <h1 className="text-2xl font-bold mb-6 text-center">
        Remover caracteres especiais de textos
      </h1>

      <div className="w-full flex flex-col items-center gap-4 sm:gap-2">
        {/* Texto de entrada */}
        <textarea
          className="border px-3 py-2 rounded w-full sm:w-96 resize-y min-h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Digite aqui o texto para remover caracteres especiais."
          rows="3"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Botão */}
        <button
          onClick={remove}
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto transition cursor-pointer hover:bg-blue-600"
        >
          Remover
        </button>

        {/* Resultado */}
        <textarea
          className="border px-3 py-2 rounded w-full sm:w-96 resize-y min-h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Resultado sem caracteres especiais."
          rows="3"
          readOnly
          value={resultado}
        />
      </div>
    </div>
  );
};

export default CharacterRemove;
