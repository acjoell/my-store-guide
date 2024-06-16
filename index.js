const express = require('express')

// creamos APP
const APP = express()
const PORT = process.env.PORT
const IP = process.env.IP

APP.get('/', (req, res) => {
  res.send('Hola mundo')
})

APP.get('/productos', (req, res) => {
  res.json({
    nombre: "Producto 1",
    precio: 1000
  })
})

APP.listen(PORT, () => {
  console.log("Corriendo en http://"+ IP +":" + PORT + "/");
})
