const express = require('express')

// creamos APP
const APP = express()
const PORT = process.env.PORT
const IP = process.env.IP

APP.get('/', (req, res) => {
  res.send('Hola mundo')
})

APP.get('/productos', (req, res) => {
  res.json([
    {
      nombre: "Producto 1",
      precio: 1000
    },
    {
      nombre: "Producto 2",
      precio: 2000
    },
    {
      nombre: "Producto 3",
      precio: 3000
    }
  ])
})

APP.get('/productos/:prodId', (req, res) => {
  // const id = req.params.prodId
  const { prodId } = req.params
  res.json({
    prodId,
    name: 'Producto 2',
    precio: 2000
  })
})

APP.get('/categorias/:catId/productos/:prodId', (req, res) => {
  const { catId, prodId } = req.params
  res.json({
    catId,
    prodId
  })
})

APP.listen(PORT, () => {
  console.log("Corriendo en http://"+ IP +":" + PORT + "/");
})
