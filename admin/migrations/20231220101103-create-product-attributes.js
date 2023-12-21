"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("product-attributes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      prod_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "products",
          key: "id",
          as: "id",
        },
      },
      attributeType: Sequelize.STRING, // radio checkbox
      attribute_name: Sequelize.STRING, // color,size
      attribute_price: Sequelize.INTEGER, // 100
      attributePriceOption: Sequelize.STRING, // add or minus
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("product-attributes");
  },
};
