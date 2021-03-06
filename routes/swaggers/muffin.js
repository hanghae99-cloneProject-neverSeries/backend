/**
 * @swagger
 * /muffin:
 *  post:
 *    summary: 머핀을 충전하는 API
 *    description: 웹 서비스를 이용하기 위해 유료 재화인 머핀을 충전하는 API 입니다.
 *    tags:
 *      - 구매
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required: true
 *            properties:
 *              muffin:
 *                type: integer
 *                required: true
 *            example:
 *              muffin: 15
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
 *                msg: 머핀이 충전되었습니다.
 *      400:
 *        description: 비정상적인 요청, 응답
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *              example:
 *                msg: 실패 메세지
 */

/**
 * @swagger
 * /buy:
 *  put:
 *    summary: 특정 도서 구매 API
 *    description: 머핀을 사용하여 도서를 구매하는 API
 *    tags:
 *      - 구매
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required: true
 *            properties:
 *              productId:
 *                type: integer
 *              round:
 *                type: integer
 *            example:
 *              productId: 1
 *              round: 12
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
 *                msg: 구매 완료
 */