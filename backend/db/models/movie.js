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
      this.belongsToMany(User, { through: 'Reviews', foreignKey: 'movie_id' });
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    country: DataTypes.STRING,
    image: DataTypes.TEXT,
    director: DataTypes.STRING,
    path_video: DataTypes.TEXT,
    path_trailer: DataTypes.TEXT,
    duration: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    subscription: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};
