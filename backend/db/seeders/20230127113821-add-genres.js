const { getData } = require('../idRequest');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const array = (await getData()).uniqueGenres;

    await queryInterface.bulkInsert(
      'Genres',
      array.map((genre) => ({
        title: genre,
      })),
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Genres', null, {});
  },
};
