const { getData } = require('../idRequest');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const array = (await getData()).uniqueActors;

    await queryInterface.bulkInsert(
      'Actors',
      array.map((actor) => ({
        fullname: actor.fullname,
        image: actor.image,
        kp_id: actor.kp_id,
      })),
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Actors', null, {});
  },
};
