const { faker } = require("@faker-js/faker");
const Boom = require('@hapi/boom')
const pool = require('./../libs/postgres.pool')

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
    this.pool = pool
    this.pool.on('error', (err) => console.log(err))
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
    const query = 'SELECT * FROM public.tasks'
    const response = await this.pool.query(query)
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
