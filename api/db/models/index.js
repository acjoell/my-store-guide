const { UserSchema, User } = require("./user.model");
const { CategorySchema, Category } = require("./category.model");
const { ProductSchema, Product } = require("./product.model");

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize))
  User.init(ProductSchema, Product.config(sequelize))
  User.init(CategorySchema, Category.config(sequelize))
}

module.exports = setupModels