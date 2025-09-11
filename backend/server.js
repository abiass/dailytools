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
    return res.status(400).json({ error: "Todos os valores são obrigatórios" });
  }

  const resultado = (b * c) / a;
  res.json({ resultado: resultado.toFixed(2) });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
