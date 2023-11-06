import products from "../schemas/products.schema.js";

export const createProduct = async (req,res) => {
  const { title,content,author,password,status } = req.body;

  if(!Object.keys(req.body).length) return res.status(400).send({ message:'데이터 형식이 올바르지 않습니다.' });
  
  try{
    await products.create({ title,content,author,password,status });

    res.status(200).send({ message:"판매 상품을 등록하였습니다." });
  }catch(err){
    res.status(400).send({ message:'데이터 형식이 올바르지 않습니다.' ,err})
  }
}