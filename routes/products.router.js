const express = require('express')
const ProductsService = require('./../services/product.service')

const router = express.Router()
const service = new ProductsService()

// /products
router.get('/', async (req, res) => {
  const products = await service.find()
  res.json({size: products.length, products})
})  

// /products/:id
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const product = await service.findOne(id)

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res) => {
  const body = req.body
  const newOne = await service.create(body)

  res.status(201).json({
    message: 'product created',
    data: newOne
  })
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const body = req.body
    const product = await service.update(id, body)
    
    res.json({
      message: 'product updated',
      data: product
    })
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const action = await service.delete(id)
  res.json(action)
})

module.exports = router