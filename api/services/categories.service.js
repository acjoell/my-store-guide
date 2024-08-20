const { faker } = require("@faker-js/faker");
const Boom = require('@hapi/boom')

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
    const newOne = {
      id: faker.string.nanoid(6),
      ...data,
      image: faker.image.url(),
    };

    this.categories.push(newOne);
    return newOne;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.categories);
      }, 2000);
    });
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
