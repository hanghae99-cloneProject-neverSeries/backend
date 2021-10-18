const express = require("express");
const Products = require('../models/products');
const Reviews = require('../models/reviews');

const router = express.Router();

router.get("/:productNo", async (req, res) => {
  console.log(req.params);
  console.log(req.body);
  const { productId } = req.params;
  const product = await Products.findByPk(productId);

  const reviews = await Reviews.findAll({
    where: { productId: productId },
  })
  res.send({ product: product, reviews: reviews });
});


router.post("/", async (req, res) => {
  console.log(req.body);
  const { title, description, bookInfo, round } = req.body;

  const product = await Products.create({
    title, description, bookInfo, round, like: 0,
  });

  res.send({});
});



module.exports = router;
