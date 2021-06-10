'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let modulesSeed = []
    modulesSeed.push({
      name: "Perfil",
      id_project: 1,
      deadline: new Date('2020-12-16T12:00:00'),
      assignment: true,
      check: false,
      view: "https://www.momsall.com/wp-content/uploads/2019/01/Facebook-User-Profile.jpg"
    });
    modulesSeed.push({
      name: "Chat",
      id_project: 1,
      deadline: new Date('2020-12-20T12:00:00'),
      assignment: true,
      check: false,
      view: "https://betterstudio.com/wp-content/uploads/2018/07/better-facebook-chat.png"
    });
    modulesSeed.push({
      name: "Historias",
      id_project: 2,
      deadline: new Date('2020-12-24T12:00:00'),
      assignment: true,
      check: false,
      view: "https://ichef.bbci.co.uk/news/800/cpsprodpb/14D3/production/_90613350_1.instagramstories-creating.jpg"
    });
    modulesSeed.push({
      name: "Seguidores",
      id_project: 2,
      deadline: new Date('2020-12-28T12:00:00'),
      assignment: true,
      check: false,
      view: "https://qph.fs.quoracdn.net/main-qimg-631060512935822bcc4de5aa6bd75eb5"
    });
    modulesSeed.push({
      name: "Buscador",
      id_project: 3,
      deadline: new Date('2020-12-30T12:00:00'),
      assignment: true,
      check: false,
      view: "https://www.frikipandi.com/wp-content/uploads/2015/09/cuando-es-aniversario-google-doodle-660x330.jpg"
    });
    modulesSeed.push({
      name: "Publicidad",
      id_project: 3,
      deadline: new Date('2020-12-31T12:00:00'),
      assignment: true,
      check: false,
      view: "https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/google-ads_3.png"
    });
    modulesSeed.push({
      name: "Grupos",
      id_project: 1,
      deadline: new Date('2020-12-24T12:00:00'),
      assignment: true,
      check: false,
    });
    modulesSeed.push({
      name: "Tienda",
      id_project: 2,
      deadline: new Date('2020-12-31T12:00:00'),
      assignment: true,
      check: false,
    });
    modulesSeed.push({
      name: "Gmail",
      id_project: 3,
      deadline: new Date('2020-12-15T12:00:00'),
      assignment: true,
      check: false,
    });
    modulesSeed.push({
      name: "Videos",
      id_project: 4,
      deadline: new Date('2020-12-25T12:00:00'),
      assignment: false,
      check: false,
    });
    modulesSeed.push({
      name: "Listas",
      id_project: 4,
      deadline: new Date('2020-12-27T12:00:00'),
      assignment: false,
      check: false,
    });
    return queryInterface.bulkInsert("Modules",modulesSeed);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Modules",null,{});
  }
};
