/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Types',
          },
          key: 'id',
        },
      },
      kp_id: {
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      year: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
      },
      country: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.TEXT,
      },
      image_horizontal: {
        type: Sequelize.TEXT,
      },
      logo: {
        type: Sequelize.TEXT,
      },
      director: {
        type: Sequelize.STRING,
      },
      path_video: {
        type: Sequelize.TEXT,
      },
      source: {
        type: Sequelize.TEXT,
      },
      path_trailer: {
        type: Sequelize.TEXT,
      },
      duration: {
        type: Sequelize.INTEGER,
      },
      rating: {
        type: Sequelize.STRING,
      },
      fees: {
        type: Sequelize.STRING,
      },
      ageRating: {
        type: Sequelize.INTEGER,
      },
      productionCompanies: {
        type: Sequelize.STRING,
      },
      similarMovies: {
        type: Sequelize.TEXT,
      },
      actors: {
        type: Sequelize.TEXT,
      },
      subscription: {
        type: Sequelize.BOOLEAN,
      },
      isRecommended: {
        type: Sequelize.BOOLEAN,
      },
      isWeekTop: {
        type: Sequelize.BOOLEAN,
      },
      isHighRated: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Movies');
  },
};
