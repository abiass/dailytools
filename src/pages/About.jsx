import React from "react";
import { Lightbulb, Zap, Code2, Rocket } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Sobre o Projeto
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Conheça a história e os objetivos do DailyTools
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-blue-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Lightbulb className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Ideia
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Um conjunto de ferramentas online para facilitar tarefas do dia a
              dia e aumentar a produtividade com soluções rápidas e práticas.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-indigo-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Zap className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Objetivo
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Oferecer soluções rápidas e gratuitas sem complicações, de forma
              intuitiva e visualmente atraente para melhorar o dia a dia.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-purple-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Rocket className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Missão
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Simplificar tarefas comuns com ferramentas práticas em um único
              lugar, mantendo qualidade, rapidez e uma experiência do usuário
              excelente.
            </p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-blue-100 dark:border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Code2 className="text-indigo-600 dark:text-indigo-400" size={32} />
            Tecnologias Utilizadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
                Frontend
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  React.js (v19)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Tailwind CSS (v4)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  React Router DOM
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Lucide Icons
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-lg">
                Backend & Deploy
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Node.js + Express
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Vercel (Frontend)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Render (Backend)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  GitHub (Versionamento)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-3xl p-8 md:p-12 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Ferramentas Disponíveis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span>Regra de 3 Simples</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span>Remover Caracteres Especiais</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span>Formatador de Texto</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span>Contador de Caracteres</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span>Sorteio Online</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-white rounded-full"></span>
              <span>Contagem de Datas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
