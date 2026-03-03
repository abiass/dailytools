// server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Rota para a Regra de 3
app.post("/api/regra3", (req, res) => {
  const { a, b, c } = req.body;

  if (!a || !b || !c) {
    return res.status(400).json({ erro: "Parâmetros inválidos. Envie a, b e c." });

  }

  const resultado = (b * c) / a;
  res.json({ resultado: resultado.toFixed(2) });
});


// Rota para remover caracteres especiais
app.post("/api/removeChars", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ erro: "Texto obrigatório." });
  
  const cleanedText = text.replace(/[^a-zA-Z0-9À-ÿ\s]/g, "");
  res.json({ resultado: cleanedText });
 
});

// Rota para formatar caracteres especiais
app.post("/api/textformat", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ erro: "Texto obrigatório." });

  const upper = text.toUpperCase();
  const lower = text.toLowerCase();
  const capitalized = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
 

  res.json({
    caixaAlta: upper,
    caixaBaixa: lower,
    primeiraMaiuscula: capitalized,
    

  });
});

app.post("/api/charcount", (req, res) => {
  const { text } = req.body;

  if (!text || text.trim() === "") {
    return res.json({ charCount: 0, wordCount: 0 });
  }

  const trimmed = text.trim();

  const charCount = Array.from(text).length;
 
  const wordCount = trimmed ? trimmed.split(/\s+/).length : 0;

  res.json({ charCount, wordCount });
});

app.post("/api/sorteio", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ erro: "Texto obrigatório." }); 

  const names = text.split(/[\s,]+/).filter(Boolean);
  if (names.length === 0) {
    return res.status(400).json({ erro: "Nenhum nome válido fornecido." });
  } 
  const randomIndex = Math.floor(Math.random() * names.length);
  const result = names[randomIndex]; 
  res.json({ result });
});

// Rota para contar diferença entre datas
app.post("/api/datacount", (req, res) => {
  const { dataInicio, dataFim } = req.body;

  if (!dataInicio || !dataFim) {
    return res.status(400).json({ erro: "Data de início e fim são obrigatórias." });
  }

  const dataInicioObj = new Date(dataInicio);
  const dataFimObj = new Date(dataFim);

  if (isNaN(dataInicioObj.getTime()) || isNaN(dataFimObj.getTime())) {
    return res.status(400).json({ erro: "Formato de data inválido." });
  }

  if (dataFimObj < dataInicioObj) {
    return res.status(400).json({ erro: "A data final não pode ser menor que a data inicial." });
  }

  const diferenca = dataFimObj - dataInicioObj;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferenca - dias * 1000 * 60 * 60 * 24) / (1000 * 60 * 60)
  );
  const minutos = Math.floor(
    (diferenca - dias * 1000 * 60 * 60 * 24 - horas * 1000 * 60 * 60) / (1000 * 60)
  );
  const segundos = Math.floor(
    (diferenca - dias * 1000 * 60 * 60 * 24 - horas * 1000 * 60 * 60 - minutos * 1000 * 60) / 1000
  );

  const totalDias = dias;
  const totalHoras = Math.floor(diferenca / (1000 * 60 * 60));
  const totalMinutos = Math.floor(diferenca / (1000 * 60));
  const totalSegundos = Math.floor(diferenca / 1000);

  res.json({
    dias,
    horas,
    minutos,
    segundos,
    totalDias,
    totalHoras,
    totalMinutos,
    totalSegundos,
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(` Servidor rodando em http://localhost:${PORT}`);
});


