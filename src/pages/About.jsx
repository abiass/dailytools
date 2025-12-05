import React from "react";

function About() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">
        Sobre o Projeto
      </h1>
      <p className="text-gray-700 leading-relaxed dark:text-gray-300">
        O DailyTools é um conjunto de ferramentas online pensado para facilitar
        tarefas do dia a dia e aumentar a produtividade. Ele reúne utilitários
        simples e rápidos, como contador de caracteres, removedor de caracteres
        especiais, regra de três, sorteio de palavras e formatação de texto
        (maiúsculo/minúsculo).<br></br>O projeto foi desenvolvido com React no
        frontend, Node.js + Express no backend e Tailwind CSS na estilização. O
        site está hospedado na Vercel, enquanto a API roda na Render, ambos com
        deploy automático integrado ao GitHub. Criado como um projeto pessoal, o
        DailyTools tem como objetivo treinar tecnologias modernas de
        desenvolvimento web e, ao mesmo tempo, oferecer ferramentas realmente
        úteis para o uso cotidiano. O projeto é totalmente público e continua em
        evolução.
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
