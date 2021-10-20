// 사용자 인증 미들웨어
const jwt = require("jsonwebtoken");
const User = require("../models/users");

module.exports = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];

      const { userId } = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findOne({ where: { userId } });
      res.locals.userId = user.userId;
      res.locals.user_id = user.id;
      res.locals.nickname = user.nickname;
      res.locals.muffin = user.muffin;
      next();
    } else {
      next();
    }
  } catch (err) {
    return res.status(401).send({ msg: "알수없는 문제가 생겼습니다." });
  }
};
