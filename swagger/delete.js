/**
 * @swagger
 * paths:
 *  /api/product/{productId}:
 *    patch:
 *      summary: "상품 삭제"
 *      parameters:
 *        - in: path
 *          name: productId   # Note the name is the same as in the path
 *          required: true
 *          schema:
 *            type: string
 *      description: "상품 삭제 API"
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:      # Request body contents
 *              type: object
 *              properties:
 *              example:   # Sample object
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
 *                    example: "상품을 삭제하였습니다."   
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
 *                    example: "상품을 삭제할 권한이 존재하지 않습니다." 
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