"use strict";
const { Model } = require("sequelize");
const uuid = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.ProductMedia, {
        foreignKey: "img_id",
      });
    }
  }
  Products.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      sku: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Products",
      tableName: "products",
    }
  );
  return Products;
};
