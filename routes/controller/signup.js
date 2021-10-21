const {signJoi, dupCheckId, createUser} = require('./unit/signup-joi');
const printError = require('./unit/error');

const signup = async (req, res) => {
  try {
    const {userId, pw, nickname} = await signJoi(req);
    // 아이디 중복 및 닉네임 중복 검사
    await dupCheckId(userId, nickname);
    // 단방향 암호화 및 회원가입
    await createUser(userId, pw, nickname, res);
  } catch (err) {
    printError(req, err);
    res.send({msg: err.message});
  }
};

module.exports = {signup};