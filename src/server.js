// Importando o Express
const express = require('express');

// Criando uma aplicação Express
const app = express();

const apiRouter = require('./routes');
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));

app.use(apiRouter);

exports.app = app
