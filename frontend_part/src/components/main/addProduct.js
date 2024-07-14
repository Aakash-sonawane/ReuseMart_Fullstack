import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from 'react-router-dom';
import axios from 'axios';
import userContext from '../../context/userContext';
import { useParams } from 'react-router-dom';


export default function AddProduct({isNew}) {
    const[loginUser]=useContext(userContext)

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
      "state":"",
      "zipCode":"",
    })

    const params = useParams();

    useEffect(()=>{
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
      const response= await axios.patch(`http://localhost:9000/update-product?id=${params.id}`,product)
      alert(response.data.message)
    }

    const handleChange=(e)=>{
        product[e.target.name]=e.target.value;
        setProduct({...product})
    }
    const handleAddress=(e)=>{
      address[e.target.name]=e.target.value;
      setAddress({...address})
      product["address"]=address;
      setProduct({...product})
  }

  // console.log("product is",product)

    const handleSubmit=async(e)=>{
// e.preventDefault()
      console.log("adress",address.state)
      if(product.productName && product.price && address.city && address.area && address.zipCode && address.state){
        const response=await axios.post('http://localhost:9000/product',product)
        alert(response.data.message);
      }


    }
    
    // console.log("product is",product);
  return (

    <div className='container-wrap'>
        <div className='product_form'>
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputProductName" className="form-label">Product Name</label>
                <input type="text" name='productName' onChange={handleChange} className="form-control" id="inputProductName"  value={product.productName} required/>
              </div>
      
              <div className="col-md-6">
                <label htmlFor="inputImgUrl" className="form-label">Product Image</label>
                <input type="text" name='image' onChange={handleChange} className="form-control" id="inputImgUrl" placeholder="something.jpg" value={product.image} />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPrice" className="form-label">Product Price</label>
                <input type="number" name='price' onChange={handleChange} className="form-control" id="inputPrice" value={product.price} required/>
              </div>

              <div className="col-md-6">
                <label htmlFor="inputContact" className="form-label">Contact</label>
                <input type="number" name='contact' onChange={handleChange} className="form-control" id="inputContact" placeholder="8978988558" value={product.contact} required/>
              </div>
      
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Address</label>
                <input type="text" name='area' onChange={handleAddress} className="form-control" id="inputAddress" placeholder="1234 Main St" value={address.area} required/>
              </div>

              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">City</label>
                <input type="text" name='city' onChange={handleAddress} className="form-control" id="inputCity" value={address.city} required/>
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">State</label>
                <select id="inputState" name='state' defaultValue={address.state} onChange={handleAddress} className="form-select" >
                  <option value={'choose'}>choose state</option>
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
                <input type="text" name='zipCode' onChange={handleAddress} className="form-control" id="inputZip" value={address.zipCode} required/>
              </div>
      
              <div className="col-12">
                {  
                isNew===true?
                <button type="submit" className="btn btn-primary" onClick={(e)=>{
                  handleSubmit();
                }}>Sell</button>:
                <button onSubmit={handleUpdatedInfo}>Save</button>
                }
              </div>
            </form>
        </div>
    </div>
  )
}
