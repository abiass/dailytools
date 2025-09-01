const express = require("express");
const cors = require("cors");
const { X } = require("lucide-react");

const app = express();
app.use(cors());
app.use(express.json());

const teste = [ 12, 15, 11 ]; // Exemplo de valores iniciais

// rota regra de 3
app.post("/regra3", (req, res) => {
  const { a, b, c } = req.body;
  if (!a || !b || !c) {
    return res.status(400).json({ error: "Valores inválidos" });
  }
  const x = (b * c) / a;
  res.json({ resultado: x });
});

app.get("/", (req, res) => {
  res.send("API de Regra de 3 funcionando!");
});

const PORT = 3001;
app.listen(PORT, () => console.log(`✅ Backend rodando em http://localhost:${PORT}`));
