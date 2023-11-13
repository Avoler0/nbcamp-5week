const { Users } = require('../../models');
const encryptPassword = require('../../utils/encrypt');
const { createJwtAccessToken } = require('../../utils/jwtSign');

// const createSort = { createdAt: -1 };
const loginUser = async (req,res) => {
  const { email,password } = req.body;

  try{
    const encrypt = encryptPassword(password)

    const result = await Users.findOne({
      where:{
        email:email,
        password:encrypt
      }
    });

    // Users.update({
    //   updatedAt:Date.now()
    // },
    // {
    //   where:{
    //     email:email,
    //     password:encrypt
    //   }
    // })

    if(!result) return res.status(204).send({message:'이메일 또는 비밀번호가 일치하지 않습니다.'});

    const accessToken = createJwtAccessToken({user_id:result.dataValues.user_id});

    res.cookie('accessToken',accessToken);
    res.status(200).json({ message:'로그인에 성공 하였습니다.' });
  }catch(err){
    res.status(500).send({message:'로그인 서버 에러.'});
  }
}

const readMyInfo = (req,res) => {
  const user = res.locals.user;
  
  try{
    const info = Object.assign({},user);
    delete info.password;

    res.status(200).json({ message:'정보 조회에 성공 하였습니다.', data:info});
  }catch(err){
    
    res.status(400).send({message:'정보 조회에 실패 하였습니다.'});
  }
}
module.exports = { loginUser, readMyInfo };