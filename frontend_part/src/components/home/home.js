import React, { useContext } from 'react'
import Card from './card'
import "./home.css"
import productContext from '../../context/productContext';
export default function Home({setSearchProductId}) {
  const [products]=useContext(productContext);
    // console.log("home product is",products)
  return (
    <div className='container'>
      {products && 
      products.map((product)=>{
        //  
        return <>
        <Card data={product} setSearchProductId={setSearchProductId}/>
     </>   
      })}
    </div>
  )
}
