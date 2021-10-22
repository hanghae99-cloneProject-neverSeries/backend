const express = require('express');
const router = express.Router();
const {signup} = require('./controller/signup');
const {login} = require('./controller/login');
const authUser = require('../middlewares/auth-middleware');
const {userAuthController} = require('./controller/me');

router.post('/signup', signup)  // 회원 가입
router.post('/login', login)  // 로그인
router.get('/me', authUser, userAuthController); // 본인 확인

module.exports = router;