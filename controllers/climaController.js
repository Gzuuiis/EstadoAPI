const express = require('express');

const pegarInfoTempo = require('../services/climaService.js');
const formatarEstado = require('../utils/utilidades.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const estado = req.query.estado;

        if (!estado) {
            return res.status(400).json({ error: 'Parâmetro estado não fornecido.' });
        }

        const estadoFormatado = formatarEstado(estado);
        const info = await pegarInfoTempo.pegarInfoTempo(estadoFormatado);

        const response = {
            clima: {
                nomeEstado: info.name,
                nomePais: info.sys.country,
                icone: info.weather.icon,
                temperatura: {
                    tempQT: info.main.temp,
                    tempDesc: info.weather[0].description,
                },
                tempoDetalhes: {
                    ventania: info.wind.speed,
                    umidade: info.main.humidity,
                    pressao: info.main.pressure,
                    nivelMar: info.main.sea_level
                },
                coordenadas:{
                    latitude:info.coord.lat,
                    longitude: info.coord.lon
                }
                
            }
        };

        res.status(200).json(response);
    } catch (error) {
        console.error('Erro ao obter informações climáticas:', error);
        res.status(500).json({ error: 'Erro do servidor' });
    }
});

module.exports = router;