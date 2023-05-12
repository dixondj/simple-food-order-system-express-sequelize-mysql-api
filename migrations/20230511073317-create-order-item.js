'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.INTEGER
      },
      foodId: {
        type: Sequelize.STRING
      },
      orderId: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addConstraint('OrderItems', {
      fields: ['foodId'],
      type: 'foreign key',
      name: 'foodIdFK',
      references: {
        table: 'Food',
        field: 'id'
      },
      onDelete: 'CASCADE'
    })

    await queryInterface.addConstraint('OrderItems', {
      fields: ['orderId'],
      type: 'foreign key',
      name: 'orderIdFK',
      references: {
        table: 'Orders',
        field: 'id'
      },
      onDelete: 'CASCADE'

    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderItems');
  }
};