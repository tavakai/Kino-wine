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

// router.get('/search', async (req, res) => {
//   const query = req.query.q;
//   function ucFirst(str) {
//     if (!str) return str;
//     return str[0].toUpperCase() + str.slice(1);
//   }
//   try {
//     const searchedMovies = await Movie.findAll({ where: { title: { [Op.substring]: `${ucFirst(query)}` } } });
//     return res.json(searchedMovies);
//   } catch (e) {
//     console.log(e);
//     return res.sendStatus(500);
//   }
// });
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
