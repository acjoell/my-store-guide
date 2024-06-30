const express = require('express')
const routerAPI = require('./routes')

// creamos APP
const APP = express()
const PORT = process.env.PORT

// middleware: recibimos datos
APP.use(express.json())

APP.get('/', (req, res) => {
  res.send('Hola mundo')
})

routerAPI(APP)

APP.listen(PORT, () => {
  console.log(`Corriendo en http://localhost:${PORT}/`);
})
