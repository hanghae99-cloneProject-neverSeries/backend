const Product = require('../models/products');
const { User } = require('../models');
const BuyProduct = require('../models/buyproducts');
const { Sequelize, Op } = require('sequelize');

//홈 화면 조회
const home = async (req, res, next) => {
  try {
    const products = await Product.findAll({});
    res.send({ result: products });
  } catch (err) {
    next();
  }
};

//마이페이지
const mypage = async (req, res, next) => {
  try {
    const { user_id } = res.locals;
    const buyproduct = await BuyProduct.findAll({
      where: { user_id: user_id },
      raw: true,
      attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('productId')), 'productId']]
    });

    const id = (buyproduct.map(((value, index) => {
      return { id: value.productId };
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
};

//머핀 충전
const buyMuffin = async (req, res, next) => {
  try {
    const { userId } = res.locals;
    const muffin = Number(res.locals.muffin) + Number(req.body.muffin);
    await User.update({ muffin }, { where: { userId } });
    res.send({ msg: '머핀이 충전되었습니다' });
  } catch (err) {
    next(err);
  }
};

//상품 구매
const buyProduct = async (req, res, next) => {
  try {
    const { userId, user_id, muffin } = res.locals;
    const { productId, round } = req.body;

    if (muffin <= 2) {
      res.send({ msg: '쿠키가 부족합니다.' });
    } else {
      if ((await BuyProduct.findAll({ where: { user_id: user_id, productId, round } })).length > 0) {
        res.send({ msg: '이미 구매한 도서입니다.' }); // 구매안하기전 : 구매   구매한 후: 보기 --> Todo 프론트 작업 후 불필요한 부분
      } else {
        await User.update({ muffin: muffin - 3 }, { where: { userId } });
        await BuyProduct.create({ user_id: user_id, productId, round });
        res.send({ msg: '구매 완료' });
      }
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { home, mypage, buyMuffin, buyProduct }
