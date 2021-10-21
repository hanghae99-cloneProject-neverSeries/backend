const bcrypt = require('bcrypt');
const User = require('../../models/users');
const joi = require('joi');

const signup = async (req, res, next) => {
  try {
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

    const { userId, pw, pwCheck, nickname } = await userIdSchema.validateAsync(req.body);

    // 존재하는 아이디 중복 체크

    // userID, pw 정규식 표현
    // const IdFilter = /^[a-z0-9_-]{5,20}$/;  // 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.
    // const pwFilter = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/; //8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
    if (await User.findOne({ where: { userId } })) {
      res.send({ msg: '이미 존재하는 아이디입니다.' });
    }
    if (await User.findOne({ where: { nickname } })) {
      res.send({ msg: '이미 존재하는 닉네임입니다.' });
    }

    // 모든 조건 통과 시 비밀번화 단방향 암호화 및 user 생성
    const EncryptPw = bcrypt.hashSync(pw, parseInt(process.env.SALT));
    await User.create({ userId, pw: EncryptPw, nickname });
    res.send({ msg: '회원 가입을 축하드립니다.' });
  } catch (err) {
    console.log(`${req.url}, ${req.method}, ${req.error}`);
    res.send({ msg: err.message })
  }
};

module.exports = { signup };