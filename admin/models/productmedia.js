"use strict";
const { Model } = require("sequelize");
const uuid = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class ProductMedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Products, {
        foreignKey: "id",
      });
    }
  }
  ProductMedia.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      img_id: {
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      title: DataTypes.STRING,
      source: DataTypes.STRING,
      alt: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProductMedia",
      tableName: "product_media",
    }
  );
  return ProductMedia;
};
