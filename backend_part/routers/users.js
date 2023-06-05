const express =require('express')
const router=express.Router();
const {getUsers, createUser,getUser}=require('../controllers/users')

router.get('/users',getUsers)

router.post('/user',createUser)

router.get('/user/:id',getUser);


module.exports=router;