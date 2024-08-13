const { faker } = require("@faker-js/faker");

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 7; i++) {
      this.categories.push({
        id: faker.string.nanoid(6),
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
        resolve(this.categories)
      }, 2000);
    })
  }

  async findOne(id) {
    return this.categories.find((item) => item.id === id);
  }

  async update(id, changes) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error("Category not found");
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
      throw new Error("Category not found");
    }

    this.categories.splice(index, 1);
    return { id, message: "category deleted" };
  }
}

module.exports = CategoriesService;
