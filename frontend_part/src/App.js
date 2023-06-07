// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
// import Header from './components/header/header';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Main from './components/main/main';
import AddProduct from './components/addProduct/addProduct';
// import Home from "./components/home/home"
import Product from './components/main/searchproduct/product';
import Login from './components/auth/login/login';
import UserContext from './context/userContext';
import ProductContext from './context/productContext';
import Register from './components/auth/register/register';
function App() {
  const[products,setProducts]=useState([]);
  const[serchProductid,setSearchProductId]=useState('');
  const[loginUser,setloginUser]=useState(localStorage.getItem('user' || {}));
  

  

  useEffect(()=>{
    localStorage.setItem('user',loginUser);
    fetchdata();
  },[loginUser]);


  const route=createBrowserRouter([
    {
      path:"/",
      element:loginUser?<Main setSearchProductId={setSearchProductId}/>:<Login/>,
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
          path:'/cart',
          element:<h1>cart</h1>
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
