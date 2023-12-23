"use strict";

/** @type {import('sequelize-cli').Migration} */
const { Users } = require("../models");
const { v4: uuidv4 } = require("uuid");
module.exports = {
  async up(queryInterface, Sequelize) {
    const userDate = [
      {
        id: uuidv4(),
        user_id: 2,
        email: "vireshtripathi@gmail.com",
        password: 1234,
        gender: "MALE",
        name: "Viresh Tripathi",
        phone: "+91-9519914555",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Use Promise.all to wait for all records to be created or found
    await Promise.all(
      userDate.map(async (user) => {
        // Find or create the record based on the user name
        try {
          const [createdUser, created] = await Users.findOrCreate({
            where: { user_id: user.user_id },
            defaults: user, // Data to insert if the record doesn't exist
          });

          if (created) {
            console.log(`Created user: ${createdUser.name}`);
          } else {
            console.log(`Skipped existing user: ${createdUser.name}`);
          }
        } catch (error) {
          console.error(`Error creating user: ${user.name}`, error);
        }
      })
    );

    // await queryInterface.bulkInsert(
    //   "users",
    //   [
    //     {
    //       id: uuidv4(),
    //       user_id: 2,
    //       email: "vireshtripathi@gmail.com",
    //       password: 1234,
    //       gender: "MALE",
    //       name: "Viresh Tripathi",
    //       phone: "+91-9519914555",
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //   ],
    //   {}
    // );

    const users = await queryInterface.sequelize.query(
      `SELECT user_id from users;`
    );

    const usersRows = users[0];

    return await queryInterface.bulkInsert(
      "users_detail",
      [
        {
          id: uuidv4(),
          address: "537/bha",
          zip_code: 226021,
          user_id: usersRows[0].user_id,
          city: "Lucknow",
          country: "India",
          address_note: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("users_detail", null, {});
  },
};
