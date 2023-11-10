const { Users } = require('../../models');
const encryptPassword = require('../../utils/encrypt');
const { createJwtAccessToken } = require('../../utils/jwtSign');

const createSort = { createdAt: -1 };
const loginUser = async (req,res) => {
  console.log('로그인',req.body)
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
// const readAllUsers = async (req,res) => {

//   try{
//     const result = await Users.findAll();

//     res.status(200).json({ data:result });
//   }catch(err){
//     console.log(err)
//     res.status(400).send({ message:'상품 조회에 실패했습니다.' })
//   }

// }

// const readByIdUser= async (req,res) => {
//   const { userId } = req.params;
//   try{
//     const result = await Users.findByPk(userId);

//     if(!result.length) throw new Error('not fount')
    
//     res.status(200).json({data:result});
//   }catch(err){
//     res.status(400).send({message:'상품 조회에 실패했습니다.'});
//   }
// }

module.exports = { loginUser };