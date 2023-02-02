const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

const router = express.Router();

router.post('/reg', async (req, res) => {
  const { name, email, password } = req.body;
  if (name && email && password) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: { name, password: await bcrypt.hash(password, 10) },
      });
      if (created) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.post('/auth', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({
        where: { email },
      });
      if (await bcrypt.compare(password, user.password)) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.post('/check', async (req, res) => {
  if (req.session.user) {
    try {
      const user = await User.findByPk(req.session.user.id);
      if (user) {
        req.session.user.isSubscribed = user.isSubscribed;
      }
    } catch (error) {
      console.log(error, 'error catch');
    }
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid').sendStatus(200);
});

router.post('/subscribe', async (req, res) => {
  const { level } = req.body;
  if (level) {
    try {
      await User.update(
        { isSubscribed: true },
        { where: { id: req.session.user.id } },
      );
      req.session.user.isSubscribed = true;
      return res.sendStatus(200);
    } catch (e) {
      console.log(e, 'error subscribe');
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

module.exports = router;
