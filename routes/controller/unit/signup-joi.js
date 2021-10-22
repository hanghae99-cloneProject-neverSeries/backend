const joi = require('joi');
const User = require('../../../models/users');
const bcrypt = require('bcrypt');

// Todo --> 테스트 코드 진행... 어케 하누
async function signJoi(req) {
  const IdFilter = /^[a-z0-9_-]{5,20}$/;  // 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.
  const pwFilter = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/; //8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.

  const userIdSchema = joi.object({
    userId: joi.string().min(5).max(20).pattern(new RegExp(IdFilter)).required()
      .error(new Error('아이디는 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.')),
    pw: joi.string().min(8).max(16).pattern(new RegExp(pwFilter)).required()
      .error(new Error('비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.')),
    pwCheck: joi.equal(joi.ref('pw'))
      .error(new Error('비밀번호가 일치하지 않습니다.')),
    nickname: joi.string().min(1).required(),
  });
  const {userId, pw, pwCheck, nickname} = await userIdSchema.validateAsync(req.body);
  return {userId, pw, pwCheck, nickname};
}

// 아이디 중복 및 닉네임 중복 검사
async function dupCheckId(userId, nickname) {
  if (await User.findOne({where: {userId}})) {
    throw new Error('이미 존재하는 아이디입니다.');
  } else if (await User.findOne({where: {nickname}})) {
    throw new Error('이미 존재하는 닉네임입니다.');
  }
}

// 단방향 암호화 및 회원가입
async function createUser(userId, pw, nickname, res) {
  const EncryptPw = bcrypt.hashSync(pw, parseInt(process.env.SALF));
  await User.create({userId, pw: EncryptPw, nickname});
  return res.send({msg: '회원 가입을 축하드립니다.'});
}

module.exports = {signJoi, dupCheckId, createUser};