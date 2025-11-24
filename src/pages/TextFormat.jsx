import { useState } from "react";

const TextFormat = () => {
  const [text, setText] = useState("");
  const [resultadoCaixaAlta, setResultadoCaixaAlta] = useState("");
  const [resultadoCaixaBaixa, setResultadoCaixaBaixa] = useState("");
  const [loading, setLoading] = useState(false);
  //const [resultadoPrimeiraMaiuscula, setResultadoPrimeiraMaiuscula] =
  //   useState("");

  const formatar = async () => {
    setLoading(true);
    setResultadoCaixaAlta(null);
    setResultadoCaixaBaixa(null);

    try {
      const response = await fetch(
        "https://api-nodejs-goer.onrender.com/api/textformat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        }
      );

      const data = await response.json();

      setResultadoCaixaAlta(data.caixaAlta || "");
      setResultadoCaixaBaixa(data.caixaBaixa || "");
      //setResultadoPrimeiraMaiuscula(data.primeiraMaiuscula || "");
    } catch (error) {
      console.error("Erro ao formatar:", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto flex flex-col items-center  dark:text-indigo-300">
      {/* Título */}
      <h1 className="text-2xl font-bold mb-6 text-center ">
        Formatar texto conforme sua necessidade
      </h1>

      <div className="w-full flex flex-col items-center gap-4 sm:gap-2 ">
        {/* Texto de entrada */}
        <textarea
          className="border px-3 py-2 rounded w-full sm:w-96 resize min-h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white dark:bg-gray-800 dark:focus:ring-indigo-500 "
          placeholder="Digite aqui o texto para ser formatado."
          rows="3"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Botão */}
        <button
          onClick={formatar}
          disabled={loading}
          className="bg-blue-500 font-bold text-white px-4 py-2 rounded w-full sm:w-auto transition cursor-pointer hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Formatando...
            </div>
          ) : (
            "Formatar"
          )}
        </button>

        {/* Resultado */}
        <textarea
          className="border px-3 py-2 rounded w-full sm:w-96 resize min-h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white dark:bg-gray-800 dark:focus:ring-indigo-500"
          placeholder="Resultado com todas letras em caixa alta."
          rows="3"
          readOnly
          value={resultadoCaixaAlta}
        />
        <textarea
          className="border px-3 py-2 rounded w-full sm:w-96 resize min-h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white dark:bg-gray-800 dark:focus:ring-indigo-500"
          placeholder="Resultado com todas letras em caixa baixa."
          rows="3"
          readOnly
          value={resultadoCaixaBaixa}
        />
        {/*<textarea
          className="border px-3 py-2 rounded w-full sm:w-96 resize-y min-h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white dark:bg-gray-800 dark:focus:ring-indigo-500"
          placeholder="Primeira letra de frase maiuscula."
          rows="3"
          readOnly
          value={resultadoPrimeiraMaiuscula}
        />*/}
      </div>
    </div>
  );
};

export default TextFormat;
