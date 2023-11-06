import products from "../schemas/products.schema.js"

const createSort = { createdAt: -1 };

export const readAllProduct = async (req,res) => {
    
  try{
    const result = await products.find({}).sort(createSort)

    res.status(200).json({data:result});
  }catch(err){
    res.status(400).send({message:'상품 조회에 실패했습니다.'})
  }

}

export const readByIdProduct= async (req,res) => {
  const { productId } = req.params;
  try{
    const result = await products.find({_id: productId});

    if(!result.length) throw new Error('not fount')
    
    res.status(200).json({data:result[0]});
  }catch(err){
    res.status(400).send({message:'상품 조회에 실패했습니다.'});
  }
}