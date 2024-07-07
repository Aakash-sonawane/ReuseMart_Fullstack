import React from 'react'
import "./home.css"
import { useNavigate } from 'react-router-dom';

export default function Card({data,setSearchProductId,isEdit}) {
    const navigate=useNavigate()
    console.log("isEdit is a",isEdit);
    return (
        <div className="box">
            <img src={data.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data.productName}</h5>
                <p className="card-text">Price:-{data.price}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                {isEdit? 
                <div className='edit_buttons'>
                    <button onClick={()=>{
                        navigate('/addProduct')
                    }}>Edit</button>
                    <button>delete</button>
                    </div>
                :<button id={data._id} className="view_button" onClick={(e)=>{
                    e.preventDefault();
                    setSearchProductId(e.target.id);
                    navigate('/product')
                    }}>View</button>}
                
            </div>
        </div>
    )
}
