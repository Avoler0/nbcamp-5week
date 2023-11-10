const { Users } = require('../../models');
const encryptPassword = require('../../utils/encrypt');

const createRegister = async (req,res) => {
  const { email,password,checkPassword } = req.body;
  const emailExp = new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i);
  const emailCheck = emailExp.test(email);

  if(password.length < 6) return res.status(400).send({ message:'비밀번호가 너무 짧습니다.' });
  if(password !== checkPassword) return res.status(400).send({ message:'비밀번호가 같지 않습니다.' });
  if(!emailCheck) return res.status(400).send({ message:'이메일 패턴이 같지 않습니다.' });
  
  try{
    const encryptPw = encryptPassword(password);
    console.log('회원가입 암호화',encryptPw)
    const result = await Users.create({ email,password:encryptPw,checkPassword });
    // const data = { user_id:result.null, email:result.email}
    // const accessToken = createJwtAccessToken(data);

    res.cookie('accessToken',accessToken)
    res.status(200).send({ message:"회원가입 완료",data});
  }catch(err){
    console.log(err)
    if(err.name === 'SequelizeUniqueConstraintError') return res.status(400).send({message:`${err.errors[0].path}이 중복입니다.`})

    res.status(400).send({ message:'회원가입 실패' ,err})
  }
}

module.exports = { createRegister };