'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pirate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pirate.init({
    id_ship: DataTypes.INTEGER,
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    type: DataTypes.STRING,
    bounty: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pirate',
  });
  return Pirate;
};