'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Developer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Developer.belongsTo(models.Module,{
        foreignKey:"id_module",
      });
      Developer.hasMany(models.Knowledge,{
        foreignKey:"id_developer",
      });
    }
  }
  Developer.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    // interno 0 - externo 1
    type: DataTypes.BOOLEAN,
    qualification: DataTypes.INTEGER,
    email: DataTypes.STRING,
    pass: DataTypes.STRING,
    id_module: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Developer',
    timestamps:false,
  });
  return Developer;
};