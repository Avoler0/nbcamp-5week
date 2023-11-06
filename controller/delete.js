import products from "../schemas/products.schema.js";

export const deleteProduct = async (req,res) => {
  const { productId } = req.params;
  const { password } = req.body;
  console.log(productId === 'undefined')
  if(!Object.keys(req.body).length) return res.status(400).send({ message:'데이터 형식이 올바르지 않습니다.' });

  try{
    const checkResult = await products.find({_id:productId});

    if(!checkResult.length) return res.status(404).send({ message:'상품 조회에 실패하였습니다.' });
    if(checkResult[0].password !== password) return res.status(401).send({ message:'상품을 삭제할 권한이 존재하지 않습니다.' });

    await products.deleteOne({_id:productId});

    res.status(200).send({message:"상품을 삭제하였습니다."});
  }catch(err){
    return res.status(400).send({ message:'데이터 형식이 올바르지 않습니다.' ,err});
  }
}