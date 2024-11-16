// Importando o Express
const express = require('express');

// Criando uma aplicação Express
const app = express();

// Rota principal
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Rota adicional
app.get('/about', (req, res) => {
    res.send('Este é um servidor básico com Express.');
});

exports.app = app
