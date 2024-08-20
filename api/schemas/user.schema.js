const Joi = require("joi");

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(20);
const lastName = Joi.string().min(3).max(20);
const bio = Joi.string().min(0).max(180);
const job = Joi.string().min(0).max(50);

const createUserSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
});

const updateUserSchema = Joi.object({
  name: name,
  lastName: lastName,
  bio: bio,
  job: job,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }