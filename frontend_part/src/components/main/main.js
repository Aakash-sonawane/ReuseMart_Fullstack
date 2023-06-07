import React, { useContext } from 'react'
import Header from '../header/header'
import Home from '../home/home'
import { Outlet, useOutlet } from 'react-router-dom'
// import Body from './body'
import "./main.css"
import productContext from '../../context/productContext'

export default function Main({setSearchProductId}) {
  
  const outlet = useOutlet();
  return (
    <div className='home'>
        <Header/>
        {outlet?<Outlet/>:<Home setSearchProductId={setSearchProductId}/>}
      
    </div>
  )
}
