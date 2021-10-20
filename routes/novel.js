const express = require("express");
const {
  getProduct,
  createProduct,
  handleLike,
} = require('./controller/novel')
const authUser = require('../middlewares/auth-middleware')

const router = express.Router();

//상세페이지(product의 세부 정보와 댓글 배열을 보내준다.)
router.get("/:productId", getProduct);
//product 추가(임시 테스트 데이터 추가용)
router.post("/", createProduct);
//좋아요 추가, 삭제
router.post('/like', authUser, handleLike)

module.exports = router;
