"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class UsersDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Users, {
        foreignKey: "user_id",
      });
    }
  }
  UsersDetail.init(
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      user_id: DataTypes.INTEGER,
      address: DataTypes.STRING,
      zip_code: DataTypes.STRING,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
      address_note: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "UsersDetail",
    }
  );
  return UsersDetail;
};
