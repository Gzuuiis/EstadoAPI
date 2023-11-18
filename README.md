# EstadoAPI

## Apresentação: 

  

Projeto **InfoEstado**:  utilizando Stack **NodeJS** 

  

Pacotes principais: **Express** responsável pela criação de rotas. **** 

 

## Instalação: 

  

- Instalar dependência: `yarn install` ou `npm install` 

- Iniciar aplicação em produção: `yarn start` 

 

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

 
