import React from "react";

function About() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-indigo-700">
        Sobre o Projeto
      </h1>
      <p className="text-gray-700 leading-relaxed">
        Este site foi desenvolvido para centralizar ferramentas úteis do dia a
        dia, com foco em simplicidade e praticidade. A primeira calculadora
        disponível é a de <strong>Regra de 3</strong>, mas em breve novas
        ferramentas serão adicionadas.
      </p>
    </div>
  );
}

export default About;
