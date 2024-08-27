const { faker } = require("@faker-js/faker");
const Boom = require('@hapi/boom')
const { models } = require('./../libs/sequelize')

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 12; i++) {
      this.users.push({
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        bio: faker.person.bio(),
        job: faker.person.jobTitle(),
      });
    }
  }

  async create(data) {
    const newOne = await models.User.create(data)
    return newOne;
  }

  async find() {
    const response = await models.User.findAll()
    return response
  }

  async findOne(id) {
    const user = await models.User.findByPk(id)
    if(!user){
      throw Boom.notFound('User Not Found')
    }

    return user
  }

  async update(id, changes) {
    const user = await this.findOne(id)
    const response = await user.update(changes)
    return response
  }

  async delete(id) {
    const user = await this.findOne(id)
    await user.destroy()
    return { id, message: "User deleted" };
  }
}

module.exports = UsersService;
