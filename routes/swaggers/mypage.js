/**
 * @swagger
 * /mypage:
 *  get:
 *    summary: 나의 정보 API
 *    description: 나의 정보에 대한 내역들을 가져오는 API 입니다.
 *    tags:
 *      - 마이페이지
 *    responses:
 *      200:
 *        description: 정상적인 요청, 응답
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                products:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      title:
 *                        type: string
 *                      description:
 *                        type: string
 *                      bookInfo:
 *                        type: string
 *                      round:
 *                        type: integer
 *                      like:
 *                        type: integer
 *                      userId:
 *                        type: integer
 *                      imgURL:
 *                        type: string
 *              example:
 *                products: [
 *                  {title: 화산 귀환, description: 13대 화산제자 청명, bookInfo: 출판내용, round: 1, like: 1, userID: 1, imgURL: 이미지 사진},
 *                  {title: 마도전생기, description: 마도가 전생, bookInfo: 출판내용, round: 1, like: 1, userID: 1, imgURL: 이미지 사진}
 *                ]
 */