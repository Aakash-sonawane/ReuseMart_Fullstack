import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./product.css"
import { useNavigate } from 'react-router-dom'

export default function Product({ serchProductid }) {
  const [product, setProduct] = useState('')
  const navigate=useNavigate();



  // const navigate = useNavigate();

  // useEffect(() => {
  //   fetchSingleProductData();
  //   const handlePageReload = () => {

  //     navigate('/'); // Replace '/main' with your main page route
  //   };

  //   window.addEventListener('beforeunload', handlePageReload);

  //   return () => {
  //     window.removeEventListener('beforeunload', handlePageReload);
  //   };
  // }, [navigate]);





  useEffect(() => {
    if(!serchProductid){
      navigate('/')
    }
    fetchSingleProductData();
    // if(!product){
    //   navigate('/')
    // }
  }, [])
  // /user/:id

  const fetchSingleProductData = async () => {
    const response = await axios.get(`http://localhost:9000/product/${serchProductid}`);
    setProduct(response.data);
    if(!response.data){
      navigate('/');
    }
  }
  return (
    <div>
      
      {product &&

        <div className="container">
          <div className='product'>
            <div className='product_container'>
              <img src={product.image}></img>
              <div className='product_info'>
              <div><p>product name is:- {product.productName}</p></div>
              <div><p>price:- {product.price}</p></div>
              

              </div>
            </div>
            <div className='product_container'>
              <h1>Seller Contact</h1>
              <div className='seller_info'>
              <div><p><b>Name:-</b>{product.name}</p></div>
              <div><p><b>Email:-</b>{product.email}</p></div>
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
