const cheerio = require('cheerio');

const buscarInformacoesWikipedia = async (estado) => {
    try {
        const apiUrl = `https://pt.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${estado}&utf8=1&exintro=1`;

        const resposta = await fetch(apiUrl);
        const dados = await resposta.json();

        const pages = dados.query.pages;

        const pageId = Object.keys(pages)[0];
        const content = pages[pageId].extract;

        const $ = cheerio.load(content);

        const info = $('p').text(); 

        return info;
    } catch (error) {
      console.error('Erro ao buscar informações na Wikipedia:', error);
    }
  };

module.exports = {
    buscarInformacoesWikipedia
}