'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Module extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Module.belongsTo(models.Project,{
        foreignKey: "id_project",
      });
      Module.hasMany(models.Requirement,{
        foreignKey: "id_module",
      });
      Module.hasOne(models.Developer,{
        foreignKey: "id_module",
      });
    }
  }
  Module.init({
    name: DataTypes.STRING,
    feedback: DataTypes.STRING,
    view: DataTypes.STRING,
    deadline: DataTypes.DATE,
    assignment: DataTypes.BOOLEAN,
    check: DataTypes.BOOLEAN,
    id_project: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Module',
    timestamps:false,
  });
  return Module;
};