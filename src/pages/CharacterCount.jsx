import { useState } from "react";

const CharacterCount = () => {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const count = async () => {
    setLoading(true);
    setCharCount(0);
    setWordCount(0);
    try {
      const response = await fetch(
        "https://api-nodejs-goer.onrender.com/api/charcount",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        }
      );

      const data = await response.json();

      setCharCount(data.charCount || 0);
      setWordCount(data.wordCount || 0);
    } catch (error) {
      console.error("Erro ao contar:", error);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto flex flex-col items-center dark:text-indigo-300">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Contar caracteres e palavras
      </h1>

      <div className="w-full flex flex-col items-center gap-4">
        <textarea
          className="border px-3 py-2 rounded w-full sm:w-96 resize min-h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white dark:bg-gray-800 dark:focus:ring-indigo-500"
          placeholder="Digite o texto aqui."
          rows="3"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          disabled={loading}
          onClick={count}
          className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded w-full sm:w-auto hover:bg-blue-600"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Contando...
            </div>
          ) : (
            "Contar"
          )}
        </button>

        <div className="border px-2 py-2 rounded w-full sm:w-96 resize min-h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white dark:bg-gray-800 dark:focus:ring-indigo-500">
          <p>
            <strong>Caracteres:</strong> {charCount}
          </p>
          <p>
            <strong>Palavras:</strong> {wordCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCount;
