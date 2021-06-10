'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Requirements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      difficulty: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.INTEGER
      },
      id_module: {
        type: Sequelize.INTEGER,
        references:{
          model:"Modules",
          key:"id",
          as:"id_module",
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Requirements');
  }
};