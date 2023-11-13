const { Products } = require('../../models');

const updateProduct = async (req,res) => {
  const user = res.locals.user;
  const { productId } = req.params;
  const { title,content } = req.body;

  console.log(req.body)
  if(!title || !content) return res.status(400).send({ message:'데이터 형식이 올바르지 않습니다.' });

  try{
    const checkResult = await Products.findOne({ where: { product_id: productId } })

    if(!checkResult) 
    return res.status(204).send({ message:'해당하는 상품은 없습니다.' });

    if(checkResult.dataValues.user_id !== user.user_id)
    return res.status(401).send({ message:'상품을 수정할 권한이 존재하지 않습니다.' })

    await Products.update({ title,content},{
      where: { product_id: productId, user_id:user.user_id }
    })

    res.status(200).send({ message:'상품 정보를 수정하였습니다.' })
  }catch(err){
    res.status(500).send({ message:'상품 정보 수정이 실패하였습니다.' })
  }
}

module.exports = { updateProduct }