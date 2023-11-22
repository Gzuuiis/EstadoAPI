const express = require('express');

const pegarNewsEstado = require('../services/noticiasService.js');
const formatarEstado = require('../utils/formatEstado.js'); 

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const estado = req.query.estado;

        // Verificar se o estado foi fornecido
        if (!estado) {
            return res.status(400).json({ error: 'Parâmetro estado não fornecido.' });
        }

        // Formatar o estado (pode incluir validação adicional)
        const estadoFormatado = formatarEstado(estado);

        // Verificar se o estado é válido antes de fazer a chamada da API
        // (isso depende da implementação específica da função formatarEstado)
        if (!estadoFormatado) {
            return res.status(400).json({ error: 'Estado inválido fornecido.' });
        }

        // Obter notícias do estado
        const info = await pegarNewsEstado.pegarNewsEstado(estadoFormatado);

        // Mapear as notícias
        const response = info.articles.map((article) => ({
            noticia: {
                titulo: article.title,
                descricao: article.description,
                imgNoticia: article.urlToImage,
            },
            detalhes: {
                fonte: article.url,
                data: article.publishedAt,
            },
        }));

        const formattedJson = JSON.stringify(response, null, 2);

        res.status(200).send(formattedJson);
    } catch (error) {
        console.error('Erro ao obter notícias:', error);
        res.status(500).json({ error: 'Erro do servidor', details: error.message });
    }
});

module.exports = router;
