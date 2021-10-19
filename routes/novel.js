const express = require("express");
const Products = require('../models/products');
const Reviews = require('../models/reviews');
const Likes = require('../models/likes');

const router = express.Router();

router.get("/:productNo", async (req, res) => {
  console.log(req.params);
  const { productNo } = req.params;
  console.log(productNo);
  // const all = await Products.findAll();
  // console.log(all);
  const product = await Products.findOne({
    where: { id: productNo },
    include: [
      { model: Likes },
    ]
  });
  console.log(product);
  const reviews = await Reviews.findAll({
    where: { productId: productNo },
  })
  res.send({ product: product, reviews: reviews });
});


router.post("/", async (req, res) => {
  console.log(req.body);
  const { title, description, bookInfo, round, imgURL } = req.body;

  const product = await Products.create({
    title, description, bookInfo, round, imgURL
  });
  console.log(product);

  res.send({});
});

router.post('/like', async (req, res) => {
  try {
    console.log(req.body);
    const { productNo, like } = req.body;
    const userIdTmp = 12;
    //포스트맨에서 req.body의 like가 
    //'true', 'false' 문자열로 들어왔어서 == 으로 했는데 나중에 변경
    if (like == true) {//좋아요가 true인 상태에서는 추가
      console.log('like = true');
      const likes = await Likes.create({
        userId: userIdTmp,
        productId: productNo,
      })
      console.log(likes);
    }
    else {//좋아요가 false인 상태에서는 삭제
      const likes = await Likes.destroy({
        where: {
          userId: userIdTmp,
          productId: productNo
        }
      })
    }
    res.send({ msg: "like = " + like })
  } catch (error) {
    console.log(error);
  }
})


module.exports = router;
