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

    res.status(200).json({ data:result });
  }catch(err){
    console.log(err)
    res.status(400).send({ message:'상품 조회에 실패했습니다.' })
  }

}

const readByIdProduct= async (req,res) => {
  // Query 스트링 예외처리 ASC or DESC 아니면 Default 값은 ASC
  const orderStr = req.query.order ? req.query.order.toUpperCase() === 'ASC' ? 'ASC' : req.query.order.toUpperCase() === 'DESC' ? 'DESC' : 'ASC' : 'ASC';
  const { productId } = req.params;
  
  try{
    const result = await Products.findOne({ where: { product_id: productId }, order:[['createdAt',orderStr]]});

    if(!result.length) throw new Error('not fount')
    
    res.status(200).json({data:result[0]});
  }catch(err){
    res.status(400).send({message:'상품 조회에 실패했습니다.'});
  }
}

module.exports = { readAllProduct, readByIdProduct };