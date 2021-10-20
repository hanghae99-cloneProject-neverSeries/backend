const express = require("express");

const router = express.Router();

const {
  createReview,
  updateReview,
  removeReview,
} = require("./controller/reviews");

router
  .route("/:productId")
  .post(createReview) // 댓글 작성
  .put(updateReview) // 댓글 수정
  .delete(removeReview); // 댓글 삭제

module.exports = router;
