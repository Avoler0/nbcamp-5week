const { Products } = require('../../models');

const createSort = { createdAt: -1 };

const readAllProduct = async (req,res) => {

  try{
    const result = await Products.findAll();

    res.status(200).json({ data:result });
  }catch(err){
    console.log(err)
    res.status(400).send({ message:'상품 조회에 실패했습니다.' })
  }

}

const readByIdProduct= async (req,res) => {
  const { productId } = req.params;
  try{
    const result = await Products.find({_id: productId});

    if(!result.length) throw new Error('not fount')
    
    res.status(200).json({data:result[0]});
  }catch(err){
    res.status(400).send({message:'상품 조회에 실패했습니다.'});
  }
}

module.exports = { readAllProduct, readByIdProduct };