const { getData } = require('../idRequest');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const array = (await getData()).actorMoviesSeed;
    await queryInterface.bulkInsert(
      'ActorMovies',
      array,
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ActorMovies', null, {});
  },
};
