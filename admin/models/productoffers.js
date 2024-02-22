"use strict";
const { Model } = require("sequelize");
const uuid = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class ProductOffers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductOffers.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      offer_id: {
        type: DataTypes.STRING,
      },
      offerType: DataTypes.STRING, // fixed,flat,perchange
      offerValue: DataTypes.STRING,
      offerStart: DataTypes.DATE,
      offerEnd: DataTypes.DATE,
      offerNotes: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProductOffers",
    }
  );
  return ProductOffers;
};
