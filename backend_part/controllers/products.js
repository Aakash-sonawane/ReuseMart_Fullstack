const productSchema=require('../model/productSchema')
const userSchema= require('../model/userSchema')

 const getProducts= async(req,res)=>{
     try {
        const data=await productSchema.find({});
        // console.log("run all products")
        res.json(data);
        
    } catch (error) {
        res.status(500).send("error");
    }
}

const createProduct=async(req,res)=>{
    const product=new productSchema(req.body);
    try {
        // console.log("run create products")
        const datatoSave=await product.save();
        res.send({"message":"product Added successfully"})
        // console.log(datatoSave);
        
    } catch (error) {
        res.status(404).send("error in saving data")
        console.log(error)
        
    }

}

const updateProduct=async(req,res)=>{
    
   try {
    // console.log("run update product")
    const {id} =req.query;
    const data= req.body;
    const updatedData= await productSchema.findByIdAndUpdate(id,{$set:data})
    res.send({"message":"Product info save successfully"})
    // console.log(data)
   } catch (error) {
    res.send({"msg":"error"})
    console.log("error")
   }
}

const getProduct=async(req,res)=>{
    try {
        // console.log("run single product")
        const id=req.params.id;
        
        const data=await productSchema.findById(id);
        res.json(data);
        
    } catch (error) {
        res.status(403).send("not found")
        
    }
}

const handleChat=async(req,res)=>{
    try {
     const {id} =req.query;
    //  console.log(id)
     const{buyer,seller,msgFrom,msgFromSender}=req.body
    //  console.log("run chat")
     console.log("buyer",buyer)
    //  console.log("seller",seller)

     let senderName;
     if(msgFrom==="buyer"){
         senderName= buyer['name']

     }else if(msgFrom==="seller"){
        senderName=seller['name']
     }
    //  console.log(senderName)
     const chatProduct= await productSchema.findById(id)
     let pos,newMessage;
    //  console.log(seller)

     const message=chatProduct.messages && chatProduct.messages.filter((msg,index)=>{
        if(msg.buyerId==buyer['_id']){
            pos=index;
            return msg;
        }
    })

    if(message.length){
        message[0].chat=[...message[0].chat,{[senderName]:msgFromSender}]
        chatProduct.messages[pos]=message[0];
    }
    else{
         newMessage={
                 "buyerId":buyer['_id'],
                 "sellerId":seller['_id'],
                 "chat":[{[senderName]:msgFromSender}]
        }
    }
    const productData= await productSchema.findByIdAndUpdate(id,{$set:{"messages":newMessage?[...chatProduct.messages,newMessage]:chatProduct.messages}})
     res.send({"msg":"chat send"})
    } 
    
    catch (error) {
     res.send({"msg":"error"})
     console.log(error)
    }
 }

exports.getProducts=getProducts
exports.createProduct=createProduct;
exports.getProduct=getProduct;
exports.updateProduct=updateProduct;
exports.handleChat=handleChat;
