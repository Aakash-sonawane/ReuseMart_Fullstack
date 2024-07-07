import React, { useContext, useState } from 'react'
import axios from 'axios'

import "../login/login.css"
import { useNavigate } from 'react-router-dom'
import userContext from '../../../context/userContext'

export default function Login() {
  const[loginUser,setloginUser]=useContext(userContext);
  const navigate=useNavigate();
  
  const [user, setUser]=useState({
    email:"",
    password:""
  })

  const handleChange=e=>{
   
    const {name, value}=e.target;
    setUser({
      ...user,
      [name]:value
    })
  }
  const login=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:9000/login',user)
    .then(res=>{
      console.log(res.data.message)
      alert(res.data.message)
      if(res.data.message=="login successful")
      setloginUser(res.data.user)

    });
    navigate('/')
  }
  return (
    <div className='login_page'>
      {/* {console.log(user)} */}
    <div className='form-container'>
        <form>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" name="email" value={user.email} className="form-control" id="inputEmail3" onChange={handleChange}/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" name="password" value={user.password} className="form-control" id="inputPassword3" onChange={handleChange}/>
    </div>
  </div>

  <div className='form_buttons'>

  <button type="submit" className="btn btn-primary" onClick={login}>Login</button>
  or
  <button type="submit" className="btn btn-primary" onClick={()=>{navigate('/register')}}>Register</button>
  </div>
  
</form>
</div>
    </div>
  )
}
