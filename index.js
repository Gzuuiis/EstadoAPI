const { app, porta } = require("./config/server.js");

const climaController           = require('./controllers/climaController.js');
const noticiasController        = require('./controllers/noticiasController.js');
const imagemController          = require('./controllers/imagemController.js');
const climaNoticiasController   = require('./controllers/climaNoticiasController.js');
const wikiController            = require('./controllers/wikipediaController.js');

// Requisitando minhas rotas
app.use('/clima', climaController);
app.use('/noticias', noticiasController);
app.use('/imagem', imagemController);
app.use('/clima-noticias', climaNoticiasController);
app.use('/wiki', wikiController);

app.listen(porta, () => {
    console.log(`Servidor em execução na porta ${porta}`);
});