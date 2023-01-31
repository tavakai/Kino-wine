const express = require('express');
// const { Op } = require('sequelize');
const { Favorite, User, Movie } = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const userId = req.session.user.id;
  try {
    const favMovies = await User.findByPk(userId, {
      include: {
        model: Favorite,
        include: Movie,
      },
    });
    return res.json(favMovies);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  const { id } = req.body;
  try {
    const newFav = await Favorite.create({ user_id: req.session.user.id, movie_id: Number(id) });
    return res.json(newFav);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

module.exports = router;
