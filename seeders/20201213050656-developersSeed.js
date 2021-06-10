'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let developersSeed = []
    developersSeed.push({
      name: "Raul Cruz",
      phone: "96545631",
      type: true,
      email: "raul.cruz@sansano.usm.cl",
      pass: "$2b$10$Lx.dfHywJwev5EJ6uSM9Wus4yqIRz4NGVd0bLIPelnFaFD5ODyJJa",
      id_module: 1
    });
    developersSeed.push({
      name: "Roberto Covarrubias",
      phone: "96558742",
      type: true,
      email: "roberto@gmail.com",
      pass: "$2b$10$BzGn3sw2K3i62BEVVYpO3eE8/z6OP8KgmeitPdWQMEG8Djkob2RL2",
      id_module: 2
    });
    developersSeed.push({
      name: "Violeta Castillo",
      phone: "98776542",
      type: true,
      email: "violeta@gmail.com",
      pass: "$2b$10$/7po2NrxQi7YU.re/yVJT.UVtKEZKlO6CZJZjIEfcFoa5Y.F.bMr2",
      id_module: 3
    });
    developersSeed.push({
      name: "Celeste Castillo",
      phone: "99534573",
      type: false,
      email: "celeste@gmail.com",
      pass: "$2b$10$lH1Zmm/mneWZQ5CiJVZH4.tthfzqKLxHHTXD8GMS7QF7Bt/uNjJXa",
      id_module: 4
    });
    developersSeed.push({
      name: "Spike Tudorovic",
      phone: "98226331",
      type: false,
      email: "spike@gmail.com",
      pass: "$2b$10$.loEkuLgMPHk8G8zWSCEOuT91PQYX0ZW2bXFAGRm3.i7dXIDgfEIG",
      id_module: 5
    });
    developersSeed.push({
      name: "Sofia Martinez",
      phone: "96565254",
      type: false,
      email: "sofia@gmail.com",
      pass: "$2b$10$V6C3x.Cl3djXSle6WHYA5uM99RTPy4qJZGkco0igUo73Hsb1lQm.i",
      id_module: 6
    });
    developersSeed.push({
      name: "Ricky Martin",
      phone: "96565253",
      type: false,
      email: "ricky.martin@gmail.com",
      pass: "$2b$10$7T1M9fmm4hAP0GQjunTb..Bv4S5LLX4zyfPWfFPJrME7ul.diAkjm",
      id_module: 7
    });
    developersSeed.push({
      name: "Junior Fernandes",
      phone: "96565252",
      type: false,
      email: "junior.fernandes@gmail.com",
      pass: "$2b$10$BHAk2tATpYPm.ueX0Yjev.nYz9V7GFegW.hOMQ.91r9d0XxAPsIsG",
      id_module: 8
    });
    developersSeed.push({
      name: "Angelo Sagal",
      phone: "96565231",
      type: true,
      email: "angelo.sagal@gmail.com",
      pass: "$2b$10$mRwTy6hKqS3l596GpNMoYePa15wsZURnHGTC7Ce43c0NHrGojyWLa",
      id_module: 9
    });
    developersSeed.push({
      name: "Kim Kardashian",
      phone: "86535232",
      type: false,
      email: "kim.kardashian@gmail.com",
      pass: "$2b$10$nN.hBsezSGxR9d.lKBQKweyngiHkFb4F6c.FCA.2Kf3UQ3kBfglBC"
    });
    developersSeed.push({
      name: "Marie Curie",
      phone: "76545237",
      type: false,
      email: "marie.curie@gmail.com",
      pass: "$2b$10$BXyeP7Dk1LaH2AQIC8s6AORzwCyl8Byz9neFv8bwb5ofaQKEndTTy"
    });
    developersSeed.push({
      name: "Maria Sharapova",
      phone: "26543238",
      type: false,
      email: "maria.sharapova@gmail.com",
      pass: "$2b$10$RK9SHhqUHPvmR2kzRXhnZe2oAVPUc88.JfT.TDDLEhmhhenM/ZHM6"
    });
    return queryInterface.bulkInsert("Developers",developersSeed);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Developers",null,{});
  }
};
