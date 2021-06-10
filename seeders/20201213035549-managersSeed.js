'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let managersSeed = []
    managersSeed.push({
      name: "Darinka Quiñones",
      phone: "94734721",
      email: "darinka.quinones@sansano.usm.cl",
      pass: "$2b$10$NrboSopR.4j.RUD7Pxipxe.BUN9z/E7aj9e0xjQ4bivUKS1BawQy2"
    });
    return queryInterface.bulkInsert("Managers",managersSeed);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Managers",null,{});
  }
};
