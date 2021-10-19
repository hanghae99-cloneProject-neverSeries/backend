/**
 * @swagger
 * /novel/{productId}:
 *  get:
 *    summary: 특정 소설의 상세 내용을 가져오는 API
 *    description: 특정 소설의 상세 내용을 가져오는 API 입니다.
 *    tags:
 *      - 소설
 *    parameters:
 *      - in: path
 *        name: productId
 *        schema:
 *          type: integer
 *        required: true
 *        description: 도서의 아이디값
 *    responses:
 *      200:
 *        description: 정상적인 요청, 응답
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                product:
 *                  type: object
 *                  properties:
 *                    title:
 *                      type: string
 *                    description:
 *                      type: string
 *                    bookInfo:
 *                      type: string
 *                    round:
 *                      type: string
 *                    like:
 *                      type: integer
 *                    userId:
 *                      type: integer
 *                    imgURL:
 *                      type: string
 *                reviews:
 *                  type: object
 *                  properties:
 *                    userId:
 *                      type: integer
 *                    productId:
 *                      type: integer
 *                    review:
 *                      type: string
 *              example:
 *                product:
 *                  title: 화산 귀환
 *                  description: 대 화산화 13대 제자, 천하삼대검수, 매화검존..
 *                  bookInfo: 무협 비가 러프미디어 전체이용가
 *                  round: 1000
 *                  like: 3000
 *                  userId: 1
 *                  imgURL: https://series.naver.com/novel/detail.series?productNo=4130558#
 *                reviews:
 *                  userId: 1
 *                  productId: 1
 *                  review: 무야호?
 */

/**
 * @swagger
 * /novel:
 *  post:
 *    summary: 도서 작성 API
 *    description: 도서에 대한 더미 데이터를 생성하는 API 입니다.
 *    tags:
 *      - 소설
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required: true
 *            properties:
 *              title:
 *                type: string
 *                required: true
 *              description:
 *                type: string
 *                required: true
 *              bookInfo:
 *                type: string
 *                required: true
 *              round:
 *                type: integer
 *                required: true
 *              imgURL:
 *                type: string
 *                required: true
 *            example:
 *              title: 화산 귀환
 *              description: 대 화산화 13대 제자, 천하삼대검수, 매화검존..
 *              bookInfo: 무협 비가 러프미디어 전체이용가
 *              round: 1000
 *              imgURL: https://series.naver.com/novel/detail.series?productNo=4130558#
 *    responses:
 *      200:
 *        description: 정상적인 요청, 응답
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *              example:
 *                msg: ''
 */

/**
 * @swagger
 * /novel/like:
 *  post:
 *    summary: 특정 도서 좋아요 API
 *    description: 특정 도서에 대해 좋아요 를 하는 API 입니다.
 *    tags:
 *      - 소설
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              productId:
 *                type: integer
 *              like:
 *                type: string
 *            example:
 *              productId: 1
 *              like: like
 *    responses:
 *      200:
 *        description: 정상적인 요청, 응답
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *              example:
 *                msg: success
 */