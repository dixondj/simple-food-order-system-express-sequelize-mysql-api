'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('OrderItem', 'id', {
      type: Sequelize.UUID,
      defaultValue:Sequelize.UUIDV4,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('OrderItem', 'id', {
      type: Sequelize.STRING,
    })
  }
};

