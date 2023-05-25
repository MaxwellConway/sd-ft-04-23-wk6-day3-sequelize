"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Customers",
      [
        {
          name: "Joe Frasier",
          accountType: "Checking",
          ssn: "123-123-1231",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jamie Frasier",
          accountType: "Checking",
          ssn: "133-123-1231",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nathan Frasier",
          accountType: "Checking",
          ssn: "131-123-1231",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Andrew Frasier",
          accountType: "Checking",
          ssn: "233-123-1231",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
