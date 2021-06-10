'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let projectsSeed = []
    projectsSeed.push({
      name: "Facebook",
      id_manager: 1,
      id_client: 1,
      state: "No Finalizado"
    });
    projectsSeed.push({
      name: "Instagram",
      id_manager: 1,
      id_client: 2,
      state: "No Finalizado"
    });
    projectsSeed.push({
      name: "Google",
      id_manager: 1,
      id_client: 3,
      state: "No Finalizado"
    });
    projectsSeed.push({
      name: "Youtube",
      id_manager: 1,
      id_client: 4,
      state: "No Finalizado"
    });
    projectsSeed.push({
      name: "Amazon",
      id_manager: 1,
      id_client: 5,
      state: "No Finalizado"
    });
    projectsSeed.push({
      name: "Falabella",
      id_manager: 1,
      id_client: 6,
      state: "No Finalizado"
    });
    return queryInterface.bulkInsert("Projects",projectsSeed);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Projects",null,{});
  }
};
