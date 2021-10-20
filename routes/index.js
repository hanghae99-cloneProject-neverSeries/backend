const express = require('express');
const Product = require('../models/products');
const router = express.Router();
const {User} = require('../models');
const BuyProduct = require('../models/buyproducts');
const authUser = require('../middlewares/auth-middleware');
const {Sequelize, Op} = require('sequelize');

//홈 화면 조회
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({});
    res.send({result: products});
  } catch (err) {
    res.status(400).send({
      //에러처리
    });
  }
});

//마이페이지
router.get('/mypage', authUser, async (req, res, next) => {
  try {
    const {user_id} = res.locals;
    const buyproduct = await BuyProduct.findAll({
      where: {userId: user_id},
      raw: true,
      attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('productId')), 'productId']]
    });

    const id = (buyproduct.map(((value, index) => {
      return {id: value.productId};
    })));

    const products = await Product.findAll({
      where: {
        [Op.or]: id
      },
      raw: true
    });
    console.log(products);
    res.send(products);
  } catch (err) {
    next(err);
  }
});

//머핀 충전
router.post('/muffin', authUser, async (req, res, next) => {
  try {
    const {userId} = res.locals;
    const muffin = req.body.muffin + 15;
    await User.update({muffin}, {where: {userId}});
    res.send({msg: '머핀이 충전되었습니다'});
  } catch (err) {
    next(err);
  }
});

//상품 구매
router.put('/buy', authUser, async (req, res, next) => {
  try {
    const {userId, user_id} = res.locals;
    const {productId, round} = req.body;
    const userInfo = await User.findOne(
      {
        raw: true,  // 모델 형식이 아닌 데이터 형식으로 변환
        where: {userId},
        attributes: ['muffin'],
      }
    );
    const userMuffin = userInfo.muffin;
    if (userMuffin <= 2) {
      res.send({msg: '쿠키가 부족합니다.'});
    } else {
      if ((await BuyProduct.findAll({where: {userId: user_id, productId, round}})).length > 0) {
        res.send({msg: '이미 구매한 도서입니다.'}); // 구매안하기전 : 구매   구매한 후: 보기 --> Todo 프론트 작업 후 불필요한 부분
      } else {
        await User.update({muffin: userMuffin - 3}, {where: {userId}});
        await BuyProduct.create({userId: user_id, productId, round});
        res.send({msg: '구매 완료'});
      }
    }
  } catch (err) {
    next(err);
  }
});
module.exports = router;
