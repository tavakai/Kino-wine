const { getData } = require('../idRequest');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const array = (await getData()).genreMoviesRes;
    await queryInterface.bulkInsert(
      'GenreMovies',
      array,
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('GenreMovies', null, {});
  },
};
