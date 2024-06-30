const express = require('express')
const { faker } = require('@faker-js/faker')

const router = express.Router()

router.get('/', (req, res) => {
  const categories = []

  const { size } = req.query
  const limit = size || 10

  for (let i = 0; i < limit; i++) {
    categories.push({
      name: faker.commerce.department(),
      image: faker.image.url()
    })
  }

  res.json(categories)
})

// /categories/:catId/products/:prodId
router.get('/:catId/products/:prodId', (req, res) => {
  const { catId, prodId } = req.params
  res.json({
    catId,
    prodId
  })
})

router.post('/', (req, res) => {
  const body = req.body
  res.json({
    message: 'category created',
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  res.json({
    id,
    message: 'category updated',
    data: body
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    message: 'category deleted'
  })
})

module.exports = router