import products from "../schemas/products.schema.js"

export const readAllProduct = async (req,res) => {
  try{
    const result = await products.find({})

    console.log(result)

    res.status(200).json(result);
  }catch(err){
    console.log(err)

    res.status(400).send('failed read')
  }

}

export const readByIdProduct= async (req,res) => {
  const { productId } = req.params;

  try{
    const result = await products.find({productId})

    res.status(200).json(result);
  }catch(err){
    console.log(err)
    
    res.status(400).send('failed read')
  }
}