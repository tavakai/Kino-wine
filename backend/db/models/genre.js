const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Movie }) {
      this.belongsToMany(Movie, { through: 'GenreMovies', foreignKey: 'genre_id' });
    }
  }
  Genre.init({
    title: DataTypes.STRING,
    image: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Genre',
    // freezeTableName: true,
  });
  return Genre;
};
