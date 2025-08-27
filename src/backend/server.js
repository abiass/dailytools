const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/pages/:Regra3', (req, res ) => {
    const { a, b, c } = req.body;
    if (!a || !b || !c) {
        return res.status(400).json({ error: 'Parâmetros inválidos' });
    }

    const x = (b * c) / a;
    res.json({ resultado: x});
})

app.listen(3000);