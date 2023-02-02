const express = require('express');
const { Review, User, Movie } = require('../../db/models');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const reviews = await Review.findAll({ where: { movie_id: Number(id) } });
    // const reviews = await Movie.findOne({
    //   where: { id: Number(id) },
    //   // include: {
    //   //   model: Review,
    //   include: 'reviewUsers',
    //   // },
    // });
    const users = await User.findAll({
      attributes: ['id', 'name'],
    });
    console.log(reviews);
    console.log(users);

    return res.json({ reviews, users });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  const { input, id } = req.body;
  try {
    const newReview = await Review.create({
      user_id: req.session.user.id, movie_id: Number(id), title: input.title, text: input.text,
    });
    return res.json(newReview);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const { likes } = req.body;
  console.log(likes);
  try {
    // const updatedReview = await Review.update(likes, { where: { id } });
    await Review.update(req.body, { where: { id } });
    // return res.json(updatedReview);
    return res.sendStatus(200);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

module.exports = router;
