const express = require("express");
const router = express.Router();
const { signup } = require("./controller/signup");

router
  .route("")
  // 회원 가입 등록
  .post(signup);

module.exports = router;
