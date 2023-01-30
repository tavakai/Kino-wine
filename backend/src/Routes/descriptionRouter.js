const express = require('express');
const { Movie } = require('../../db/models');

const router = express.Router();

router.get('/moviepage/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id, 'id server moviepage');
  try {
    const desc = await Movie.findOne({ where: { kp_id: +id } });
    console.log(desc, 'desc');
    res.json(desc);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

module.exports = router;
