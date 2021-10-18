const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.route('/')
  .post(async (req, res) => {
    try {
      const {userId, pw} = req.body;
      const user = await User.findOne({where: {userId}});

      if (user) {
        if (await bcrypt.compare(pw, user.pw)) {
          const token = jwt.sign({userId: user.userId}, process.env.JWT_SECRET);
          res.send({token, msg: 'success'});
        } else {
          res.send({msg: '아이디 또는 비밀번호가 틀렸습니다.'});
        }
      } else {
        res.send('존재하지 않는 아이디입니다.');
      }
    } catch (err) {
      res.send(`${req.url}, ${req.method}, ${req.error}`);
    }
  });

module.exports = router;