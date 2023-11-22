const express = require('express');

const pegarWikipediaInfo = require('../services/wikipediaService.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const estado = req.query.estado;

        // Verificar se o estado foi fornecido
        if (!estado) {
            return res.status(400).json({ error: 'Parâmetro estado não fornecido.' });
        }

        const info = await pegarWikipediaInfo.buscarInformacoesWikipedia(estado);

        console.log(info);

        const response = {
            informações:{
                texto: info
            }
        };

        // Chamar response() para obter o objeto e formatar a resposta JSON
        const formattedJson = JSON.stringify(response, null, 2);

        res.status(200).send(formattedJson);
    } catch (error) {
        console.error('Erro ao obter informações da Wikipedia:', error);
        res.status(500).json({ error: 'Erro do servidor', details: error.message });
    }
});

module.exports = router;
