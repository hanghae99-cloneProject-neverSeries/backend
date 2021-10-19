const express = require("express");

const router = express.Router();

const {
  createReview,
  updateReview,
  removeReview
} = require('./controller/reviews')

// 댓글 작성
// 댓글 수정
// 댓글 삭제
router.route('/:productId')
  .post(createReview)
  .put(updateReview)
  .delete(removeReview);

module.exports = router;
