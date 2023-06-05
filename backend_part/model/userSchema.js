const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    contact:{
        type:Number,
        require:true
    }
})

const model=new mongoose.model('user',userSchema);

module.exports=model;