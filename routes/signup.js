const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/users');

router.route('')
  // 회원 가입 등록
  .post(async (req, res) => {
    try {
      const {userId, pw, pwCheck, nickname} = req.body;

      // 존재하는 아이디 중복 체크
      if (await User.findOne({where: {userId}})) {
        res.send({msg: '이미 존재하는 아이디입니다.'});
      } else {
        // userID, pw 정규식 표현
        const IdFilter = /^[a-z0-9_-]{5,20}$/;  // 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.
        const pwFilter = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/; //8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.

        if (!IdFilter.test(userId)) {
          res.send({msg: '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.'});
        } else if (!pwFilter.test(pw)) {
          res.send({msg: '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.'});
        } else if (pw !== pwCheck) {
          res.send({msg: '비밀번호가 일치하지 않습니다.'});
        } else if (await User.findOne({where: {nickname}})) {
          res.send({msg: '이미 존재하는 닉네임입니다.'});
        } else {
          // 모든 조건 통과 시 비밀번화 단방향 암호화 및 user 생성
          const EncryptPw = bcrypt.hashSync(pw, parseInt(process.env.SALT));
          await User.create({userId, pw: EncryptPw, nickname});
          res.send({msg: '회원 가입을 축하드립니다.'});
        }
      }
    } catch (err) {
      res.send(`${req.url}, ${req.method}, ${req.error}`);
    }
  });

module.exports = router;