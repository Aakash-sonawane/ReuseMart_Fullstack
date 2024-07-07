const userSchema = require("../model/userSchema");


const register=async(req,res)=>{
    const user=new userSchema(req.body);

    try {
        const data=await user.save();
        res.status(200).send(data)
        
    } catch (error) {
        res.status(200).send(error.message);
    }
}


const login=async(req,res)=>{
    const {email,password}=req.body;
    try {
        const data=await userSchema.findOne({email:email})
        if(data){
            if(password===data.password){
                console.log(data)
               return res.send({message:"login successful",user:data})
            }else{
                console.log({message:"password didn't match"})
                return res.send({message:"password didn't match"})
            }
        }else{
            console.log({message:"user not register"})
            res.send({message:"user not register"})
        }
        
    } catch (error) {
        
    }
}
const getUser=async(req,res)=>{
    const {id}=req.params;
    try {
        const data=await userSchema.findOne({_id:id});
        res.send(data);
        console.log(data);
    } catch (error) {
        res.send("not user found")
    }
}
exports.register=register;
exports.login=login;
exports.getUser=getUser;