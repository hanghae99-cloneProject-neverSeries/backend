const express = require("express");

const router = express.Router();
const authUser = require('../middlewares/auth-middleware')

const {
  createReview,
  updateReview,
  removeReview
} = require('./controller/reviews')

router.route('/:productId')
  .post(authUser, createReview)// 댓글 작성
  .put(authUser, updateReview)// 댓글 수정
  .delete(authUser, removeReview);// 댓글 삭제

module.exports = router;
