const { faker } = require('@faker-js/faker')

class ProductsService {
  constructor() {
    this.products = [];
    this.generate()
  }

  generate() {
    for (let i = 0; i < 20; i++) {
      this.products.push({
        id:     faker.string.nanoid(6),
        name:   faker.commerce.product(),
        price:  faker.commerce.price({ min: 1000, max: 20000 }),
        image:  faker.image.url(),
      });
    }
  }

  create(data) {
    const newOne = {
      id:     faker.string.nanoid(6),
      ...data
    }
    this.products.push(newOne)
    return newOne
  }

  find() {
    return this.products
  }

  findOne(id) {
    return this.products.find(item => item.id === id)
  }

  update(id, changes) {
    const index = this.products.findIndex(item => item.id === id)
    if(index === -1) {
      throw new Error('Product not found')
    }
    const product = this.products[index]

    this.products[index] = {
      ...product,
      ...changes
    }

    return this.products[index]
  }

  delete(id) {
    const index = this.products.findIndex(item => item.id === id)
    if(index === -1) {
      throw new Error('Product not found')
    }

    this.products.splice(index, 1)
    return { id, message: 'product deleted' }
  }
}

module.exports = ProductsService;
