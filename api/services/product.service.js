const { faker } = require('@faker-js/faker')
const Boom = require('@hapi/boom')
const sequelize = require('./../libs/sequelize')

class ProductsService {
  constructor() {
    this.products = [];
    this.generate()
  }

  generate() {
    for (let i = 0; i < 20; i++) {
      this.products.push({
        //id:     faker.string.nanoid(6),
        id:     faker.string.uuid(),
        name:   faker.commerce.product(),
        price:  faker.commerce.price({ min: 1000, max: 20000 }),
        image:  faker.image.url(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newOne = {
      id:     faker.string.uuid(),
      ...data
    }
    this.products.push(newOne)
    return newOne
  }

  async find() {
    const query = 'SELECT * FROM public.tasks'
    const [ data ] = await sequelize.query(query)
    return data
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id)
    if(!product){
      throw Boom.notFound('Product Not Found')
    }

    if(product.isBlock) {
      throw Boom.conflict('Product Is Block')
    }

    return product
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id)
    
    if(index === -1) {
      throw Boom.notFound('Product Not Found')
    }

    const product = this.products[index]

    this.products[index] = {
      ...product,
      ...changes
    }

    return this.products[index]
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id)
    if(index === -1) {
      throw Boom.notFound('Product Not Found')
    }

    this.products.splice(index, 1)
    return { id, message: 'product deleted' }
  }
}

module.exports = ProductsService;
