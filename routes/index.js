const pRouter = require('./products.router');
const cRouter = require('./categories.router');
const uRouter = require('./users.router');

const parentRoute = '/api'

const routerAPI = app => {
  app.use('/products', pRouter)
  app.use('/categories', cRouter)
  app.use('/users', uRouter)
}

module.exports = routerAPI