const express = require('express')
const routerAPI = require('./routes')

// creamos APP
const APP = express()
const PORT = process.env.PORT
const IP = process.env.IP

APP.get('/', (req, res) => {
  res.send('Hola mundo')
})

routerAPI(APP)

APP.listen(PORT, () => {
  console.log("Corriendo en http://"+ IP +":" + PORT + "/");
})
