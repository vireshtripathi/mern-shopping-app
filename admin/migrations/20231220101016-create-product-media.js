"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("product-media", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      img_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "products",
          key: "id",
          as: "id",
        },
      },
      name: Sequelize.STRING,
      title: Sequelize.STRING,
      source: Sequelize.STRING,
      alt: Sequelize.STRING,
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
    await queryInterface.dropTable("product-media");
  },
};
