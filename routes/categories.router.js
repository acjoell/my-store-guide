const express = require('express')

const router = express.Router()

// /categories/:catId/products/:prodId
router.get('/:catId/products/:prodId', (req, res) => {
  const { catId, prodId } = req.params
  res.json({
    catId,
    prodId
  })
})

module.exports = router