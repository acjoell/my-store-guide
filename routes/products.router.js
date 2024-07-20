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
  if(prodId === '0') {
    // res.statusCode = 404
    res.status('404').json({
      prodId,
      name: 'product not found',
    })
  } else {
    res.json({
      prodId,
      name: 'product 2',
      precio: 2000
    })
  }
})

router.post('/', (req, res) => {
  const body = req.body
  res.json({
    message: 'product created',
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  res.json({
    id,
    message: 'product updated',
    data: body
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    message: 'product deleted'
  })
})

module.exports = router