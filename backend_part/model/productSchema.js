const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    user_id:{
        type:String
        // required:true
    },
    contact:{
        type:Number,
        // required:true
    },
    productName:{
        type:String,
        // required:true
    },
    image:{
        type:String,
        // required:true
    },
    price:{
        type:Number,
        // required:true
    },

    address:{
        type:Object,
        // required:true
    },
    messages:Array
})

const model=new mongoose.model('product',productSchema);

module.exports=model;