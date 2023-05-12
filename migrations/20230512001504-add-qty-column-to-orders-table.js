'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Orders', 'qty', {
      type: Sequelize.INTEGER,
      after: 'orderItem'
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Orders', 'qty')
  }
};
