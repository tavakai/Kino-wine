const express = require('express');
const { Op } = require('sequelize');
const { Genre, Movie } = require('../../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const genres = await Genre.findAll({ where: { image: { [Op.not]: '' } } });
    return res.json(genres);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.get('/movies', async (req, res) => {
  try {
    const genreMovies = await Genre.findAll({ where: { image: { [Op.not]: '' } }, include: Movie });
    console.log(genreMovies);
    return res.json(genreMovies);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const genreMovies = await Genre.findByPk(id, { include: Movie });
    if (genreMovies) {
      return res.json(genreMovies);
    }
    return res.sendStatus(404);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

module.exports = router;
