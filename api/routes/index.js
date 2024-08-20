const { Router } = require('express')
const pRouter = require('./products.router');
const cRouter = require('./categories.router');
const uRouter = require('./users.router');

const parentRoute = `/api`

const routerAPI = app => {
  // generamos un path global para los endpoints
  const router = Router()
  app.use(parentRoute, router)

  // /desa/ver.../...
  router.use('/products', pRouter)
  router.use('/categories', cRouter)
  router.use('/users', uRouter)
}

module.exports = routerAPI