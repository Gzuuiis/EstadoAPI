const config = require('../config/config');

const pegarFotoEstado = async (estado) => {
    try {

        const{ default: fetch } = await import('node-fetch');

        const fotoApiURL = `https://api.unsplash.com/search/photos?page=1&query=${estado}&client_id=${config.apiKeyImagem}`;

        const resposta = await fetch(fotoApiURL);
        const info = await resposta.json();

        return info;
    } catch (error) {
        console.error('Erro ao obter imagem:', error);
        throw error;
    }
};

module.exports = {
    pegarFotoEstado
}