const Joi = require("joi");

const id = Joi.string().max(10);
const name = Joi.string().min(3).max(20);
const lastName = Joi.string().min(3).max(20);
const email = Joi.string().email()
const password = Joi.string().min(8).max(50);
const role = Joi.string().min(5)

const createUserSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  email: email.required(),
  password: password.required(),
  role: role.required()
});

const updateUserSchema = Joi.object({
  name: name,
  lastName: lastName,
  email: email,
  password: password,
  role: role,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }