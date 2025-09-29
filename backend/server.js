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
    return res.json({ resultado: convertido.toFixed(2) });

  }

  const resultado = (b * c) / a;
  res.json({ resultado: resultado.toFixed(2) });
});


// Rota para o conversor de tempo
app.post("/api/conversor-tempo", (req, res) => {
  const { valor, unidadeOrigem, unidadeDestino } = req.body;
  res.json({ resultado: "Funcionalidade em desenvolvimento" });
})


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
