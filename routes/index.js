const express = require("express");
const Product = require("../models/products");
const Review = require("../models/reviews");
const Like = require("../models/likes");
const Round = require("../models/rounds");
const router = express.Router();
const ctrlIndex = require("../controller/ctrl.index");
const { User } = require("../models");

// router.post("/", ctrlIndex.getProcess.getPost); //게시글 조회

//홈 화면 조회
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({});
    console.log(products);
    res.send({ result: products });
  } catch (err) {
    res.status(400).send({
      //에러처리
    });
  }
});

//마이페이지
router.get("/mypage", async (req, res) => {
  try {
    const userId = 12;
    const chkBuy = await Round.findAll({
      where: { userId: userId },
    });

    const mypage = await Product.findAll({
      where: {},
    });
    for (let i = 0; i < mypage.length; i++) {
      if (mypage[i].round.length > 0) {
      }
    }
    res.send({});
  } catch (err) {
    res.status(400).send({
      //에러처리
    });
  }
});

//머핀 충전
router.post("/muffin", async (req, res) => {
  try {
    //   const { userId } = req.locals
    const userId = 12;
    const user = await User.findOne({ where: { id: userId } });
    const beforeMuffin = user.muffin;
    const afterMuffin = beforeMuffin + 15;
    await User.update(
      { muffin: afterMuffin },
      {
        where: {
          id: userId,
        },
      }
    );
    res.send({ muffin: afterMuffin });
  } catch (err) {
    res.status(400).send({
      //에러처리
    });
  }
});

//상품 구매
router.put("/buy", async (req, res) => {
  try {
    // const { userId } = req.locals;
    const userId = 12;

    console.log(req.body);
    const { productId, round } = req.body;
    const rounds = await Round.create({
      userId: userId,
      productId: productId,
      round: round,
    });
    console.log(rounds);
  } catch (err) {
    res.status(400).send({
      //에러처리
    });
  }
});
module.exports = router;
