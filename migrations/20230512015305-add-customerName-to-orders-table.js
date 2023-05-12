'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Orders', 'customerName', {
      type: Sequelize.STRING,
      after: 'id'
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Orders', 'customerName')
  }
};

