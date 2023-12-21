"use strict";
const { Model } = require("sequelize");
const uuid = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class ProductAttributes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductAttributes.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      prod_id: DataTypes.INTEGER,
      attributeType: DataTypes.STRING, // radio checkbox
      attribute_name: DataTypes.STRING, // color,size
      attribute_price: DataTypes.INTEGER, // 100
      attributePriceOption: DataTypes.STRING, // add or minus
    },
    {
      sequelize,
      modelName: "ProductAttributes",
    }
  );
  return ProductAttributes;
};
