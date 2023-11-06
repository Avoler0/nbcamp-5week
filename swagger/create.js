/**
 * @swagger
 * paths:
 *  /api/product:
 *    post:
 *      summary: "상품 등록"
 *      description: "상품 등록 API"
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:      # Request body contents
 *              type: object
 *              properties:
 *              id:
 *                type: integer
 *              name:
 *                type: string
 *              example:   # Sample object
 *                title: 아이폰 15 Pro
 *                content: 미개봉 상품 팝니다.
 *                author: 판매자
 *                password: password1234!
 *                status: FOR_SALE
 *      responses:
 *        "200":
 *          description: 상품 전체
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: object
 *                    example: "판매 상품을 등록하였습니다."  
 *        "400":
 *          description: 상품 등록 실패
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: object
 *                    example: "데이터 형식이 올바르지 않습니다."  
 */