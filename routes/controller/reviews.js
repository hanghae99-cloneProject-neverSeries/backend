const Reviews = require('../../models/reviews');


// 댓글 작성
const createReview = async (req, res) => {
  try {
    // console.log(req.params);
    // console.log(req.body);
    // console.log(res.locals);
    const { productId } = req.params
    const { review, createdAt, } = req.body;
    const { user_id, nickname } = res.locals;
    //미들웨어에서 id와 username을 같이 넘겨줄 수 있는지 알아보아야 함
    //만약 같이 넘겨줄수 없다면 users db에서 직접 검색해서 username 사용
    // const tmpUserId = 12;

    //const tmpCreatedAt = new Date();//임시, 원래는 프론트에서 넘겨주어야 함

    const product = await Reviews.create({
      productId, user_id, nickname, review, createdAt
    });
    console.log(product);

    res.send({ msg: "댓글이 작성되었습니다" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message })
  }
};

//댓글 수정
const updateReview = async (req, res) => {
  try {
    console.log(req.params);
    console.log(req.body);
    const { productId } = req.params
    const { review, reviewsId, } = req.body;
    const { user_id } = res.locals;
    //미들웨어에서 id와 username을 같이 넘겨줄 수 있는지 알아보아야 함
    //만약 같이 넘겨줄수 없다면 users db에서 직접 검색해서 username 사용
    // const tmpUserId = 12;

    const thisReview = await Reviews.findByPk(reviewsId);

    console.log(thisReview);
    //검증
    //1. userId가 안 맞거나
    //2. productId가 안 맞을때
    //오류로 throw
    if (thisReview.productId !== Number(productId) || thisReview.user_id !== Number(user_id)) {// 이것도 넘겨줄때 integer로 넘겨주거나 number처리 안하면 오류남
      throw Error("서버 검증 오류");
    }
    await thisReview.update({ review: review });

    res.send({ msg: "댓글이 수정되었습니다" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message });
  }
};

//댓글 삭제
const removeReview = async (req, res) => {
  try {
    console.log(req.params);
    console.log(req.body);
    console.log(res.locals);
    const { productId } = req.params
    const { reviewsId } = req.body;
    const { user_id } = res.locals;

    //미들웨어에서 id와 username을 같이 넘겨줄 수 있는지 알아보아야 함
    // const tmpUserId = 12;

    const thisReview = await Reviews.findByPk(reviewsId);

    if (thisReview.productId !== Number(productId) || thisReview.user_id !== Number(user_id)) {// 이것도 넘겨줄때 integer로 넘겨주거나 number처리 안하면 오류남
      throw Error("서버 검증 오류");
    }
    await thisReview.destroy();

    res.send({ msg: "댓글이 삭제되었습니다" });
  }
  catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message });
  }
};

module.exports = {
  createReview,
  updateReview,
  removeReview
}
