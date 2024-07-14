import React, { useState } from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'
export default function Header() {
  const [classStatus,setClassStatus]=useState(false)
  const [showMenuIcon,setShowMenuIcon]=useState(false)
  const navigate=useNavigate();
  return (
    <div className='header-wrap'>
      <div className='container-wrap'>
        <div className='navbar1 d_flex'>
        <div className='navbar_left d_flex'>
            <img src='https://p7.hiclipart.com/preview/181/883/650/circle-arrow-diagram-clip-art-round.jpg' alt=''></img>
            <div className="logo">
                re<span>Use</span>Mart
            </div>
        </div>
        <div className='navbar_right d_flex'>
        <ul className={`desk-menu d_flex`}>
            <li onClick={()=>{navigate('/')}}>Home</li>
            <li onClick={()=>{navigate('/about')}}>About</li>
            <li onClick={()=>{navigate('/sellProduct')}}>Sell product</li>
            <li onClick={()=>{navigate('/profile')}}>Profile</li>
        </ul>


        <div className='mob-menu-wrap'>

              <div className='menu-icon-wrap' onClick={()=>{setClassStatus(!classStatus)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                  <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                  <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                  <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              
              <ul className={`mobile-menu ${classStatus?'show':'hide'}`}>
            <li onClick={()=>{
              navigate('/')
              setClassStatus(!classStatus)
              }}>Home</li>
            <li onClick={()=>{
              navigate('/about')
              setClassStatus(!classStatus)
              }}>About</li>
            <li onClick={()=>{
              navigate('/sellProduct')
              setClassStatus(!classStatus)
              }}>Sell product</li>
            <li onClick={()=>{
              navigate('/profile')
              setClassStatus(!classStatus)
            }}>Profile</li>
        </ul>

        </div>

        </div>
      </div>

      </div>

      {/* <div className='mob-wrap'> */}
      
      {/* </div> */}
      
    </div>
  )
}
