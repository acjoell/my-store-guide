const express = require('express')
const routerAPI = require('./routes')
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')
const cors = require('cors')

// creamos APP
const APP = express()
const PORT = process.env.PORT || 3000

// middleware: recibimos datos
APP.use(express.json())

// Acceso a nuestra API
const whitelist = ['http://localhost:8080', 'https://joel_app.co', 'http://127.0.0.1:5500']
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Acceso no garantizado'))
    }
  }
}
APP.use(cors(options))

APP.get('/api', (req, res) => {
  res.send('Hola mundo')
})

routerAPI(APP)

APP.use(logErrors)
APP.use(boomErrorHandler)
APP.use(errorHandler)

APP.listen(PORT, () => {
  console.log(`Corriendo en http://localhost:${PORT}/`);
})
