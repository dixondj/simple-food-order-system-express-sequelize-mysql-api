'use strict';
const { v4: uuid } = require('uuid')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Food', [
      {
        id: uuid(),
        ItemName: 'Pizza',
        ItemPrice: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuid(),
        ItemName: 'Chicken Chop',
        ItemPrice: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuid(),
        ItemName: 'Fish and Chips',
        ItemPrice: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuid(),
        ItemName: 'Burger',
        ItemPrice: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuid(),
        ItemName: 'Lamb Chop',
        ItemPrice: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Food', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
