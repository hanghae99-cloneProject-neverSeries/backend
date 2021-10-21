const bcrypt = require('bcrypt');
const User = require('../../models/users');
const {signJoi, dupCheckId} = require('./unit/signup-joi');
const printError = require('./unit/error');

const signup = async (req, res) => {
  try {
    const {userId, pw, nickname} = await signJoi(req);
    // 아이디 중복 및 닉네임 중복 검사
    await dupCheckId(userId, nickname);

    // 모든 조건 통과 시 비밀번화 단방향 암호화 및 user 생성
    const EncryptPw = bcrypt.hashSync(pw, parseInt(process.env.SALT));
    await User.create({userId, pw: EncryptPw, nickname});
    res.send({msg: '회원 가입을 축하드립니다.'});

  } catch (err) {
    printError(req, err);
    res.send({msg: err.message});
  }
};

module.exports = {signup};