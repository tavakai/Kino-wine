const express = require('express');
const { Op } = require('sequelize');
const { Movie } = require('../../db/models');

const router = express.Router();

router.get('/rec', async (req, res) => {
  try {
    const recMovies = await Movie.findAll({ where: { isRecommended: true } });
    return res.json(recMovies);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.get('/weektop', async (req, res) => {
  try {
    const weekTopMovies = await Movie.findAll({ where: { isWeekTop: true } });
    return res.json(weekTopMovies);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.get('/highrated', async (req, res) => {
  try {
    const highRatedMovies = await Movie.findAll({ where: { isHighRated: true } });
    return res.json(highRatedMovies);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.post('/search', async (req, res) => {
  const { input } = req.body;
  function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }
  try {
    const searchedMovies = await Movie.findAll({ where: { title: { [Op.substring]: `${ucFirst(input)}` } } });
    return res.json(searchedMovies);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

module.exports = router;
