/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
  //   const ids = [301, 1405508];
  //   await queryInterface.bulkInsert(
  //     'GenreMovies',
  //     ids.map((id) => ({
  //       genre_id: 1,
  //       movie_id: id,
  //     })),
  //     {},
  //   );
  },

  async down(queryInterface, Sequelize) {
  //   await queryInterface.bulkDelete('GenreMovies', null, {});
  },
};
