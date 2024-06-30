const express = require('express')
const { faker } = require('@faker-js/faker')

const router = express.Router()

// /users
router.get('/', (req, res) => {
  const users = []

  const { size, offset } = req.query
  const limit = size || 10

  for (let i = 0; i < limit; i++) {
    users.push({
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      bio: faker.person.bio(),
      job: faker.person.jobTitle()
    })
  }
  
  res.json(users)
})

router.post('/', (req, res) => {
  const body = req.body
  res.json({
    message: 'user created',
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  res.json({
    id,
    message: 'user updated',
    data: body
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    message: 'user deleted'
  })
})

module.exports = router