const express = require("express");
<<<<<<< HEAD
const { getProduct, createProduct, handleLike } = require("./controller/novel");
const authMiddleware = require("../middlewares/auth-middleware");
=======
const {
  getProduct,
  createProduct,
  handleLike,
} = require('./controller/novel')
const authUser = require('../middlewares/auth-middleware')
>>>>>>> f847bc638bb87af27411253ef248c727d50ae556

const router = express.Router();

//상세페이지(product의 세부 정보와 댓글 배열을 보내준다.)
router.get("/:productId", getProduct);
//product 추가(임시 테스트 데이터 추가용)
router.post("/", createProduct);
//좋아요 추가, 삭제
<<<<<<< HEAD
router.post("/like", handleLike);
=======
router.post('/like', authUser, handleLike)
>>>>>>> f847bc638bb87af27411253ef248c727d50ae556

module.exports = router;
