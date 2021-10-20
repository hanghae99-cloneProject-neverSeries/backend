/**
 * @swagger
 * /login:
 *  post:
 *    summary: 로그인 API
 *    description: JWT 토큰 및 사용자 인증을 위한 API 입니다.
 *    tags:
 *      - 로그인
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              userId:
 *                type: string
 *                required: true
 *              pw:
 *                type: string
 *                required: true
 *            example:
 *              userId: this_is_test
 *              pw: "thisTest123!"
 *    responses:
 *      200:
 *        description: OK
 */
