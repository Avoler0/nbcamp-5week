/**
 * @swagger
 * paths:
 *  /api/products:
 *    get:
 *      summary: "상품 전체 조회"
 *      description: "상품 전체를 조회하는 API"
 *      responses:
 *        "200":
 *          description: 상품 전체
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                      data:
 *                        type: object
 *                        example:
 *                              [
 *                                {
 *                                  "_id": "6544bef665e61050f3018031",
 *                                  "title": "최신 아이폰",
 *                                  "content": "팝니다.",
 *                                  "author": "판매자",
 *                                  "password": "password1234",
 *                                  "status": "FOR_SALE",
 *                                  "createdAt": "2023-11-03T09:35:50.776Z",
 *                                  "__v": 0
 *                                },
 *                                {
 *                                  "_id": "65449c5bddb959da24297ba9",
 *                                  "title": "믹서기",
 *                                  "content": "믹서기 팝니다.",
 *                                  "author": "판매자",
 *                                  "password": "비밀번호1234",
 *                                  "status": "FOR_SALE",
 *                                   "createdAt": "2023-11-03T07:08:11.511Z",
 *                                  "__v": 0
 *                                },
 *                              ]
 *        "400":
 *          description: 상품 전체
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: object
 *                    example: "상품 조회에 실패했습니다."  
 */

/**
 * @swagger
 * paths:
 *  /api/product/{productId}:
 *    get:
 *      summary: "상품 상세 조회"
 *      parameters:
 *        - in: path
 *          name: productId   # Note the name is the same as in the path
 *          required: true
 *          schema:
 *            type: string
 *      description: "상품의 product id를 parameter로 상세 조회를 하는 API"
 *      responses:
 *        "200":
 *          description: 상품 상세조회 성공
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    data:
 *                      type: object
 *                      example:
 *                           {
 *                             "_id": "6544bef665e61050f3018031",
 *                             "title": "최신 아이폰",
 *                             "content": "팝니다.",
 *                             "author": "판매자",
 *                             "password": "password1234",
 *                             "status": "FOR_SALE",
 *                             "createdAt": "2023-11-03T09:35:50.776Z",
 *                             "__v": 0
 *                           }
 *        "400":
 *          description: 상품 상세 조회 실패
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: object
 *                    example: "상품 조회에 실패했습니다."  
 */