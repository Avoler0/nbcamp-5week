import products from "../schemas/products.schema.js"

const createSort = { createdAt: -1 };

export const readAllProduct = async (req,res) => {
    
  try{
    const result = await products.find({}).sort(createSort)

    res.status(200).json(result);
  }catch(err){
    res.status(400).send('failed read')
  }

}

export const readByIdProduct= async (req,res) => {
  const { productId } = req.params;

  try{
    const result = await products.find({productId}).sort(createSort)

    res.status(200).json(result);
  }catch(err){
    console.log(err)
    
    res.status(400).send('failed read')
  }
}