'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Projects', {
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
      id_manager: {
        type: Sequelize.INTEGER,
        references:{
          model:"Managers",
          key:"id",
          as:"id_manager",
        },
      },
      id_client: {
        type: Sequelize.INTEGER,
        references:{
          model:"Clients",
          key:"id",
          as:"id_client",
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Projects');
  }
};