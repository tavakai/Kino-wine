const express = require('express');
const { Movie } = require('../../db/models');

const router = express.Router();

router.get('/moviepage/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id, 'id');
  const desc = await Movie.findOne({ where: { kp_id: id } });
  console.log(desc, 'desc');
  res.json(desc);
});

module.exports = router;
