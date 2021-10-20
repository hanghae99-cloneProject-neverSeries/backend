// 사용자 인증 미들웨어
const jwt = require("jsonwebtoken");
const User = require("../models/users");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (token) {
      const { userId } = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findOne({ where: { userId } });
      res.locals.userId = user.userId;
      res.locals.user_id = user.id;
      res.locals.nickname = user.nickname;
      res.locals.muffin = user.muffin;
      next();
    } else {
<<<<<<< HEAD
      return res.send(
        `${req.url}, ${req.method}, ${req.error}`,
        "인증받지 않은 사용자"
      );
=======
      return res.status(401).send({ msg: "로그인 후 이용하실 수 있습니다." });
>>>>>>> 304ae5c7cdecda8fea26377e57045817fffab2af
    }
  } catch (err) {
    return res.status(401).send({ msg: "로그인 후 이용하실 수 있습니다." });
  }
};
