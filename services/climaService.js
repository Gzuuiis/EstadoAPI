const config = require('../config/config');

const pegarInfoTempo = async (estado) => {
    try {

        const{ default: fetch } = await import('node-fetch');

        const climaApiURL = `https://api.openweathermap.org/data/2.5/weather?q=${estado}&appid=${config.apiKeyClima}`;


        const resposta = await fetch(climaApiURL);
        const info = await resposta.json();

        return info;
    } catch (error) {
        console.error('Erro ao obter imagem:', error);
        throw error;
    }
};

module.exports = {
    pegarInfoTempo
}