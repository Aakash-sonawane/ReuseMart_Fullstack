const express =require('express')
const router=express.Router();
const {getProducts, createProduct,getProduct,updateProduct,handleChat}=require('../controllers/products')

router.get('/products',getProducts)

router.post('/product',createProduct)

router.patch('/update-product',updateProduct)

router.get('/product/:id',getProduct);

router.patch('/product/chat',handleChat)





module.exports=router;