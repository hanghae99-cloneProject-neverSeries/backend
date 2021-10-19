/**
 * @swagger
 * /:
 *  get:
 *    summary: 메인 페이지 API
 *    description: 메인 페이지에서 도서 목록을 가져오는 API
 *    tags:
 *      - 홈페이지
 *    responses:
 *      200:
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                products:
 *                  type: array
 *                  items:
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
 *                        type: array
 *                      userId:
 *                        type: integer
 *                      imagURL:
 *                        type: string
 *            example:
 *              products: [
 *                  {title: 화산 귀환, description: 13대 화산제자 청명, bookInfo: 출판내용, round: 1, like: [], userID: 1, imgURL: 이미지 사진},
 *                  {title: 마도전생기, description: 마도가 전생, bookInfo: 출판내용, round: 1, like: [], userID: 1, imgURL: 이미지 사진}
 *              ]
 *
 *
 */