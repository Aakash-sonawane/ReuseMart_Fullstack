import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from 'react-router-dom';
import "./addProduct.css"
import axios from 'axios';
import userContext from '../../context/userContext';
import { useParams } from 'react-router-dom';


export default function AddProduct({isNew}) {
    const[loginUser,setloginUser]=useContext(userContext)

    const [product,setProduct]=useState({
      "user_id":loginUser._id,
      "contact":"",
      "image":"",
      "productName":"",
      "price":""
    })
    const [address,setAddress]=useState({
      "area":"",
      "city":"",
      "state":"Choose...",
      "zipCode":"",
    })

    const params = useParams();
    useEffect(()=>{
      console.log("hello",params)
      if(params.id){
        getdata(params.id);
      }
    },[])

    const getdata=async (id)=>{
      const response= await axios.get(`http://localhost:9000/product/${id}`)
      console.log("edit",response.data)
      setProduct(response.data)
      setAddress(response.data.address)
      
    }

    const handleUpdatedInfo= async()=>{
      console.log(params.id)
      
      const response= await axios.patch(`http://localhost:9000/update-product?id=${params.id}`,product)

      alert(response.data.message)

    }

    const handleChange=(e)=>{
        // let name=;
        product[e.target.name]=e.target.value;
        setProduct({...product})
        // console.log('product',product)
        
    }
    const handleAddress=(e)=>{
      // let name=;
      address[e.target.name]=e.target.value;
      setAddress({...address})
      product["address"]=address;
      setProduct({...product})
      // console.log('Adress'.address)
  }

  // console.log("product is",product)

    const handleSubmit=async()=>{
            const response=await axios.post('http://localhost:9000/product',product)
            alert(response.data.message);

    }
    
    // console.log("product is",product);
  return (
    <div className='product_form'>
        <form className="row g-3">
  {/* <div className="col-md-6">
    <label htmlFor="inputname" className="form-label">Name</label>
    <input type="text" name='name' onChange={handleChange} className="form-control" id="inputname" value={product.name}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" name='email' onChange={handleChange} className="form-control" id="inputEmail4" value={product.email}/>
  </div> */}
  <div className="col-md-6">
    <label htmlFor="inputProductName" className="form-label">Product Name</label>
    <input type="text" name='productName' onChange={handleChange} className="form-control" id="inputProductName"  value={product.productName}/>
  </div>
  
  <div className="col-md-6">
    <label htmlFor="inputImgUrl" className="form-label">Product Image</label>
    <input type="text" name='image' onChange={handleChange} className="form-control" id="inputImgUrl" placeholder="something.jpg" value={product.image}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPrice" className="form-label">Product Price</label>
    <input type="number" name='price' onChange={handleChange} className="form-control" id="inputPrice" value={product.price} />
  </div>

  <div className="col-md-6">
    <label htmlFor="inputContact" className="form-label">Contact</label>
    <input type="number" name='contact' onChange={handleChange} className="form-control" id="inputContact" placeholder="8978988558" value={product.contact}/>
  </div>
  


  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" name='area' onChange={handleAddress} className="form-control" id="inputAddress" placeholder="1234 Main St" value={address.area}/>
  </div>
  {/* <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div> */}
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" name='city' onChange={handleAddress} className="form-control" id="inputCity" value={address.city}/>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" name='state' defaultValue={address.state} onChange={handleAddress} className="form-select" >
      <option value={'Choose...'}>Choose...</option>
      <option value={'maharashtra'}>Maharashtra</option>
      <option value={'rajstan'}>Rajstan</option>
      <option value={'gujrat'}>Gujrat</option>
      <option value={'odisha'}>Odisha</option>
      <option value={'hydrabad'}>Hydrabad</option>
      <option value={'jammu'}>jammu</option>
      <option value={'kashmir'}>kashmir</option>
    </select>
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input type="text" name='zipCode' onChange={handleAddress} className="form-control" id="inputZip" value={address.zipCode}/>
  </div>
  {/* <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div> */}
  <div className="col-12">

    {  isNew===true?<button type="submit" className="btn btn-primary" onClick={(e)=>{
      // e.preventDefault()
      handleSubmit();
    
    }}>Add</button>:

    <button onClick={handleUpdatedInfo}>Save</button>}
  </div>
</form>
    </div>
  )
}
