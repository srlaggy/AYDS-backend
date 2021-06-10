'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.belongsTo(models.Manager,{
        foreignKey: "id_manager",
      });
      Project.belongsTo(models.Client,{
        foreignKey: "id_client",
      });
      Project.hasMany(models.Module,{
        foreignKey:"id_project",
      });
    }
  }
  Project.init({
    name: DataTypes.STRING,
    state: DataTypes.STRING,
    id_manager: DataTypes.INTEGER,
    id_client: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Project',
    timestamps:false,
  });
  return Project;
};