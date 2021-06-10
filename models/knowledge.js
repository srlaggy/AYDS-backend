'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Knowledge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Knowledge.belongsTo(models.Developer,{
        foreignKey:"id_developer",
      });
    }
  }
  Knowledge.init({
    name: DataTypes.STRING,
    level: DataTypes.STRING,
    validation: DataTypes.STRING,
    id_developer: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Knowledge',
    timestamps:false,
  });
  return Knowledge;
};