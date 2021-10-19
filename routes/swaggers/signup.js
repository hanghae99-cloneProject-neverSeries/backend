/**
 * @swagger
 * /signup:
 *  post:
 *    summary: 회원가입 API
 *    description: 웹 서비스를 이용하기 위한 계정 생성 API 입니다.
 *    tags:
 *      - 회원가입
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required: true
 *            properties:
 *              userId:
 *                type: string
 *                required: true
 *              pw:
 *                type: string
 *                required: true
 *              pwCheck:
 *                type: string
 *                required: true
 *              nickname:
 *                type: string
 *                required: true
 *            example:
 *              userId: "this_is_test"
 *              pw: "thisTest123!"
 *              pwCheck: "thisTest123!"
 *              nickname: "test"
 *    responses:
 *      200:
 *        description: success
 */