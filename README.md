
<h1 align="center">
    <img src="https://raw.githubusercontent.com/Rocketseat/bootcamp-gostack-desafio-02/master/.github/logo.png" >
</h1>

<h2 align="center">
    FastFeet, A Tecnologia Mais Rapída em suas Entregas!  🚚
</h2>


# Clonando Este Projeto

```
$ git clone https://github.com/caiocfsa/FastFeet.git
```

# :warning: Requisitos 

Para executar este projeto todo, você precisa ter os pacotes instalados:

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://legacy.yarnpkg.com/en/)

# :pushpin: Backend

- API RESTFUL criada com Node.js utilizando [express](https://expressjs.com/pt-br/).

- Para o Banco de Dados usado PostgresSQL com [sequelize](https://sequelize.org/v5/).

## ⚡️ 

- Para Usar está API você precisa ter o PostgresSQL, instalador[Docker](https://www.docker.com/)

-Se você não deseja instalar o DOCKER, use o convencional [Postgres](https://www.postgresql.org/download/)

### Rodando Postgres com DOCKER: 🐋

```
$ docker run --name some-postgres -e POSTGRES_PASSWORD=suasenha -d postgres
```

#### Se você já possui um contêiner no Postgres, execute:

```
$ docker start "NOME DO CONTAINER"
```

- Para Atualizações em segundo Plano utilizo o Redis junto ao DOCKER.

- Faça a Instalação de Redis [Redis](https://chocolatey.org/packages/redis-64) via [Chocolatey](https://chocolatey.org/docs/installation) .

### Utilizando Redis com DOCKER: 🐋

```
$ docker run --name some-redis -d redis
```

#### Se você já possui um contêiner com o Redis, execute:

```
$ docker start "NOME DO CONTAINER"
```

### Em um novo Terminal Execute:

```
$ cd backend

$ yarn

$ yarn sequelize db:create

$ yarn sequelize db:migrate

$ yarn sequelize db:seed:all

$ yarn dev
```

### :boom: FrontEnd


- Para rodar o FrontEnd

```
$ cd frontend

$ yarn

$ yarn start
```
(Obs: Lembre de Deixar em Services/api a mesma do BackEnd)

### :boom: Mobile


- Para rodar o Mobile

Utilize um Emulador Android ou IOS rodando.

```
$ cd Mobile

$ yarn

$ yarn start

$ yarn android ou $ yarn ios

```
(Obs: Lembre de Deixar em Services/api a mesma do BackEnd)

