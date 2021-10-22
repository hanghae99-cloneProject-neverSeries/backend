const Products = require('../../models/products');
const Reviews = require('../../models/reviews');
const Likes = require('../../models/likes');
const Rounds = require('../../models/rounds');
const { Sequelize, } = require('sequelize');
const BuyProduct = require('../../models/buyproducts');


// Todo ---> Like : [좋아요 갯수(length), status(본인이 좋아요 유무)]
//상세페이지(product의 세부 정보와 댓글 배열을 보내준다.)
const getProduct = async (req, res) => {
  try {
    console.log(req.params);
    const { productId } = req.params;
    const user_id = res.locals.user_id ? res.locals.user_id : "";
    const myMuffin = res.locals.muffin ? res.locals.muffin : 0;
    // const all = await Products.findAll();
    console.log(user_id);
    console.log(myMuffin);

    // 도서 찾기
    const product = await Products.findOne({
      where: { id: productId },
      attributes: {
        include: [
          [Sequelize.fn('COUNT', Sequelize.col('Likes.id')), 'like_count'],
        ]
      },
      include: [
        {
          model: Rounds,
          attributes: ['round'],
          separate: true,
        },
        {
          model: Likes,
          attributes: [],
        },
      ],
    });
    console.log(product);

    //내가 좋아요를 눌렀는지 (값이 존재하면 누른 것)
    const myLike = await Likes.findOne({
      where: { productId, user_id },
      raw: true
    })

    // 리뷰 찾기
    const reviews = await Reviews.findAll({
      where: { productId: productId },
      raw: true
    })

    const buyproduct = await BuyProduct.findAll({
      where: { user_id: user_id },
      raw: true,
      attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('productId')), 'productId']]
    });
    res.send({ product, myLike, myMuffin, reviews, buyproduct });
  }
  catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message })
  }
};

//product 추가(임시 테스트 데이터 추가용)
const createProduct = async (req, res) => {
  try {

    const { title, description, bookInfo, round, imgURL, star } = req.body;

    const product = await Products.create({
      title, description, bookInfo, round, imgURL, star,
    });

    const productId = product.id;
    //책 한권이 create될 때 각각의 회차 도 create되어야 한다.

    //프로미스 반복 알아볼 것
    // const array = new Array(Number(round));
    let datas = [];
    for (let i = 0; i < Number(round); i++) {
      datas.push({ round: i + 1, productId: productId });
    }
    // const datas = array.map((val, idx) => {
    //   console.log("asdfasdfasdf", idx);
    //   return new Object({ round: idx, productId: productId });
    // })
    // console.log("datas : " + datas);

    for await (const data of datas) {
      await Rounds.create(data);
    }
    // for (let i = 0; i < round; i++) {
    //   await Rounds.create({
    //     round: i.toString(),
    //     productId,
    //   })
    // }
    console.log(product);

    res.send({ msg: "더미데이터 생성" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message })
  }
};

const handleLike = async (req, res) => {
  try {
    console.log(req.body);
    console.log(res.locals);
    const { productId, like } = req.body;
    const { user_id } = res.locals;
    // const userIdTmp = 12;
    //포스트맨에서 req.body의 like가 
    //'true', 'false' 문자열로 들어왔어서 == 으로 했는데 나중에 변경

    if (like) {//좋아요가 true인 상태에서는 추가
      const likes = await Likes.create({
        user_id: user_id,
        productId: productId,
      })
      console.log(likes);
    }
    else {//좋아요가 false인 상태에서는 삭제
      await Likes.destroy({
        where: {
          user_id: user_id,
          productId: productId
        }
      })
    }

    console.log("like = " + like.toString())
    res.send({ msg: "like = " + like.toString() })
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message })
  }
}


module.exports = {
  getProduct,
  createProduct,
  handleLike,
}
