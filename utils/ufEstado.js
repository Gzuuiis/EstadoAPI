const http = require('http');

function pegarUFEstado(estadoDesejado) {
  return new Promise((resolve, reject) => {
    // Fazer requisição HTTP para obter dados dos estados
    const url = 'http://servicodados.ibge.gov.br/api/v1/localidades/estados';

    http.get(url, (response) => {
      let data = '';

      // Agregar os dados da resposta
      response.on('data', (chunk) => {
        data += chunk;
      });

      // Processar os dados após a conclusão da resposta
      response.on('end', () => {
        try {
          const estados = JSON.parse(data);

          // Encontrar a sigla do estado (não case-sensitive)
          const estado = estados.find((estado) => estado.nome.toLowerCase() === estadoDesejado.toLowerCase());

          if (estado) {
            const siglaMinuscula = estado.sigla.toLowerCase();
            resolve(siglaMinuscula);
          } else {
            reject(`Estado ${estadoDesejado} não encontrado na lista`);
          }
        } catch (error) {
          reject(`Erro ao processar os dados: ${error}`);
        }
      });
    }).on('error', (error) => {
      reject(`Erro ao fazer a requisição: ${error}`);
    });
  });
}

module.exports = pegarUFEstado;
