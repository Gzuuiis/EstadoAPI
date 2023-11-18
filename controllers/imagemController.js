const express = require('express');

const pegarFotoEstado = require('../services/imagemService.js');
const formatarEstado = require('../utils/utilidades.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const estado = req.query.estado;

        if (!estado) {
            return res.status(400).json({ error: 'Parâmetro estado não fornecido.' });
        }

        const estadoFormatado = formatarEstado(estado);
        const info = await pegarFotoEstado.pegarFotoEstado(estadoFormatado);

        // Limitei as 3 primeiras imagens
        const response = info.results.map((foto) => ({
            descricao: foto.description,
            urlFoto: foto.urls.regular,
            usuario: foto.user.username,
            perfilUsuario: foto.user.links.html
        }));

        res.status(200).json(response);
        
    } catch (error) {
        console.error('Erro ao obter foto do Estado:', error);
        res.status(500).json({ error: 'Erro do servidor' });
    }
});

module.exports = router;