'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Requirement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Requirement.belongsTo(models.Module,{
        foreignKey: "id_module",
      });
    }
  }
  Requirement.init({
    name: DataTypes.STRING,
    state: DataTypes.STRING,
    difficulty: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    id_module: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Requirement',
    timestamps:false,
  });
  return Requirement;
};