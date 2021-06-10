'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let clientsSeed = []
    clientsSeed.push({
      name: "Ignacio Ulloa",
      phone: "97737765",
      email: "ignacio.ulloa@sansano.usm.cl",
      pass: "$2b$10$E5gmlotGJkBdx8EckPTLuO5MyGK5hMxxVXslKT6LaFOfn6FH60xzW"
    });
    clientsSeed.push({
      name: "Francisco Nuñez",
      phone: "94646121",
      email: "francisco@gmail.com",
      pass: "$2b$10$k0UFkSpIIj4VakB/.u9CdOHt0CKiRdMPuZ9NJx7my4L.43vICItYq"
    });
    clientsSeed.push({
      name: "Juan Barros",
      phone: "98884121",
      email: "juan.barros@sansano.usm.cl",
      pass: "$2b$10$TWafEOkKchLHkHKwML8IS.kioMFmmcByWjnTmqyt7kBeX/IG7G.ZG"
    });
    clientsSeed.push({
      name: "Rafael Nadal",
      phone: "78884121",
      email: "rafael.nadal@sansano.usm.cl",
      pass: "$2b$10$zTfEwp9TWa.WZEnoaGWyEuB6pfyaGSEiA3ucoo.5LKCwJ4EdzDyXm"
    });
    clientsSeed.push({
      name: "Simone Biles",
      phone: "68884121",
      email: "simone.biles@sansano.usm.cl",
      pass: "$2b$10$ZpUcCZvdkqpKRhccosh/YO5nsuvmu6ExEnrrnrNw7lwKFXhUt..VC"
    });
    clientsSeed.push({
      name: "Gabriela Mistral",
      phone: "58884121",
      email: "gabriela.mistral@sansano.usm.cl",
      pass: "$2b$10$UM6MdjEj7dIZf51MSgm3D.aoebATxJ1i9oxTKxsiAmeXAxpE1Vmf."
    });
    return queryInterface.bulkInsert("Clients",clientsSeed);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Clients",null,{});
  }
};
