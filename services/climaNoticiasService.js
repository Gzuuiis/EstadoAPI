const config = require('../config/config');

const pegarNoticiaClima = async (estado) => {
    try {

        const{ default: fetch } = await import('node-fetch');

        const noticiaClimaURL = `https://newsapi.org/v2/everything?domains=climatempo.com.br&q=${estado}&sortBy=relevancy&apiKey=${config.apiKeyNews}`;

        const resposta = await fetch(noticiaClimaURL);
        const info = await resposta.json();

        return info;
    } catch (error) {
        console.error('Erro ao obter Noticia Climática do Estado:', error);
        throw error;
    }
};

module.exports = {
    pegarNoticiaClima
}