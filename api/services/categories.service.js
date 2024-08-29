const { faker } = require("@faker-js/faker");
const Boom = require('@hapi/boom')
const { models } = require('./../libs/sequelize')

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 7; i++) {
      this.categories.push({
        id: faker.string.uuid(),
        name: faker.commerce.department(),
        image: faker.image.url(),
      });
    }
  }

  async create(data) {
    const newOne = await models.Category.create(data)
    return newOne;
  }

  async find() {
    const response = await models.Category.findAll()
    return response
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id)
    if(!category){
      throw Boom.notFound('Category Not Found')
    }

    return category
  }

  async update(id, changes) {
    const category = await this.findOne(id)
    const response = await category.update(changes)
    return response
  }

  async delete(id) {
    const category = await this.findOne(id)
    await category.destroy()
    return { id, message: "Category deleted" };
  }
}

module.exports = CategoriesService;
