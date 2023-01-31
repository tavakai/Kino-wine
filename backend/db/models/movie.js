const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Type, Actor, Genre, User,
    }) {
      this.belongsTo(Type, {
        foreignKey: 'type_id',
      });
      this.belongsToMany(Actor, { through: 'ActorMovies', foreignKey: 'movie_id' });
      this.belongsToMany(Genre, { through: 'GenreMovies', foreignKey: 'movie_id' });
      this.belongsToMany(User, { through: 'Favorites', foreignKey: 'movie_id' });
      this.belongsToMany(User, { through: 'Reviews', foreignKey: 'movie_id', as: 'review_movie_id' });
    }
  }
  Movie.init({
    type_id: DataTypes.INTEGER,
    kp_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    country: DataTypes.STRING,
    image: DataTypes.TEXT,
    image_horizontal: DataTypes.TEXT,
    logo: DataTypes.TEXT,
    director: DataTypes.STRING,
    path_video: DataTypes.TEXT,
    path_trailer: DataTypes.TEXT,
    duration: DataTypes.INTEGER,
    rating: DataTypes.STRING,
    fees: DataTypes.STRING,
    ageRating: DataTypes.INTEGER,
    productionCompanies: DataTypes.STRING,
    similarMovies: DataTypes.TEXT,
    actors: DataTypes.TEXT,
    subscription: DataTypes.BOOLEAN,
    isRecommended: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};
