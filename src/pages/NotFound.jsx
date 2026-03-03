import React from "react";
import { Home, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="text-center max-w-lg">
        <div className="mb-8 flex justify-center">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 rounded-full inline-block">
            <AlertCircle size={64} className="text-white" />
          </div>
        </div>

        <h1 className="text-7xl md:text-8xl font-black mb-4 bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-400 dark:to-pink-400 bg-clip-text text-transparent">
          404
        </h1>

        <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Página não encontrada
        </p>

        <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
          Desculpe, a página que você está procurando não existe ou foi
          removida. Vamos te levar de volta para a segurança!
        </p>

        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <Home size={24} />
          Voltar para Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
