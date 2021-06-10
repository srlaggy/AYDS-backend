'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let requirementsSeed = []
    requirementsSeed.push({
      name: "Imagen",
      difficulty: "Baja",
      cost: 30,
      id_module: 1,
      state: "En progreso"
    });
    requirementsSeed.push({
      name: "Descripcion",
      difficulty: "Media",
      cost: 40,
      id_module: 1,
      state: "Sin iniciar"
    });
    requirementsSeed.push({
      name: "Emoji",
      difficulty: "Alta",
      cost: 20,
      id_module: 2,
      state: "Finalizado"
    });
    requirementsSeed.push({
      name: "Sticker",
      difficulty: "Alta",
      cost: 15,
      id_module: 2,
      state: "En progreso"
    });
    requirementsSeed.push({
      name: "Memes",
      difficulty: "Alta",
      cost: 30,
      id_module: 3,
      state: "En progreso"
    });
    requirementsSeed.push({
      name: "Foto",
      difficulty: "Media",
      cost: 40,
      id_module: 3,
      state: "Sin iniciar"
    });
    requirementsSeed.push({
      name: "Informacion",
      difficulty: "Baja",
      cost: 20,
      id_module: 4,
      state: "Finalizado"
    });
    requirementsSeed.push({
      name: "Amigo",
      difficulty: "Alta",
      cost: 15,
      id_module: 4,
      state: "Sin iniciar"
    });
    requirementsSeed.push({
      name: "Prioridades",
      difficulty: "Media",
      cost: 30,
      id_module: 5,
      state: "En progreso"
    });
    requirementsSeed.push({
      name: "Noticias",
      difficulty: "Alta",
      cost: 40,
      id_module: 5,
      state: "En progreso"
    });
    requirementsSeed.push({
      name: "AdBlock",
      difficulty: "Alta",
      cost: 20,
      id_module: 6,
      state: "Finalizado"
    });
    requirementsSeed.push({
      name: "Algoritmo",
      difficulty: "Alta",
      cost: 15,
      id_module: 6,
      state: "En progreso"
    });
    requirementsSeed.push({
      name: "Privado",
      difficulty: "Alta",
      cost: 145,
      id_module: 7,
      state: "En progreso"
    });
    requirementsSeed.push({
      name: "Publico",
      difficulty: "Media",
      cost: 15,
      id_module: 7,
      state: "Finalizado"
    });
    requirementsSeed.push({
      name: "Productos",
      difficulty: "Alta",
      cost: 15,
      id_module: 8,
      state: "En progreso"
    });
    requirementsSeed.push({
      name: "Vendedores",
      difficulty: "Alta",
      cost: 50,
      id_module: 8,
      state: "Sin iniciar"
    });
    requirementsSeed.push({
      name: "Spam",
      difficulty: "Baja",
      cost: 15,
      id_module: 9,
      state: "Finalizado"
    });
    requirementsSeed.push({
      name: "Sincronización",
      difficulty: "Alta",
      cost: 60,
      id_module: 9,
      state: "Sin iniciar"
    });
    requirementsSeed.push({
      name: "Tendencias",
      difficulty: "Media",
      cost: 34,
      id_module: 10,
      state: "Sin iniciar"
    });
    requirementsSeed.push({
      name: "Monetización",
      difficulty: "Baja",
      cost: 10,
      id_module: 10,
      state: "En progreso"
    });
    requirementsSeed.push({
      name: "Peliculas",
      difficulty: "Alta",
      cost: 62,
      id_module: 11,
      state: "En progreso"
    });
    requirementsSeed.push({
      name: "Listas privadas",
      difficulty: "Baja",
      cost: 32,
      id_module: 11,
      state: "Finalizado"
    });
    return queryInterface.bulkInsert("Requirements",requirementsSeed);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Requirements",null,{});
  }
};
