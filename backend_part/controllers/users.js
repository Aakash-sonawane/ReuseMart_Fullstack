const userSchema=require('../model/userSchema')

 const getUsers= async(req,res)=>{
    try {
        const data=await userSchema.find({});
        res.json(data);
        
    } catch (error) {
        res.status(500).send("error");
    }
}

const createUser=async(req,res)=>{
    const product=new userSchema(req.body);
    try {
        const datatoSave=await product.save();
        res.send(datatoSave)
        console.log(datatoSave);
        
    } catch (error) {
        res.status(404).send("error in saving data")
        console.log(error)
        
    }

}

const getUser=async(req,res)=>{
    try {
        const id=req.params.id;
        
        const data=await userSchema.findById(id);
        res.json(data);
        
    } catch (error) {
        res.status(403).send("not found")
        
    }
}

exports.getUsers=getUsers
exports.createUser=createUser;
exports.getUser=getUser;