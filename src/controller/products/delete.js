const { Products } = require("../../models");

const deleteProduct = async (req,res) => {
  const user = res.locals.user;
  const { productId } = req.params;

  try{
    const checkResult = await Products.findOne({ where: { product_id: productId } })

    if(!checkResult) 
    return res.status(404).send({ message:'상품 조회에 실패하였습니다.' });

    if(checkResult.dataValues.user_id !== user.user_id)
    return res.status(401).send({ message:'상품을 삭제할 권한이 존재하지 않습니다.' });

    await Products.destroy({ where: { product_id: productId, user_id:user.user_id } });

    res.status(200).send({message:"상품을 삭제하였습니다."});
  }catch(err){
    console.log(err,'에러')
    return res.status(400).send({ message:'데이터 형식이 올바르지 않습니다.' ,err});
  }
}

module.exports = { deleteProduct };