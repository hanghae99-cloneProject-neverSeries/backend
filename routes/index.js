const express = require('express');
const router = express.Router();
const authUser = require('../middlewares/auth-middleware');
const {home, mypage, buyMuffin, buyProduct} = require('./controller/index');

//홈 화면 조회
router.get('/', home);
//마이페이지
router.get('/mypage', authUser, mypage);
//머핀 충전
router.post('/muffin', authUser, buyMuffin);
//상품 구매
router.put('/buy', authUser, buyProduct);


module.exports = router;
