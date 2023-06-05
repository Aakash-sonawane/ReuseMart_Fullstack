import React from 'react'
import './header.css'
export default function Header() {
  return (
    <div>
        <nav className='navbar d_flex'>
        <div className='navbar_left d_flex'>
            <img src='https://p7.hiclipart.com/preview/181/883/650/circle-arrow-diagram-clip-art-round.jpg'></img>
            <h3>ReUseMart</h3>
        </div>
        <ul className='navbar_right d_flex'>
            <li>Home</li>
            <li>About</li>
            <li>Add product</li>
            <li>Cart</li>
        </ul>

        </nav>
      
    </div>
  )
}
