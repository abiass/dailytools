import React from "react";

function About() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">
        Sobre o Projeto
      </h1>
      <p className="text-gray-700 leading-relaxed dark:text-gray-300">
        Este site foi desenvolvido para centralizar ferramentas úteis do dia a
        dia, com foco em simplicidade e praticidade. A primeira calculadora
        disponível é a de <strong>Regra de 3</strong>, mas em breve novas
        ferramentas serão adicionadas. A nova ferramenta adicionada é a de{" "}
        <strong>Remover Caracteres Especiais</strong>, que permite limpar textos
        de forma rápida e eficiente.
      </p>
      <p className="text-gray-700 leading-relaxed mt-4 dark:text-gray-300">
        O objetivo é facilitar tarefas comuns, oferecendo soluções rápidas sem
        complicações. Fique à vontade para explorar as ferramentas e sugerir
        novas funcionalidades!
      </p>
    </div>
  );
}

export default About;
