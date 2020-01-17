const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchControler = require('./controllers/SearchController')

const routes = Router()

// Tipos de parametros:
/**
 * Query Params: req.query (Filtros, ordenação, paginação...)
 * Route Params: req.params (Identificar um recurso na alteração ou remoção)
 * Body: req.body (Dados para criação ou alteração de um registro)
 */

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchControler.index)

module.exports = routes
