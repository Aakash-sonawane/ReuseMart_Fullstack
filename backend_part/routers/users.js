const express=require("express");
const userSchema = require("../model/userSchema");
const { register,login } = require("../controllers/users");
const router=express.Router();




router.post('/login',login)
router.post('/register',register)



module.exports=router;