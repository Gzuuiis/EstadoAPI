const express = require('express');
const cors = require('cors');


const climaController = require('./controllers/climaController.js');
const newsController = require('./controllers/newsController.js')
const imagemController = require('./controllers/imagemController.js')


const app = express();
const porta = 3000;

app.use(express.json());

app.use(cors());

// Requisitando minhas rotas
app.use('/clima', climaController);
app.use('/news', newsController);
app.use('/imagem', imagemController);



// Iniciando Servidor
app.listen(porta, () => {
    console.log(`Servidor em execução na porta ${porta}`);
});