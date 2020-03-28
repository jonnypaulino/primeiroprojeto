const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/**
 * s
 * 
 * GET :Buscar uma informaçao do backeend
 * POST :Criar uma informaçao no backend
 * PUT :Alterar uma informaçao no backend
 * DELETE :Deletar uma informaçao no backend
 */

/**
 * tipos de parametros
 * Querry Params: Parametros nomeados en iados a rota apos "?" (filtros, paginaçao)
 * Roule Params: parametros utilizados para identificar recursos
 * Request Body: corpo da requisicao, criar ou altear usuario
 */







