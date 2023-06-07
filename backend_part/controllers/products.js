const productSchema=require('../model/productSchema')

 const getProducts= async(req,res)=>{
    try {
        const data=await productSchema.find({});
        res.json(data);
        
    } catch (error) {
        res.status(500).send("error");
    }
}

const createProduct=async(req,res)=>{
    const product=new productSchema(req.body);
    try {
        const datatoSave=await product.save();
        res.send({"message":"product Added successfully"})
        console.log(datatoSave);
        
    } catch (error) {
        res.status(404).send("error in saving data")
        console.log(error)
        
    }

}

const getProduct=async(req,res)=>{
    try {
        const id=req.params.id;
        
        const data=await productSchema.findById(id);
        res.json(data);
        
    } catch (error) {
        res.status(403).send("not found")
        
    }
}

exports.getProducts=getProducts
exports.createProduct=createProduct;
exports.getProduct=getProduct;