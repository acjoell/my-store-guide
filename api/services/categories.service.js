const { faker } = require("@faker-js/faker");
const Boom = require('@hapi/boom')
const pool = require('./../libs/postgres.pool')

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generate();
    this.pool = pool
    this.pool.on('error', (err) => console.log(err))
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
    const newOne = {
      id: faker.string.nanoid(6),
      ...data,
      image: faker.image.url(),
    };

    this.categories.push(newOne);
    return newOne;
  }

  async find() {
    const query = 'SELECT * FROM public.tasks'
    const response = await this.pool.query(query)
    return response.rows
  }

  async findOne(id) {
    const category = this.categories.find((item) => item.id === id);
    if(!category){
      throw Boom.notFound('Category Not Found')
    }

    return category
  }

  async update(id, changes) {
    const index = this.categories.findIndex((item) => item.id === id);
    
    if (index === -1) {
      throw Boom.notFound('Category Not Found')
    }

    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes,
    };

    return this.categories[index];
  }

  async delete(id) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw Boom.notFound('Category Not Found')
    }

    this.categories.splice(index, 1);
    return { id, message: "category deleted" };
  }
}

module.exports = CategoriesService;
