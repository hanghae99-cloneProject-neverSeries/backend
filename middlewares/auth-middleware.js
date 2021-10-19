// 사용자 인증 미들웨어
const jwt = require('jsonwebtoken');
const User = require('../models/users');

module.exports = async (req, res, next) => {
  try {
    console.log(req.headers);
    const token = req.headers.authorization.split(' ')[1];

    if (token) {
      const { userId } = jwt.verify(token, process.env.JWT_SECRET);
      console.log(userId);
      const user = await User.findOne({ where: { userId } });
      console.log(user);
      res.locals.userId = user.userId;
      res.locals.user_id = user.id;
      res.locals.nickname = user.nickname;
      console.log(res.locals.user_id);
      next();
    } else {
      return res.send(`${req.url}, ${req.method}, ${req.error}`, '인증받지 않은 사용자');

    }
  } catch (err) {
    return res.send(`${req.url}, ${req.method}, ${req.error}`);
  }
};