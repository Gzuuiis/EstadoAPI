// Iniciando Servidor
const express = require('express');
const app = express();
const porta = 3000;

app.use(express.json());

module.exports = { app, porta };
