const { faker } = require('@faker-js/faker')
const Boom = require('@hapi/boom')
const { models } = require('./../libs/sequelize')

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
    const newOne = await models.Product.create(data)
    return newOne
  }

  async find() {
    const response = await models.Product.findAll()
    return response
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id)
    if(!product){
      throw Boom.notFound('Product Not Found')
    }

    if(product.isBlock) {
      throw Boom.conflict('Product Is Block')
    }

    return product
  }

  async update(id, changes) {
    const product = await this.findOne(id)
    const response = await product.update(changes)
    return response
  }

  async delete(id) {
    const product = await this.findOne(id)
    await product.destroy()
    return { id, message: "Product deleted" };
  }
}

module.exports = ProductsService;
