import React from "react";
import { Dices, Loader, Sparkles } from "lucide-react";

const Sorteio = () => {
  const [text, setText] = React.useState("");
  const [result, setResult] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const sortear = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const response = await fetch(
        "https://api-nodejs-fyho.onrender.com/api/sorteio",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-2xl mb-4 animate-bounce">
            <Dices size={40} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">
            Sorteio Online
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Escolha um item aleatório da sua lista
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-yellow-100 dark:border-gray-700">
          {/* Gradient Header */}
          <div className="h-2 bg-gradient-to-r from-yellow-500 to-orange-500"></div>

          {/* Content */}
          <div className="p-8 md:p-10">
            {/* Input Section */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Lista de Itens
              </label>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                Separe os itens com vírgula (,) ou um em cada linha
              </p>
              <textarea
                className="w-full px-5 py-4 border-2 border-yellow-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 dark:focus:ring-yellow-800 transition-all resize-none"
                placeholder="Exemplo: Ana, João, Pedro\nou:\nAna\nJoão\nPedro"
                rows="6"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            {/* Button */}
            <button
              className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-bold py-4 rounded-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-8"
              onClick={sortear}
              disabled={loading || !text.trim()}
            >
              {loading ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  Sorteando...
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  Sortear Item
                </>
              )}
            </button>

            {/* Result */}
            {result !== null && (
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 border-2 border-yellow-200 dark:border-gray-600 text-center">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3 flex items-center justify-center gap-2">
                  <Sparkles size={18} className="text-yellow-500" />
                  Item Sorteado
                </p>
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent break-words">
                  {result}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sorteio;
