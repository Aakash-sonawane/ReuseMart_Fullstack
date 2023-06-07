import React from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'
export default function Header() {
  const navigate=useNavigate();
  return (
    <div>
        <nav className='navbar1 d_flex'>
        <div className='navbar_left d_flex'>
            <img src='https://p7.hiclipart.com/preview/181/883/650/circle-arrow-diagram-clip-art-round.jpg' alt=''></img>
            <h3>ReUseMart</h3>
        </div>
        <div className='navbar_right d_flex'>
        <ul className='d_flex'>
            <li onClick={()=>{navigate('/')}}>Home</li>
            <li onClick={()=>{navigate('/about')}}>About</li>
            <li onClick={()=>{navigate('/addProduct')}}>Add product</li>
            <li onClick={()=>{navigate('/profile')}}>Profile</li>
        </ul>
        </div>

        </nav>
      
    </div>
  )
}
