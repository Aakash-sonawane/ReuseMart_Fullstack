import React, { useContext } from 'react'
import "./profile.css"
import userContext from '../../../context/userContext'
import { Outlet, useNavigate, useOutlet } from 'react-router-dom';

export default function Profile() {
  const[user,setuser]=useContext(userContext);
  console.log("rerun tt")
  const navigate=useNavigate();
  const outlet=useOutlet();
  return (
    <div className='container_box'>
        <div className='sidebar'>
            <div className='sidebar_container'>
                <ul>
                    <li onClick={()=>{navigate('/profile')}}>Profile</li>
                    <li onClick={()=>{navigate('/profile/my-product')}}>My products</li>
                    <li onClick={()=>{navigate('/profile/message')}}>Messeges</li>
                    <li onClick={()=>{navigate('/addProduct')}}>Add Product</li>
                    <li onClick={()=>{navigate('/profile/notification')}}>Notifications</li>
                    <li onClick={()=>{setuser({}); navigate('/') }}>Log out</li>
                </ul>
            </div>
        </div>
        <div className='profile_view'>
          {outlet?<Outlet/>:
          <div className='profile_view_container'>
          <div className='user_profile'>
          {/* <h1>Profile</h1> */}
          <img src='https://www.imgcorporations.com/images/bg-img.jpg' alt='user_photo'></img>
          <h1>{user.name}</h1>
          <p>Email:-{user.email}</p>

          </div>

        </div>
          }
            
        </div>
        
    </div>
  )
}
