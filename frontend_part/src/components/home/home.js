import React, { useContext } from 'react'
import Card from './card'
import "./home.css"
import productContext from '../../context/productContext';
export default function Home({setSearchProductId}) {
  const [products]=useContext(productContext);
    // console.log("home product is",products)
  return (
    <div className='wrapper'>
    <div className='container-wrap'>
      <div className='inner-wrapper'>
          {products && 
          products.map((product)=>{
            return (
            <Card  data={product} key={product['_id']} setSearchProductId={setSearchProductId}/>
          )
          })}
      </div>
    </div>

    </div>
  )
}
