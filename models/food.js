
// module.exports = (sequelize, DataTypes) => {

//   const food = sequelize.define("Food", {
//     id: {
//       allowNull: false,
//       primaryKey: true,
//       type: DataTypes.STRING
//     },
//     itemName: {
//       type: DataTypes.STRING
//     },
//     itemPrice: {
//       type: DataTypes.INTEGER
//     },
//     createdAt: {
//       allowNull: false,
//       type: DataTypes.DATE
//     },
//     updatedAt: {
//       allowNull: false,
//       type: DataTypes.DATE
//     }

//   })

//   return food

// }





















// export default function (sequelize, type) {

//   const food = sequelize.define(
//     'food',
//     {
//       id: {
//         allowNull: false,
//         primaryKey: true,
//         type: type.STRING
//       },
//       itemName: {
//         type: type.STRING
//       },
//       itemPrice: {
//         type: type.INTEGER
//       },
//       createdAt: {
//         allowNull: false,
//         type: type.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: type.DATE
//       }
//     },
//     {
//       freezeTableName: true,
//     },
//   );

//   // maintenanceEstimatedCosts.associate = (models) => {
//   //   maintenanceEstimatedCosts.belongsTo(models.maintenance_requests, {
//   //     foreignKey: 'maintenance_request_id',
//   //     constraints: false,
//   //     as: 'maintenance_request',
//   //   });

//   //   maintenanceEstimatedCosts.belongsTo(models.inventory_items, {
//   //     foreignKey: 'inventory_item_id',
//   //     constraints: false,
//   //   });
//   // };

//   return food;
// }


















'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Orders, { foreignKey: 'foodId', through: 'OrderItem' });
      // Food.belongsToMany(models.Orders, {
      //   through: 'orderItems',
      //   foreignKey: 'foodId',
      // });
    }
  }
  Food.init({
    itemName: DataTypes.STRING,
    itemPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Food',
    freezeTableName: true
  });
  return Food;
};