import { useState } from "react";
import { Type, Loader, Copy, Check } from "lucide-react";

const TextFormat = () => {
  const [text, setText] = useState("");
  const [resultadoCaixaAlta, setResultadoCaixaAlta] = useState("");
  const [resultadoCaixaBaixa, setResultadoCaixaBaixa] = useState("");
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const formatar = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setResultadoCaixaAlta("");
    setResultadoCaixaBaixa("");

    try {
      const response = await fetch(
        "https://api-nodejs-fyho.onrender.com/api/textformat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        },
      );

      const data = await response.json();

      setResultadoCaixaAlta(data.caixaAlta || "");
      setResultadoCaixaBaixa(data.caixaBaixa || "");
    } catch (error) {
      console.error("Erro ao formatar:", error);
    }
    setLoading(false);
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-2xl mb-4">
            <Type size={40} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Formatador de Texto
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Converta seu texto para maiúscula ou minúscula
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-purple-100 dark:border-gray-700">
          {/* Gradient Header */}
          <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-500"></div>

          {/* Content */}
          <div className="p-8 md:p-10">
            {/* Input Section */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Texto a Formatar
              </label>
              <textarea
                className="w-full px-5 py-4 border-2 border-purple-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-800 transition-all resize-none"
                placeholder="Digite o texto aqui..."
                rows="4"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            {/* Button */}
            <button
              onClick={formatar}
              disabled={loading || !text.trim()}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 rounded-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-8"
            >
              {loading ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  Formatando...
                </>
              ) : (
                <>
                  <Type size={20} />
                  Formatar Texto
                </>
              )}
            </button>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Uppercase Result */}
              {resultadoCaixaAlta && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    MAIÚSCULA
                  </label>
                  <div className="relative">
                    <textarea
                      className="w-full px-5 py-4 border-2 border-blue-300 dark:border-gray-600 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 text-gray-900 dark:text-white readOnly resize-none"
                      rows="6"
                      readOnly
                      value={resultadoCaixaAlta}
                    />
                    <button
                      onClick={() => copyToClipboard(resultadoCaixaAlta, 1)}
                      className="absolute top-3 right-3 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-all flex items-center gap-1 text-xs"
                    >
                      {copiedIndex === 1 ? (
                        <Check size={16} />
                      ) : (
                        <Copy size={16} />
                      )}
                      {copiedIndex === 1 ? "Copiado!" : "Copiar"}
                    </button>
                  </div>
                </div>
              )}

              {/* Lowercase Result */}
              {resultadoCaixaBaixa && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    minúscula
                  </label>
                  <div className="relative">
                    <textarea
                      className="w-full px-5 py-4 border-2 border-indigo-300 dark:border-gray-600 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 text-gray-900 dark:text-white readOnly resize-none"
                      rows="6"
                      readOnly
                      value={resultadoCaixaBaixa}
                    />
                    <button
                      onClick={() => copyToClipboard(resultadoCaixaBaixa, 2)}
                      className="absolute top-3 right-3 bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-lg transition-all flex items-center gap-1 text-xs"
                    >
                      {copiedIndex === 2 ? (
                        <Check size={16} />
                      ) : (
                        <Copy size={16} />
                      )}
                      {copiedIndex === 2 ? "Copiado!" : "Copiar"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextFormat;
