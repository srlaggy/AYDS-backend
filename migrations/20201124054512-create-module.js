'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Modules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      feedback: {
        type: Sequelize.STRING
      },
      view: {
        type: Sequelize.STRING
      },
      deadline: {
        type: Sequelize.DATE
      },
      assignment: {
        type: Sequelize.BOOLEAN
      },
      check: {
        type: Sequelize.BOOLEAN
      },
      id_project: {
        type: Sequelize.INTEGER,
        references:{
          model:"Projects",
          key:"id",
          as:"id_project",
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Modules');
  }
};