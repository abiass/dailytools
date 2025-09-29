import React, { useState } from "react";

function ConverterTempo() {
  const [valor, setValor] = useState("");
  const [unidade, setUnidade] = useState("");
  const [resultado, setResultado] = useState(null);

  const converter = () => {
    if (!valor) return;
    let segundos = 0;
    switch (unidade) {
      case "dias":
        segundos = valor * 24 * 60 * 60;
        break;
    }
  };
}

const ConversorTempo = () => {
  return <div>Em desenvolvimento</div>;
};

export default ConversorTempo;
