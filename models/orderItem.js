'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OrderItem.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    qty: DataTypes.INTEGER,
    foodId: DataTypes.STRING,
    orderId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OrderItem',
    freezeTableName: true
  });
  return OrderItem;
};