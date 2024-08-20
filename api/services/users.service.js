const { faker } = require("@faker-js/faker");

class UsersService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 12; i++) {
      this.users.push({
        id: faker.string.nanoid(6),
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

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.users);
      }, 2000);
    });
  }

  async findOne(id) {
    return this.users.find((item) => item.id === id);
  }

  async update(id, changes) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error("User not found");
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
      throw new Error("User not found");
    }

    this.users.splice(index, 1)
    return { id, message: "user deleted" };
  }
}

module.exports = UsersService;
