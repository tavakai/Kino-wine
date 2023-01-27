const { getData } = require('../idRequest');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const array = (await getData()).uniqueTypes;
    await queryInterface.bulkInsert(
      'Types',
      array.map((type) => ({
        title: type,
      })),
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Types', null, {});
  },
};
