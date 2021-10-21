// 로그인 했는지 확인
const userAuthController = async (req, res) => {
  const { userId, user_id, nickname, muffin } = res.locals;
  console.log(userId, user_id, nickname, muffin);
  res.send({ userId, user_id, nickname, muffin });
};

module.exports = {
  userAuthController,
};
