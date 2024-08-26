const { faker } = require("@faker-js/faker");
const Boom = require('@hapi/boom')
const getConnection = require('./../libs/postgres')

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
    const newOne = {
      id: faker.string.nanoid(6),
      ...data,
    };

    this.users.push(newOne);
    return newOne;
  }

  async find() {
    const client = await getConnection()
    const response = await client.query('SELECT * FROM public.tasks')
    return response.rows
  }

  async findOne(id) {
    const user = this.users.find((item) => item.id === id);
    if(!user){
      throw Boom.notFound('User Not Found')
    }

    return user
  }

  async update(id, changes) {
    const index = this.users.findIndex((item) => item.id === id);
    
    if (index === -1) {
      throw Boom.notFound('User Not Found')
    }

    const user = this.users[index]
    this.users[index] = {
      ...user,
      ...changes
    }

    return this.users[index]
  }

  async delete(id) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw Boom.notFound('User Not Found')
    }

    this.users.splice(index, 1)
    return { id, message: "user deleted" };
  }
}

module.exports = UsersService;
