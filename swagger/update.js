/**
 * @swagger
 * paths:
 *  /api/product/{productId}:
 *    patch:
 *      summary: "상품 수정"
 *      parameters:
 *        - in: path
 *          name: productId   # Note the name is the same as in the path
 *          required: true
 *          schema:
 *            type: string
 *      description: "상품 수정 API"
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
 *                title: 아이폰 14 Pro
 *                content: 개봉하고 한번도 안쓴 상품 팝니다.
 *                password: password1234!
 *      responses:
 *        "200":
 *          description: 성공
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: object
 *                    example: "상품 정보를 수정하였습니다."   
 *        "400":
 *          description: body에 필요한 데이터가 없음
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: object
 *                    example: "데이터 형식이 올바르지 않습니다."   
 *        "401":
 *          description: 비밀번호가 다름
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: object
 *                    example: "상품을 수정할 권한이 존재하지 않습니다." 
 *        "404":
 *          description: 상품을 찾을 수 없음
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  message:
 *                    type: object
 *                    example: "상품 조회에 실패하였습니다."  
 */