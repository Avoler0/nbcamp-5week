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

    console.log('로그인',result)
    if(!result) throw new Error('not fount')

    const accessToken = createJwtAccessToken({user_id:result.dataValues.user_id});

    res.cookie('accessToken',accessToken);
    res.status(200).json({ message:'로그인에 성공 하였습니다.' });
  }catch(err){
    res.status(400).send({message:'찾는 아이디가 없습니다.'});
  }
}

module.exports = { loginUser };