const express = require('express');

const pegarInfoTempo = require('../services/climaService.js');
const formatarEstado = require('../utils/formatEstado.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const estado = req.query.estado;

        if (!estado) {
            return res.status(400).json({ error: 'Parâmetro estado não fornecido.' });
        }

        const estadoFormatado = formatarEstado(estado);
        const info = await pegarInfoTempo.pegarInfoTempo(estadoFormatado);

        //Convertendo temperatura de Kelvin para Celsius
        const tempQtC = parseInt(info.main.temp - 273);

        const response = {
            clima: {
                nomeEstado: info.name,
                nomePais: info.sys.country,
                icone: info.weather[0].icon,
                temperatura: {
                    tempQT: tempQtC,
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



        const formattedJson = JSON.stringify(response)



        res.status(200).send(formattedJson);


    } catch (error) {
        console.error('Erro ao obter informações climáticas:', error);
        res.status(500).json({ error: 'Erro do servidor' });
    }
});

module.exports = router;