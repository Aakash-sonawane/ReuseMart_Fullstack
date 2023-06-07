// import logo from './logo.svg';
import './App.css';
import {useEffect, useState } from 'react';
import axios from 'axios'
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Main from './components/main/main';
import AddProduct from './components/addProduct/addProduct';
import Product from './components/main/searchproduct/product';
import Login from './components/auth/login/login';
import UserContext from './context/userContext';
import ProductContext from './context/productContext';
import Register from './components/auth/register/register';
import Profile from './components/router/profile/profile';


function App() {
  const[products,setProducts]=useState([]);
  const[serchProductid,setSearchProductId]=useState('');
  const[loginUser,setloginUser]=useState(JSON.parse(localStorage.getItem('user'))|| []);
  

  

  useEffect(()=>{
    if(loginUser)
    localStorage.setItem('user',JSON.stringify(loginUser));
    console.log(loginUser)
    fetchdata();
    
  },[loginUser]);


  const route=createBrowserRouter([
    {
      path:"/",
      element:Object.keys(loginUser).length>0?<Main setSearchProductId={setSearchProductId}/>:<Login/>,
      children:[
        {
          path:'/addProduct',
          element:<AddProduct/>
        },
        {
          path:'/product',
          element:<Product serchProductid={serchProductid}/>,
        },
        {
          path:'/profile',
          element:<Profile/>
        },
        {
          path:'/about',
          element:<h1>about</h1>
        },
      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    }
  ])
  console.log("loginuser",loginUser);
  const fetchdata=async()=>{
    const response= await axios.get('http://localhost:9000/products')
    setProducts(response.data);
    // console.log(response)
  }
  console.log("products is",products)


  return (
    <UserContext.Provider value={[loginUser,setloginUser]}>
      <ProductContext.Provider value={[products,setProducts]}>
    <RouterProvider router={route}>

    </RouterProvider>
    </ProductContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
