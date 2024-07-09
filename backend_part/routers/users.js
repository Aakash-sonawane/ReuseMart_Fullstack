const express=require("express");
const userSchema = require("../model/userSchema");
const { register,login,getUser} = require("../controllers/users");
const router=express.Router();




router.post('/login',login)
router.post('/register',register)
router.get('/user/:id',getUser);


module.exports=router;