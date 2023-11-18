const config = require('../config/config');

const pegarNewsEstado = async (estado) => {
    try {

        const{ default: fetch } = await import('node-fetch');

        const newsApiURL = `https://newsapi.org/v2/everything?q=${estado}%20&from=2023-11-17&sortBy=publishedAt&apiKey=${config.apiKeyNews}`;

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