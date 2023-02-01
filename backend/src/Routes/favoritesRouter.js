const express = require('express');
// const { Op } = require('sequelize');
const { Favorite, User, Movie } = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const userId = req.session.user.id;
  try {
    const favMovies = await User.findOne({
      where: { id: userId },
      include: Movie,
    });
    return res.json(favMovies.Movies);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  console.log(req.body);
  const { oneFilm } = req.body;
  try {
    await Favorite.create({ user_id: req.session.user.id, movie_id: oneFilm.id });
    const newFavMovie = await Movie.findOne({ where: { id: oneFilm.id } });
    return res.json(newFavMovie);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  console.log('id ---->', id);
  try {
    await Favorite.destroy({ where: { movie_id: Number(id) } });
    return res.sendStatus(200);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

module.exports = router;
