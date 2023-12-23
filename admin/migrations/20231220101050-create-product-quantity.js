"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("product_quantities", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      prod_id: {
        type: Sequelize.UUID,
        references: {
          model: "products",
          key: "id",
          as: "id",
        },
      },
      name: Sequelize.STRING,
      product_id: Sequelize.INTEGER,
      quantity: Sequelize.INTEGER,
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
    await queryInterface.dropTable("product_quantities");
  },
};
