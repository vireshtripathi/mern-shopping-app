"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("product-offers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      offer_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "products",
          key: "id",
          as: "id",
        },
      },
      offerType: Sequelize.STRING, // fixed,flat,perchange
      offerValue: Sequelize.STRING,
      offerStart: Sequelize.DATE,
      offerEnd: Sequelize.DATE,
      offerNotes: Sequelize.STRING,
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
    await queryInterface.dropTable("product-offers");
  },
};
