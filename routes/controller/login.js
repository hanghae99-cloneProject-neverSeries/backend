const User = require('../../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  try {
    const { userId, pw } = req.body;
    const user = await User.findOne({ where: { userId } });

    if (user) {
      if (await bcrypt.compare(pw, user.pw)) {
        const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET);
        res.send({ token, msg: 'success' });
      } else {
        res.status(401).send({ msg: '아이디 또는 비밀번호가 틀렸습니다.' });
      }
    } else {
      res.status(401).send({msg: '존재하지 않는 아이디입니다.'});
    }
  } catch (err) {
    console.log(`${req.url}, ${req.method}, ${req.error}`);
    res.status(401).send({msg: '로그인에 실패하셨습니다.'});
  }
};

module.exports = { login }