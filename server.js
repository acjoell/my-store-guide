const express = require('express')
const routerAPI = require('./routes')
const { logErrors, errorHandler } = require('./middlewares/error.handler')

// creamos APP
const APP = express()
const PORT = process.env.PORT

// middleware: recibimos datos
APP.use(express.json())

APP.get('/', (req, res) => {
  res.send('Hola mundo')
})

routerAPI(APP)

APP.use(logErrors)
APP.use(errorHandler)

APP.listen(PORT, () => {
  console.log(`Corriendo en http://localhost:${PORT}/`);
})
