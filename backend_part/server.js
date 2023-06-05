const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const userRouter = require('./routers/users.js')
const userSchema=require('./model/userSchema')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())



mongoose.connect("mongodb://127.0.0.1:27017/firstProject")

const db=mongoose.connection;
db.on('error',()=>{console.log("error")})

db.once("connected",()=>{console.log("connected")})


app.use('/',userRouter);

app.get('/',(req,res)=>{
    res.send('hello')
})

app.all("*",(req,res)=>{res.send('route does not exits')})
// app.get('/api/getAll',async(req,res)=>{
    // try {
    //     const data=await userSchema.find({});
    //     res.json(data);
        
    // } catch (error) {
    //     res.status(500).send("error");
    // }
    

// })

// app.post('/update',async(req,res)=>{
//     const product=new userSchema(req.body);
//     try {
//         const datatoSave=await product.save();
//         res.send(datatoSave)
//         console.log(datatoSave);
        
//     } catch (error) {
//         res.status(404).send("error in saving data")
//         console.log(error)
        
//     }

// })





app.listen(9000,()=>{console.log('server is running at 9000')});



// const express = require('express');
// const cors=require('cors')
// const app = express();

// // Mock data for products
// const products = [
//   { id: 1, name: 'Product 1', price: 10 },
//   { id: 2, name: 'Product 2', price: 20 },
//   { id: 3, name: 'Product 3', price: 30 },
// ];

// // GET endpoint to retrieve all products
// app.get('/api/products', (req, res) => {
//   res.json(products);
// });

// // GET endpoint to retrieve a specific product by ID
// app.get('/api/products/:id', (req, res) => {
//   const productId = Number(req.params.id);
//   const product = products.find((p) => p.id === productId);

//   if (product) {
//     res.json(product);
//   } else {
//     res.status(404).json({ error: 'Product not found' });
//   }
// });
// app.post("/api/post",(req,res)=>{
//     console.log(req.body)
// })
// // Start the server
// const port = 5000;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
 

