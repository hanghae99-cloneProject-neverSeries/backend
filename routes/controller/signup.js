const bcrypt = require('bcrypt');
const User = require('../../models/users');
const {signJoi} = require('./unit/signup-joi');
const printError = require('./unit/error');

const signup = async (req, res) => {
  try {
    const {userId, pw, nickname} = await signJoi(req);

    // 존재하는 아이디 중복 체크
    if (await User.findOne({where: {userId}})) {
      res.send({msg: '이미 존재하는 아이디입니다.'});
    } else if (await User.findOne({where: {nickname}})) {
      res.send({msg: '이미 존재하는 닉네임입니다.'});
    } else { // 모든 조건 통과 시 비밀번화 단방향 암호화 및 user 생성
      const EncryptPw = bcrypt.hashSync(pw, parseInt(process.env.SALT));
      await User.create({userId, pw: EncryptPw, nickname});
      res.send({msg: '회원 가입을 축하드립니다.'});
    }
  } catch (err) {
    printError(req, err);
    res.send({msg: err.message});
  }
};

module.exports = {signup};