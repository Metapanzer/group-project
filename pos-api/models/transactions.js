'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transactions.init({
    total_price: DataTypes.INTEGER,
    expired_at: DataTypes.DATE,
    payment_status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transactions',
  });
  return transactions;
};