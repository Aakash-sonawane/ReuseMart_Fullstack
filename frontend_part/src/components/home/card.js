import React from 'react'
import "./home.css"
import { useNavigate } from 'react-router-dom';

export default function Card({data,setSearchProductId}) {
    const navigate=useNavigate()
    return (
        <div className="box" style={{"width": `${18}rem`}}>
            <img src={data.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data.productName}</h5>
                <p className="card-text">Price:-{data.price}</p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                <button id={data._id} className="view_button" onClick={(e)=>{
                    e.preventDefault();
                    setSearchProductId(e.target.id);
                    navigate('/product')
                    }}>View</button>
            </div>
        </div>
    )
}
