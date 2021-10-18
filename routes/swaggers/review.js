/**
 * @swagger
 * /reviews/{productNo}:
 *  post:
 *    summary: 댓글 작성 API
 *    description: 책에 관한 댓글을 작성하는 API 입니다.
 *    tags:
 *      - 댓글
 *    parameters:
 *      - in: path
 *        name: productNo
 *        schema:
 *          type: integer
 *        required: true
 *        description: 도서의 아이디값
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              nickname:
 *                type: string
 *                required: true
 *              reviews:
 *                type: string
 *                required: true
 *              createdAt:
 *                type: string
 *                required: true
 *            example:
 *              nickname: test
 *              reviews: 리뷰입니다.
 *              createdAt: 2021-10-19 11:11:11
 *    responses:
 *      200:
 *        description: success
 *
 */

/**
 * @swagger
 * /reviews/{productNo}:
 *  put:
 *    summary: 댓글 수정 API
 *    description: 책에 관한 댓글을 수정하는 API 입니다.
 *    tags:
 *      - 댓글
 *    parameters:
 *      - in: path
 *        name: productNo
 *        schema:
 *          type: integer
 *        required: true
 *        description: 도서의 아이디값
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              reviewsId:
 *                type: integer
 *                required: true
 *              reviews:
 *                type: string
 *                required: true
 *            example:
 *              reviewsId: 1
 *              reviews: 리뷰입니다.
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
 *                msg: 댓글이 수정되었습니다.
 *      404:
 *        description: 비정상적인 요청, 응답
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *              example:
 *                msg: 실패했습니다
 */

/**
 * @swagger
 * /reviews/{productNo}:
 *  delete:
 *    summary: 댓글 삭제 API
 *    description: 책에 관한 댓글을 삭제하는 API 입니다.
 *    tags:
 *      - 댓글
 *    parameters:
 *      - in: path
 *        name: productNo
 *        schema:
 *          type: integer
 *        required: true
 *        description: 도서의 아이디값
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              reviewsId:
 *                type: integer
 *                required: true
 *            example:
 *              reviewsId: 1
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
 *                msg: 댓글이 삭제되었습니다
 *      404:
 *        description: 비정상적인 요청, 응답
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *              example:
 *                msg: 실패했습니다
 */