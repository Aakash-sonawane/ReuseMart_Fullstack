import React, { useContext } from 'react'
import "./profile.css"
import userContext from '../../../context/userContext'

export default function Profile() {
  const[user,setuser]=useContext(userContext);
  return (
    <div className='container_box'>
        <div className='sidebar'>
            <div className='sidebar_container'>
                <ul>
                    <li>Profile</li>
                    <li>My products</li>
                    <li>Messeges</li>
                    <li>Add Product</li>
                    <li>Notifications</li>
                    <li onClick={()=>{localStorage.clear();}}>Log out</li>
                </ul>
            </div>
        </div>
        <div className='profile_view'>
          <div className='profile_view_container'>
            <div className='user_profile'>
            {/* <h1>Profile</h1> */}
            <img src='https://www.imgcorporations.com/images/bg-img.jpg' alt='user_photo'></img>
            <h1>{user.name}</h1>
            <p>Email:-{user.email}</p>

            </div>

          </div>
            
        </div>
        
    </div>
  )
}
