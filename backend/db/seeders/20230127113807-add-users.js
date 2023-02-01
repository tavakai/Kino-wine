/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Зарина',
        email: '',
        password: '',
        avatar: '',
        isSubscribed: false,
      },
      {
        name: 'Довран',
        email: '',
        password: '',
        avatar: '',
        isSubscribed: false,
      },
      {
        name: 'Андрей Нгуен',
        email: '',
        password: '',
        avatar: '',
        isSubscribed: false,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
