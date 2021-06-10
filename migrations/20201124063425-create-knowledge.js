'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Knowledge', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.STRING
      },
      validation: {
        type: Sequelize.STRING
      },
      id_developer: {
        type: Sequelize.INTEGER,
        references:{
          model:"Developers",
          key:"id",
          as:"id_developer",
        }
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Knowledge');
  }
};