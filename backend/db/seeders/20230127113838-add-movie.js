// const axios = require('axios');
const { getData } = require('../idRequest');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const array = (await getData()).results;

    await queryInterface.bulkInsert(
      'Movies',
      array,
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});
  },
};
