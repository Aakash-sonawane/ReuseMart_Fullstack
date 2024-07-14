import React from 'react'
import "./home.css"
import { useNavigate } from 'react-router-dom';

export default function Card({data,setSearchProductId,isEdit}) {
    const navigate=useNavigate()
    return (
        <div className="card-wrapper">
            <div className='img-wrap'>
                <img src={data.image} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
                <div className="price">₹ {data.price}</div>
                <div className="title">{data.productName}</div>
                {isEdit? 
                <div className='edit_buttons'>
                    <button onClick={()=>{
                        navigate(`/editProduct/${data['_id']}`)
                    }}>Edit</button>
                    
                    <button>delete</button>
                </div>
                :<div id={data._id} className="view_button" onClick={(e)=>{
                    e.preventDefault();
                    setSearchProductId(e.target.id);
                    navigate(`/product/${e.target.id}`)
                    }}>View</div>}
                
            </div>
        </div>
    )
}
