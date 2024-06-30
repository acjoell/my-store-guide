const express = require('express')
const { faker } = require('@faker-js/faker')

const router = express.Router()

// /products
router.get('/', (req, res) => {
  const products = []

  const { size } = req.query
  const limit = size || 10

  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.product(),
      price: faker.commerce.price({ min: 1000, max: 20000 }),
      image: faker.image.url()
    })
  }

  res.json(products)
})

// /products/filter
router.get('/filter', (req, res) => {
  res.send()
})

// /products/:prodId
router.get('/:prodId', (req, res) => {
  // const id = req.params.prodId
  const { prodId } = req.params
  res.json({
    prodId,
    name: 'product 2',
    precio: 2000
  })
})

module.exports = router