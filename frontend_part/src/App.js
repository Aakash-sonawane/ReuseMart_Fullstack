// import logo from './logo.svg';
import './App.css';
import {useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Main from './components/main/main';
import AddProduct from './components/main/addProduct';
import Product from './components/main/product';
import Login from './components/auth/login/login';
import UserContext from './context/userContext';
import ProductContext from './context/productContext';
import Register from './components/auth/register/register';
import Profile from './components/profile/profile';
import MyProduct from './components/profile/myProduct';
import About from './components/About';
// import Chat from './components/Chat';
import { fetchdata } from './common';
import Messanger from './components/profile/Messanger';


function App() {
  const[products,setProducts]=useState([]);
  console.log("rerun app")
  const[serchProductid,setSearchProductId]=useState('');
  const[loginUser,setloginUser]=useState(JSON.parse(localStorage.getItem('user'))|| []);

  let fetchFlag=true;

  useEffect(()=>{
    if(loginUser){
      localStorage.setItem('user',JSON.stringify(loginUser));
    }
    if(fetchFlag){
      fetchdata(setProducts);
    }
    
    return ()=>{
      fetchFlag=false;
    }
    
  },[loginUser]);

  const route=createBrowserRouter([
    {
      path:"/",
      element:Object.keys(loginUser).length>0?<Main setSearchProductId={setSearchProductId}/>:<Login/>,
      children:[
        {
          path:'/sellProduct',
          element:<AddProduct isNew={true}/>
        },
        {
          path:'/editProduct/:id',
          element:<AddProduct isNew={false}/>
        },
        {
          path:'/product/:id',
          element:<Product serchProductid={serchProductid}/>,
        },
        {
          path:'/profile',
          element:<Profile setProductsData={setProducts}/>,
          children:[
            {
              path:'/profile/user',
              element:<h1>product</h1>
            },
            {
              path:'/profile/my-product',
              element:<MyProduct/>
            },
            {
              path:'/profile/notification',
              element:<h1>Notifications</h1>
            },
            {
              path:'/profile/message',
              element:<Messanger/>
            },
            {
              path:'/profile/addProduct',
              element:<h1>Add Product</h1>
            },
          ]
        },
        {
          path:'/about',
          element:<About/>
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

  return (
      <ProductContext.Provider value={[products,setProducts]}>
    <UserContext.Provider value={[loginUser,setloginUser]}>
    <RouterProvider router={route}>
    </RouterProvider>
    </UserContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
