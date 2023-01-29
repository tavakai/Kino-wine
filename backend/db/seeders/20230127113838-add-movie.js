// const axios = require('axios');
const { getData } = require('../idRequest');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const {
      results, uniqueActors, genreMoviesRes, actorMoviesSeed,
    } = await getData();

    await queryInterface.bulkInsert(
      'Movies',
      results,
      {},
    );
    await queryInterface.bulkInsert(
      'Actors',
      uniqueActors.map((actor) => ({
        fullname: actor.fullname,
        image: actor.image,
        kp_id: actor.kp_id,
      })),
      {},
    );
    await queryInterface.bulkInsert(
      'GenreMovies',
      genreMoviesRes,
      {},
    );
    await queryInterface.bulkInsert(
      'ActorMovies',
      actorMoviesSeed,
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});
    await queryInterface.bulkDelete('Actors', null, {});
    await queryInterface.bulkDelete('GenreMovies', null, {});
    await queryInterface.bulkDelete('ActorMovies', null, {});
  },
};
