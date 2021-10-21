// 사용자 인증 미들웨어
const jwt = require('jsonwebtoken');
const User = require('../models/users');

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers
    if (authorization) {
      next();
      return;
    }
    const tokenType = req.headers.authorization.split(' ')[0];
    const tokenValue = authorization.split(' ')[1];

    if (tokenType !== "Bearer") {
      next();
      return;
    }
    if (tokenValue === null || !tokenValue || tokenValue === 'undefined') {
      next();
      return;
    }
    const { userId } = jwt.verify(tokenValue, process.env.JWT_SECRET);
    const user = await User.findOne({ where: { userId } });

    res.locals.userId = user.userId;
    res.locals.user_id = user.id;
    res.locals.nickname = user.nickname;
    res.locals.muffin = user.muffin;
    next();
    return;
  }
  catch (error) {
    return res.status(400).send({ msg: "알수없는 오류가 발생했습니다." });
  }
};