import { useState } from "react";
import { Trash2, Loader, Copy, Check } from "lucide-react";

const CharacterRemove = () => {
  const [text, setText] = useState("");
  const [resultado, setResultado] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const remove = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setResultado("");
    try {
      const response = await fetch(
        "https://api-nodejs-fyho.onrender.com/api/removeChars",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        },
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

  const copyToClipboard = () => {
    if (resultado) {
      navigator.clipboard.writeText(resultado);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-2xl mb-4">
            <Trash2 size={40} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-400 dark:to-pink-400 bg-clip-text text-transparent">
            Remover Caracteres
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Remova caracteres especiais e mantenha apenas letras e números
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-red-100 dark:border-gray-700">
          {/* Gradient Header */}
          <div className="h-2 bg-gradient-to-r from-red-500 to-pink-500"></div>

          {/* Content */}
          <div className="p-8 md:p-10">
            {/* Input Section */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Texto com caracteres especiais
              </label>
              <textarea
                className="w-full px-5 py-4 border-2 border-red-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-800 transition-all resize-none"
                placeholder="Digite o texto com caracteres especiais aqui..."
                rows="4"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            {/* Button */}
            <button
              onClick={remove}
              type="button"
              className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold py-4 rounded-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-8"
              disabled={loading || !text.trim()}
            >
              {loading ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  Removendo...
                </>
              ) : (
                <>
                  <Trash2 size={20} />
                  Remover Caracteres Especiais
                </>
              )}
            </button>

            {/* Result Section */}
            {resultado && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Resultado
                </label>
                <div className="relative">
                  <textarea
                    className="w-full px-5 py-4 border-2 border-green-300 dark:border-gray-600 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 text-gray-900 dark:text-white readOnly resize-none"
                    rows="4"
                    readOnly
                    value={resultado}
                  />
                  <button
                    onClick={copyToClipboard}
                    className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-all flex items-center gap-1 text-xs"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? "Copiado!" : "Copiar"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterRemove;
