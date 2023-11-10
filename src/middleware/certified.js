const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const certifiedMiddleWare = async (req,res,next)=>{
  const authorization = req.headers.authorization
  const bearerCheck = authorization && authorization.split(' ')[0] === 'Bearer';
  
  if(!authorization || !bearerCheck) return res.status(400).send({ message:'인증 실패' })
  
  try{
    const token = authorization.split(' ')[1];
    const tokenCheck = jwt.verify(token,process.env.JWT_SECRET_KEY)

    const user = await Users.findByPk(tokenCheck.user_id)

    res.locals.user = user.dataValues;

  }catch(err){
    if(err.message === 'jwt expired') return res.status(400).send({ message:'토큰 유효기간 에러' })
    if(err.message === 'invalid signature') return res.status(400).send({ message:'토큰 유효성 검사 에러' })

    return res.status(400).send({ message:'토큰 에러' })
  }

  // 인증에 성공하는 경우에는 req.locals.user에 인증 된 사용자 정보를 담고, 다음 동작을 진행합니다.
  next();
}

module.exports = certifiedMiddleWare;

/** 
 * 1. Request Header의 Authorization 정보에서 JWT를 가져와서, 인증 된 사용자인지 확인하는 Middleware를 구현합니다.
 * 2. 인증에 실패하는 경우에는 알맞은 Http Status Code와 에러 메세지를 반환 해야 합니다.
    - Authorization에 담겨 있는 값의 형태가 표준(Authorization: Bearer <JWT Value>)과 일치하지 않는 경우
    - JWT의 유효기한이 지난 경우
    - JWT 검증(JWT Secret 불일치, 데이터 조작으로 인한 Signature 불일치 등)에 실패한 경우
 * 3. 인증에 성공하는 경우에는 req.locals.user에 인증 된 사용자 정보를 담고, 다음 동작을 진행합니다. 
*/