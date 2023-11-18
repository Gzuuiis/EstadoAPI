const express = require('express');

const pegarNewsEstado = require('../services/newsService.js');
const formatarEstado = require('../utils/utilidades.js'); 

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const estado = req.query.estado;

        if (!estado) {
            return res.status(400).json({ error: 'Parâmetro estado não fornecido.' });
        }

        const estadoFormatado = formatarEstado(estado);
        const info = await pegarNewsEstado.pegarNewsEstado(estadoFormatado);

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

        res.status(200).json(response);
    } catch (error) {
        console.error('Erro ao obter notícias climáticas:', error);
        res.status(500).json({ error: 'Erro do servidor' });
    }
});

module.exports = router;