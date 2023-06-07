const express =require('express')
const router=express.Router();
const {getProducts, createProduct,getProduct}=require('../controllers/products')

router.get('/products',getProducts)

router.post('/product',createProduct)

router.get('/product/:id',getProduct);





module.exports=router;