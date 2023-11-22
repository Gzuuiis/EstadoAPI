const config        = require('../config/config');
const pegarUFEstado = require('../utils/ufEstado');

const pegarNewsEstado = async (estado) => {
    try {

        const{ default: fetch } = await import('node-fetch');

        const ufEstado = await pegarUFEstado(estado);

        const newsApiURL = `https://newsapi.org/v2/everything?https://g1.globo.com/${ufEstado}/&q=${estado}&language=pt&apiKey=${config.apiKeyNews}`;

        const resposta = await fetch(newsApiURL);
        const info = await resposta.json();

        return info;
    } catch (error) {
        console.error('Erro ao obter notícias:', error);
        throw error;
    }
};
    
module.exports = {
    pegarNewsEstado
}