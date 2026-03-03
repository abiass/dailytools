import { useState } from "react";
import { LetterText, Loader } from "lucide-react";

const CharacterCount = () => {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [counted, setCounted] = useState(false);

  const count = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setCharCount(0);
    setWordCount(0);
    setCounted(false);
    try {
      const response = await fetch(
        "https://api-nodejs-fyho.onrender.com/api/charcount",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        },
      );

      const data = await response.json();

      setCharCount(data.charCount || 0);
      setWordCount(data.wordCount || 0);
      setCounted(true);
    } catch (error) {
      console.error("Erro ao contar:", error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-2xl mb-4">
            <LetterText size={40} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
            Contador de Caracteres
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Conte caracteres, palavras e muito mais
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-green-100 dark:border-gray-700">
          {/* Gradient Header */}
          <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500"></div>

          {/* Content */}
          <div className="p-8 md:p-10">
            {/* Input Section */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Texto para Análise
              </label>
              <textarea
                className="w-full px-5 py-4 border-2 border-green-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-800 transition-all resize-none"
                placeholder="Digite seu texto aqui para contarmos os caracteres e palavras..."
                rows="6"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Caracteres digitados: {text.length}
              </p>
            </div>

            {/* Button */}
            <button
              disabled={loading || !text.trim()}
              onClick={count}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 rounded-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-8"
            >
              {loading ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  Contando...
                </>
              ) : (
                <>
                  <LetterText size={20} />
                  Analisar Texto
                </>
              )}
            </button>

            {/* Results Stats */}
            {counted && (
              <div className="grid grid-cols-2 gap-4">
                {/* Caracteres Card */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 border-2 border-blue-200 dark:border-gray-600">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
                    Caracteres
                  </p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                    {charCount}
                  </p>
                </div>

                {/* Palavras Card */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 border-2 border-indigo-200 dark:border-gray-600">
                  <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
                    Palavras
                  </p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                    {wordCount}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCount;
