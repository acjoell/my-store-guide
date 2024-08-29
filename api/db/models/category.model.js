const { Model, DataTypes } = require("sequelize");

const CATEGORY_TABLE = "categories";

const CategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  image: {
    allowNull: false,
    type: DataTypes.BLOB,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: DataTypes.NOW,
  },
};

class Category extends Model {
  static associate() {
    // models
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: "Category",
      timestamps: false,
    };
  }
}

module.exports = {
  CATEGORY_TABLE,
  CategorySchema,
  Category,
};
