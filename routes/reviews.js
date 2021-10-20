const express = require("express");

const router = express.Router();
const authUser = require('../middlewares/auth-middleware')

const {
  createReview,
  updateReview,
  removeReview,
} = require("./controller/reviews");

<<<<<<< HEAD
router
  .route("/:productId")
  .post(createReview) // 댓글 작성
  .put(updateReview) // 댓글 수정
  .delete(removeReview); // 댓글 삭제
=======
router.route('/:productId')
  .post(authUser, createReview)// 댓글 작성
  .put(authUser, updateReview)// 댓글 수정
  .delete(authUser, removeReview);// 댓글 삭제
>>>>>>> f847bc638bb87af27411253ef248c727d50ae556

module.exports = router;
