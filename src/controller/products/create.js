const Products = require("../../models/products.js");

const createProduct = async (req,res) => {
  const user = res.locals.user;
  const { title,content,author,password,status } = req.body;

  if(!Object.keys(req.body).length) return res.status(400).send({ message:'데이터 형식이 올바르지 않습니다.' });
  
  try{
    await Products.create({ title, user_id:user.user_id, content, author, password, status });

    res.status(200).send({ message:"판매 상품을 등록하였습니다." });
  }catch(err){

    res.status(400).send({ message:'데이터 형식이 올바르지 않습니다.' ,err})
  }
}

module.exports = { createProduct };