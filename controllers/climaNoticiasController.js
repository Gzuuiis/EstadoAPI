const express = require('express');

const pegarNoticiaClima = require('../services/climaNoticiasService.js');
const formatarEstado = require('../utils/formatEstado.js'); 

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const estado = req.query.estado;

        if (!estado) {
            return res.status(400).json({ error: 'Parâmetro estado não fornecido.' });
        }

        const estadoFormatado = formatarEstado(estado);
        const info = await pegarNoticiaClima.pegarNoticiaClima(estadoFormatado);

         // Mapeie as notícias
         const response = info.articles.map((article) => ({
            noticia:{
                titulo: article.title,
                descricao: article.description,
                imgNoticia: article.urlToImage
            },
            detalhes:{
                fonte: article.url,
                data: article.publishedAt
            }
        }));

        const formattedJson = JSON.stringify(response, null, 2);

        res.status(200).send(formattedJson);
    } catch (error) {
        console.error('Erro ao obter notícias climáticas:', error);
        res.status(500).json({ error: 'Erro do servidor' });
    }
});

module.exports = router;