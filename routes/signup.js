const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/users');

router.route('')
  // 회원 가입 등록
  .post(async (req, res) => {
    try {

      const {userId, pw, pwCheck, nickname} = req.body;
      if(await User.findOne({where: {userId}})) {
        res.send({msg: '이미 존재하는 아이디입니다.'});
      } else {
        const EncryptPw = bcrypt.hashSync(pw, 10);
        await User.create({userId, pw: EncryptPw, nickname});
        res.send({msg: '회원 가입을 축하드립니다.'})
      }
    } catch (err) {
      res.send(`${req.url}, ${req.method}, ${req.error}`)
    }
  })

module.exports = router;