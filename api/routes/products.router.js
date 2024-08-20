const express = require('express')
const ProductsService = require('./../services/product.service')
const validatorHandler = require('./../middlewares/validator.handler')
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema')

const router = express.Router()
const service = new ProductsService()

// /products
router.get('/', async (req, res) => {
  const products = await service.find()
  res.json({size: products.length, products})
})  

// /products/:id
router.get('/:id', 
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
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

router.post('/', 
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
  const body = req.body
  const newOne = await service.create(body)

  res.status(201).json({
    message: 'product created',
    data: newOne
  })
})

router.patch('/:id', 
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params
    const body = req.body
    const product = await service.update(id, body)
    
    res.json({
      message: 'product updated',
      data: product
    })
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const action = await service.delete(id)
  res.json(action)
})

module.exports = router