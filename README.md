# EstadoAPI

## Apresentação: 

  

Projeto **EstadoAPI**:  utilizando Stack **NodeJS** 

  

Pacotes principais: **Express** responsável pela criação de rotas.
**Cheerio** para raspagem de dados da página do Wikipedia. 


APIs Utilizadas: OpenWeather, NewsApi, Unsplash, Wikipedia
 

## Instalação: 

- Instalar dependência: `yarn install` ou `npm install` 

- Iniciar aplicação em produção: `yarn start`
  
- Após Inicialização e Configuração, devemos ir em `localhost:3000/`

 

## Configuração: 
 

Necessários gerar as APIKeys nas seguintes APIs: 

 
- OpenWeather: https://openweathermap.org/price 

- Unsplash: https://unsplash.com/documentation 

- NewsApi: https://newsapi.org/ 

 

Após serem geradas, colocar as KEYS no arquivo config.js localizado na pasta config. 


## Rotas 

  

- [x] pegar clima do estado 

```java 

app.use('/clima', climaController); 

{  

"clima": { 

  	"nomeEstado" : "Rio de Janeiro", 

"nomePais" : "BR", 

"temperatura" :  

{  

"tempQT" : 33.68, 

"tempDesc" : "céu limpo" },	 

"tempoDetalhes" : {  

"ventania" : 2.57, 

"umidade":64, 

"pressao":1004 }, 

"coordenadas": { 

"latitude" : -22.9028, 

"longitude":-43.2075 }	 

}           }       } 
```


- [x] pegar notícias relacionadas ao Estado 


```java 

app.use('/news', newsController); 

{ 

"noticia" :  

{"título": "Carolina Bohrer entre as semifinalistas do pré-quali do Australian Open no Rio de Janeiro", 

"descricao": " Quatro brasileiros estão nas semifinais do masculino e do feminino do Australian Open Junior ...", 

"imgNoticia":"https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2023/11/17/720377733-carolinabohrerrio23med2.jpg" 

}, "detalhes": { 

 "fonte":"  https://www.lance.com.br/tenis/carolina-bohrer-entre-as-semifinalistas-do-pre-quali-do-australian-open-no-rio-de-janeiro.html ", 

"data": "2023-11-17T14:08:39Z"} 

} 

```

- [x] pegar imagens relacionadas ao Estado 

  

```java 

app.use('/imagem', imagemController); 

{ 

"descricao": "Wildest sunset ever", 

"urlFoto": https://images.unsplash.com/photo-1483729558449-99ef09a8c325?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjg2NDZ8MHwxfHNlYXJjaHwxfHxyaW8lMjBkZSUyMGphbmVpcm98ZW58MHx8fHwxNzAwMzE2OTMxfDA&ixlib=rb-4.0.3&q=80&w=1080, 

"usuario": "agustindiazg", 

"perfilUsuario": https://unsplash.com/@agustindiazg 

}
```


- [x] pegar informações relacionadas ao Estado 

  

```java 

app.use('/wiki', wikipediaController); 

{ 

  { "informações": 
    { 
      "texto": "Rio de Janeiro (informalmente referido como Rio) e originalmente em sua fundação (São Sebastião do Rio de Janeiro), é um município brasileiro, capital do estado homônimo, situado no Sudeste do país. Maior destino turístico internacional no Brasil, da   
   América Latina e de todo o Hemisfério Sul (em 2008), a capital fluminense é a cidade brasileira mais conhecida no exterior, funcionando como um \"espelho\", ou \"retrato\" nacional, seja positiva ou negativamente. É a segunda maior metrópole do Brasil (depois de São 
   Paulo), a sexta maior da América e a trigésima quinta do mundo. Sua população estimada pelo IBGE para o censo de 2022 era de 6 211 423 habitantes. Tem o epíteto de Cidade Maravilhosa, e os que nela nascem são chamados de cariocas.\nClassificada como uma metrópole, 
   exerce influência nacional, seja do ponto de vista cultural, econômico ou político brasileiros, e é um dos principais centros econômicos, culturais e financeiros do país, sendo internacionalmente conhecida por diversos ícones culturais e paisagísticos, como o Pão de 
   Açúcar, o morro do Corcovado com a estátua do Cristo Redentor, as praias dos bairros de Copacabana, Ipanema e Barra da Tijuca, entre outras; os estádios do Maracanã e Nilton Santos; o bairro boêmio da Lapa e seus arcos; o Theatro Municipal do Rio de Janeiro; as 
   florestas da Tijuca e da Pedra Branca; a Quinta da Boa Vista; a Biblioteca Nacional; a ilha de Paquetá; o réveillon de Copacabana; o carnaval carioca; a Bossa Nova e o samba. Parte da cidade foi designada Patrimônio Cultural da Humanidade pela UNESCO em 1 de julho de 
   2012.Representa o segundo maior PIB do país (e o 30.º maior do mundo), estimado em cerca de 329 bilhões de reais (IBGE/2016), e é sede das duas maiores empresas brasileiras — a Petrobras e a Vale, e das principais companhias de petróleo e telefonia do Brasil, além do 
   maior conglomerado de empresas de mídia e comunicações da América Latina, o Grupo Globo. Contemplado por grande número de universidades e institutos, é o segundo maior polo de pesquisa e desenvolvimento do Brasil, responsável por 19% da produção científica nacional, 
   segundo dados de 2005. Rio de Janeiro é considerada uma cidade global beta — pelo inventário de 2008 da Universidade de Loughborough (GaWC).\nA cidade foi, sucessivamente, capital da colônia portuguesa do Estado do Brasil (1763–1815), depois do Reino Unido de 
   Portugal, Brasil e Algarves (1815–1822), do Império do Brasil (1822–1889) e da República dos Estados Unidos do Brasil (1889–1968) até 1960, quando a sede do governo foi transferida definitivamente para a recém-construída Brasília. Naquele ano, o Rio foi transformado 
   em uma cidade-estado com o nome de Guanabara e, somente em 1975, torna-se a capital do estado do Rio de Janeiro.\n"
   } 
  }

}
```
