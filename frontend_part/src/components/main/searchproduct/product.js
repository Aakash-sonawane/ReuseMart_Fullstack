import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./product.css"
import { useNavigate } from 'react-router-dom'

export default function Product({ serchProductid }) {
  const [product, setProduct] = useState('')
  const [user, setUser] = useState('')
  const navigate=useNavigate();

  useEffect(() => {
    if(!serchProductid){
      navigate('/')
    }
    fetchSingleProductData()
    // fetchUer();
   
  },[])

  // const fetching=async()=>{
  //   await ;
  //   // if(product)
  //   await fetchUer();
  // }

  // const fetchUer=async()=>{
  //   if(product){

  //     const response=await axios.get(`http://localhost:9000/user/${product["user_id"]}`);
  //     console.log("user is",response.data);
  //     setUser(response.data);
  //   }
  // }
  // fetchUer();


  const fetchSingleProductData = async () => {
    const response = await axios.get(`http://localhost:9000/product/${serchProductid}`);
    setProduct(response.data);
    if(!response.data){
      navigate('/');
    }
    const userresponse=await axios.get(`http://localhost:9000/user/${response.data["user_id"]}`);
      // console.log("user is",userresponse.data);
      setUser(userresponse.data);
  }
  return (
    <div>
      
      {product &&

        <div className="container">
          <div className='product'>
            <div className='product_container'>
              <img src={product.image} alt='product imgae'></img>
              <div className='product_info'>
              <div><p>product name is:- {product.productName}</p></div>
              <div><p>price:- {product.price}</p></div>
              

              </div>
            </div>
            <div className='product_container'>
              <h1>Seller Contact</h1>
              <div className='seller_info'>
              <div><p><b>Name:-</b>{user.name}</p></div>
              <div><p><b>Email:-</b>{user.email}</p></div>
              <div><p><b>contact number:-</b>{product.contact}</p></div>
              <div><p><b>Address:-</b>{`${product.address['area']}, city-${product.address['city']}, state;-${product.address['state']}`}</p></div>
              <div><p><b>Pin-Code:-</b>{product.address['zipCode']}</p></div>
              </div>

            </div>

          </div>
        </div>

      }

    </div>
  )
}
