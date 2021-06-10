'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let knowledgesSeed = []
    knowledgesSeed.push({
      name: "Node Js",
      level: "Básico",
      id_developer: 1
    });
    knowledgesSeed.push({
      name: "React",
      level: "Básico",
      id_developer: 1
    });
    knowledgesSeed.push({
      name: "Java",
      level: "Básico",
      id_developer: 2
    });
    knowledgesSeed.push({
      name: "Python",
      level: "Básico",
      id_developer: 2
    });
    knowledgesSeed.push({
      name: "Haskell",
      level: "Medio",
      id_developer: 3
    });
    knowledgesSeed.push({
      name: "C",
      level: "Medio",
      id_developer: 3
    });
    knowledgesSeed.push({
      name: "C++",
      level: "Medio",
      id_developer: 4
    });
    knowledgesSeed.push({
      name: "Js",
      level: "Medio",
      id_developer: 4
    });
    knowledgesSeed.push({
      name: "Go",
      level: "Avanzado",
      id_developer: 5
    });
    knowledgesSeed.push({
      name: "Ruby",
      level: "Avanzado",
      id_developer: 5
    });
    knowledgesSeed.push({
      name: "HTML",
      level: "Avanzado",
      id_developer: 6
    });
    knowledgesSeed.push({
      name: "PHP",
      level: "Avanzado",
      id_developer: 6
    });
    knowledgesSeed.push({
      name: "Julia",
      level: "Medio",
      id_developer: 7
    });
    knowledgesSeed.push({
      name: "Prolog",
      level: "Básico",
      id_developer: 7
    });
    knowledgesSeed.push({
      name: "Perl",
      level: "Básico",
      id_developer: 8
    });
    knowledgesSeed.push({
      name: "Rust",
      level: "Medio",
      id_developer: 8
    });
    knowledgesSeed.push({
      name: "TypeScript",
      level: "Básico",
      id_developer: 9
    });
    knowledgesSeed.push({
      name: "Scala",
      level: "Avanzado",
      id_developer: 9
    });
    knowledgesSeed.push({
      name: "Pascal",
      level: "Medio",
      id_developer: 9
    });
    knowledgesSeed.push({
      name: "Scheme",
      level: "Avanzado",
      id_developer: 9
    });
    knowledgesSeed.push({
      name: "PowerShell",
      level: "Básico",
      id_developer: 10
    });
    knowledgesSeed.push({
      name: "PowerBuilder",
      level: "Medio",
      id_developer: 10
    });
    knowledgesSeed.push({
      name: "Octave",
      level: "Básico",
      id_developer: 11
    });
    knowledgesSeed.push({
      name: "MATLAB",
      level: "Básico",
      id_developer: 11
    });
    knowledgesSeed.push({
      name: "ALGOL 60",
      level: "Avanzado",
      id_developer: 12
    });
    knowledgesSeed.push({
      name: "ALGOL 68",
      level: "Avanzado",
      id_developer: 12
    });
    return queryInterface.bulkInsert("Knowledge",knowledgesSeed);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Knowledge",null,{});
  }
};
