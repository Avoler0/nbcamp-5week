const { Products,Users } = require('../../models');

const readAllProduct = async (req,res) => {
  // Query 스트링 예외처리 ASC or DESC 아니면 Default 값은 ASC
  const orderStr = req.query.order ? req.query.order.toUpperCase() === 'ASC' ? 'ASC' : req.query.order.toUpperCase() === 'DESC' ? 'DESC' : 'ASC' : 'ASC';

  try{
    const result = await Products.findAll({
      associations:'user_id',
      include: {
        model:Users,
        associations:'user_id',
        attributes:['email'],
      },
      order:[['createdAt',orderStr]],
    });

    res.status(200).json({ message:'상품 전체 조회에 성공했습니다.', data:result });
  }catch(err){
    console.log(err)
    res.status(500).send({ message:'상품 전체 조회에 실패했습니다.' })
  }

}

const readByIdProduct= async (req,res) => {
  // Query 스트링 예외처리 ASC or DESC 아니면 Default 값은 ASC
  const orderStr = req.query.order ? req.query.order.toUpperCase() === 'ASC' ? 'ASC' : req.query.order.toUpperCase() === 'DESC' ? 'DESC' : 'ASC' : 'ASC';
  const { productId } = req.params;
  
  try{
    const result = await Products.findOne({ where: { product_id: productId }, order:[['createdAt',orderStr]]});

    if(!result) return res.status(400).send({ message:'해당하는 상품은 없습니다.' });
    
    res.status(200).json({ message:'상품 상세 조회에 성공하였습니다.', data:result});
  }catch(err){
    res.status(500).send({message:'상품 상세 조회에 실패했습니다.'});
  }
}

module.exports = { readAllProduct, readByIdProduct };