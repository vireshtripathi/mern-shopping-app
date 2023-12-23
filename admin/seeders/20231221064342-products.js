"use strict";

/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require("uuid");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: uuidv4(),
          title: "Heavy Weight Shoes",
          description:
            "Fashion is a form of self-expression and autonomy at a particular period and place and in a specific context, of clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture.",
          price: "1500",
          sku: "sh-001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    const product = await queryInterface.sequelize.query(
      `SELECT id from products;`
    );

    const productRows = product[0];

    await queryInterface.bulkInsert(
      "product_media",
      [
        {
          id: uuidv4(),
          img_id: productRows[0].id,
          name: "Heavy Weight Shoes",
          title: "Heavy Weight Shoes",
          source: "",
          alt: "Heavy Weight Shoes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    return await queryInterface.bulkInsert(
      "product_offers",
      [
        {
          id: uuidv4(),
          offer_id: productRows[0].id,
          offerType: "FIXED",
          offerValue: 10,
          offerStart: new Date(),
          offerEnd: new Date(),
          offerNotes: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
    await queryInterface.bulkDelete("product_media", null, {});
    await queryInterface.bulkDelete("product_offers", null, {});
  },
};
