const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Movie }) {
      this.belongsToMany(Movie, { through: 'ActorMovies', foreignKey: 'actor_id' });
    }
  }
  Actor.init({
    fullname: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Actor',
  });
  return Actor;
};
