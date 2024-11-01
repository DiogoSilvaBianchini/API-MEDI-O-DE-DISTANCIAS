# API PARA CALCULO DE FRETE

A API utiliza o MAPBOX para a interação com os dados da OpenStreetMap. Os dados incluem distância entre dois pontos e cordenadas (Longitude e Latitude) e são utilizados
para a medição de distãncia e calculo de frete.

## Como utilizar

A API foi desenvolvida totalmente em node.js. Então para isso tenha a ultima versão do node instalado na máquina que ira rodar a aplicação.

### 1. Faça o clone do projeto:

Utilize git para clonar o projeto. Em seu terminal navegue com o prompt até o diretorio em que deseja clonar o projeto e digite:

```
git clone https://github.com/DiogoSilvaBianchini/API-PARA-CALCULO-DE-FRETE.git
```

### Inicie o projeto utilizando NPM

Navegue até a pasta do projeto com o prompt e digite:

```
npm start
```
Se tudo der certo ira aparecer a seguinte menssagem:
```
http://localhost:8082
```
### Script de desenvolvimento

Caso deseje alterar a API utilize:

```
npm run dev
```

Irá iniciar com o projeto com o nodemon.

## Rotas da API

A API conta com três rotas:

### Rota de diagnostico

A rota de diagnostico serve para saver se a API está rodando é acessado pela URL:

```
http://localhost:8082/
```
### Rota para Calculo de distância

Disponiovel na rota do tipo POST:
```
http://localhost:8082/search
```

Para calcular uma distância a API precisa receber o seguinte JSON no corpo da requisição:

```
{
  localization: {
      "street": "Rua" (String), 
      "city": "Cidade" (String), 
      "state": "Estado" (String)
  },
  destination: {
      "street": "Rua" (String), 
      "city": "Cidade" (String), 
      "state": "Estado" (String)
  }
}

```

#### Respostas:

HTTP 200 OK:
```
{
    "msg": "Percurso encontrado com sucesso!",
    "results": {
        "distance": 0.00 (Number),
        "duration": 0.00 (Number),
        "address": "Endereço de destino" (String)
    },
    "status": 200 (Number)
}
```

HTTP 500 Internal Server Error:
```
{
  msg: "Algo deu errado!" (String),
  results: false (Boolean),
  status: 500 (Number)
}

```

## Rota de calculo de frete:
Disponiovel na rota POST:
```
http://localhost:8082/shipping
```
Para calcular o frete a API precisa receber o seguinte JSON no corpo da requisição:

```
{
  localization: {
      "street": "Rua" (String), 
      "city": "Cidade" (String), 
      "state": "Estado" (String)
  },
  destination: {
      "street": "Rua" (String), 
      "city": "Cidade" (String), 
      "state": "Estado" (String)
  }
}

```
HTTP 200 OK:
```
{
    "msg": "Calculo gerado com sucesso!" (String),
    "results": {
        "price": 0.00 (Number),
        "info": {
            "distance": 0.00 (Number),
            "address": {
              location: Endereço de atual (String),
              Destination: Endereço de destino (String),
            }
        }
    },
    "status": 200 (Number)
}
```

HTTP 500 Internal Server Error:
```
{
  msg: "Algo deu errado!" (String),
  results: false (Boolean),
  status: 500 (Number)
}

```
