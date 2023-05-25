"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Transactions",
      [
        {
          amount: "300",
          date: "Mar 21",
          bank: "BoA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "6790",
          date: "Sep 11",
          bank: "Chase",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "20",
          date: "Jan 1",
          bank: "BoA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          amount: "4000",
          date: "July 30",
          bank: "Chase",
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
