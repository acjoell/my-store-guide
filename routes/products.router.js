const express = require('express')
const ProductsService = require('./../services/product.service')

const router = express.Router()
const service = new ProductsService()

// /products
router.get('/', (req, res) => {
  const { size } = req.query;
  const products = service.find(size)
  res.json({size: products.length, products})
})  

// /products/:id
router.get('/:id', (req, res) => {
  const { id } = req.params
  const product = service.findOne(id)
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
})

router.post('/', (req, res) => {
  const body = req.body
  const newOne = service.create(body)
  res.json({
    message: 'product created',
    data: newOne,
    status: 201
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  const product = service.update(id, body)
  res.json({
    message: 'product updated',
    data: product
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const action = service.delete(id)
  res.json(action)
})

module.exports = router