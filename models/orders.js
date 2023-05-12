'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Food, { foreignKey: 'orderId', through: 'OrderItem'});
    }
  }
  Orders.init({
    customerName: DataTypes.STRING,
    orderItem: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Orders',
    freezeTableName: true
  });
  return Orders;
};