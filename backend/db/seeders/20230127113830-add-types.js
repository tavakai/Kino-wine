// const { getData } = require('../idRequest');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // const array = (await getData()).uniqueTypes;
    await queryInterface.bulkInsert(
      'Types',
      // array.map((type) => ({
      //   title: type,
      // })),
      [
        {
          title: 'movie',
        },
        {
          title: 'tv-series',
        },
        {
          title: 'cartoon',
        },
        {
          title: 'anime',
        },
        {
          title: 'animated-series',
        },
        {
          title: 'tv-show',
        },
        {
          title: 'mini-series',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Types', null, {});
  },
};
