const express = require('express');
const rotas = require('./rotas/rotas');
const porta = process.env.PORT || 3000

const app = express();

const resultado = () => {
    console.log("Rodando...")
}

app.use('/', rotas);

app.get('*', (req, res) => {
    res.send('Cursos');
});

app.listen(porta, resultado); // acesse http://localhost:3000/